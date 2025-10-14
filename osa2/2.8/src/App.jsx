import { useState } from 'react'
import './Index.css'
import './App.css'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')


   

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




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
<div>
  <span>name:</span>
  <input value={newName} onChange={handleNameChange} />
</div>
<div>
  <span>number:</span>
  <input value={newNumber} onChange={handleNumberChange} />
</div>
<div>
  <button type="submit">Add</button>
</div>

      </form>

      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>
          {person.name} {person.number && <> — {person.number}</>}
        </p>
      )}

      <div>: {newName}</div> {/* для перевірки */}
    </div>
  )
}

export default App