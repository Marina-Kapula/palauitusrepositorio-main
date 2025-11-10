const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Начальные контакты
let persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" }
]

// Показать один контакт
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

// Удалить контакт по id
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const personExists = persons.some(p => p.id === id)

  if (personExists) {
    // удаляем контакт
    persons = persons.filter(p => p.id !== id)
    res.status(204).end() // 204 = успешно, без ответа
  } else {
    res.status(404).end() // 404 = контакт не найден
  }
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
