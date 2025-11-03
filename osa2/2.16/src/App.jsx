import { useState, useEffect } from 'react'
import './Index.css'
import './App.css'
import personService from './services/phonebook'

const Notification = ({ message }) => {
  if (!message) return null
  return (
    <div className="notification">
      {message}
    </div>
  )
}

const Filter = ({ filter, handleFilterChange }) => (
  <div className="filter-row">  
    <span>Filter shown with:</span>
    <input value={filter} onChange={handleFilterChange} />
  </div>
)

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => (
  <form onSubmit={addPerson}>
    <div className="form-row-name">  
      <span>name:</span>
      <input value={newName} onChange={handleNameChange} />
    </div>
    <div className="form-row-number-add">  
      <span>number:</span>
      <input value={newNumber} onChange={handleNumberChange} />
      <button type="submit">Add</button>
    </div>
  </form>
)

const Person = ({ person, handleDelete }) => (
  <p>
    {person.name} {person.number && `— ${person.number}`}
    <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
  </p>
)

const Persons = ({ persons, handleDelete }) => (
  <div>
    {persons.map(person => (
      <Person key={person.id} person={person} handleDelete={handleDelete} />
    ))}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => console.error('Error fetching data', error))
  }, [])

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(''), 4000) 
  }

  const addPerson = async (event) => {
    event.preventDefault()
    if (!newName.trim() || !newNumber.trim()) return

    const existingPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())

    if (existingPerson) {
      if (window.confirm(`${newName} is already added. Replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        try {
          const returnedPerson = await personService.update(existingPerson.id, updatedPerson)
          setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
          showNotification(`Updated ${existingPerson.name}'s number`)
          setNewName('')
          setNewNumber('')
        } catch (error) {
          alert(`Information of ${existingPerson.name} has already been removed from server`)
          setPersons(persons.filter(p => p.id !== existingPerson.id))
        }
      }
      return
    }

    const personObject = { name: newName, number: newNumber }
    try {
      const returnedPerson = await personService.create(personObject)
      setPersons(persons.concat(returnedPerson))
      showNotification("Nimi ja numero lisätty")
      setNewName('')
      setNewNumber('')
    } catch (error) {
      console.error('Error saving person', error)
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      const stringId = id.toString()
      personService
        .remove(id)
        .then(() => {
          setPersons(prev => prev.filter(p => p.id.toString() !== stringId))
          showNotification(`Deleted ${name}`)
        })
        .catch(() => {
          alert(`Information of ${name} has already been removed from server`)
          setPersons(prev => prev.filter(p => p.id.toString() !== stringId))
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
