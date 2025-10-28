import { useState, useEffect } from 'react'
import axios from 'axios'
import './Index.css'
import './App.css'

// ------------------- Компоненты -------------------

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

const Person = ({ person }) => (
  <p>
    {person.name} {person.number && <> — {person.number}</>}
  </p>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => (
      <Person key={person.id} person={person} />
    ))}
  </div>
)

// ------------------- Главный компонент App -------------------

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // ------------------- Загрузка с сервера -------------------
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
      .catch(error => console.error('❌ Error fetching data:', error))
  }, [])

  // ------------------- Добавление нового человека -------------------
  const addPerson = async (event) => {
    event.preventDefault()

    if (!newName.trim() || !newNumber.trim()) {
      alert('Enter name and number!')
      return
    }

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = { name: newName, number: newNumber }

    try {
      const response = await axios.post('http://localhost:3001/persons', personObject)
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      console.log('✅ Added:', response.data)
    } catch (error) {
      console.error('❌ Error saving person:', error)
      alert('Failed to save person — check if json-server is running!')
    }
  }

  // ------------------- Обработчики ввода -------------------
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  // ------------------- Фильтрация контактов -------------------
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  // ------------------- JSX -------------------
  return (
    <div>
      <h2>Phonebook</h2>

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
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
