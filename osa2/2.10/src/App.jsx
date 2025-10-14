
import { useState } from 'react'
import './Index.css'
import './App.css'

// ------------------- -------------------

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

// Список людей
const Persons = ({ persons }) => (
  <div>
    {persons.map(person => <Person key={person.name} person={person} />)}
  </div>
)

// ------------------- ГОЛОВНИЙ компонент App -------------------

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Функція шоб нову людину добавити
  const addPerson = (event) => {
    event.preventDefault()

    // === Перевірка на дублікати ===
    if (persons.some(person => person.name === newName)) {
      alert(`${newName}  is already added to phonebook`)
      return
    }

    // === Кінець перевірки ===
    const personObject = {
      name: newName,
      number: newNumber
    }
    const updatedPersons = persons.concat(personObject)

    setPersons(updatedPersons)
    setNewName('')
    setNewNumber('') 

    console.log('names:', updatedPersons.map(p => p.name))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

 // === ФІЛЬТР ===
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

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

      <div>: {newName}</div> {/* для перевірки */}
    </div>
  )
}

export default App
