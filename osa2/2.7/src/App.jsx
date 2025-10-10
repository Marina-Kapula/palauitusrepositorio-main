import { useState } from 'react'
import './Index.css'
import './App.css'


const App = () => {
 
const [persons, setPersons] = useState([]) 
const [newName, setNewName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    const personObject = { name: newName }
    const updatedPersons = persons.concat(personObject)

    setPersons(updatedPersons)
    setNewName('')

    console.log('names:', updatedPersons.map(p => p.name))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
<form onSubmit={addPerson}>
  <div>
    name: <input value={newName} onChange={handleNameChange} />
    <button type="submit">Add</button>  {/* кнопка сразу после input */}
  </div>
</form>



{/* === список сраних iмен === */}

      <h2>Numbers</h2>
      {persons.map(person => 
        <p key={person.name}>{person.name}</p>
      )}

      <div>: {newName}</div> {/* строка для провірки */}
    </div>
  )
}




export default App
