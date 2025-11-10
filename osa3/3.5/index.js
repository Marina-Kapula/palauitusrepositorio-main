const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
  { id: 3, name: "Dan Abramov", number: "12-43-234345" }
]

// GET все контакты
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// GET один контакт
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  if (person) res.json(person)
  else res.status(404).end()
})

// DELETE контакт
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const personExists = persons.some(p => p.id === id)
  if (personExists) {
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
  } else res.status(404).end()
})

// POST добавить контакт
app.post('/api/persons', (req, res) => {
  const body = req.body
  if (!body.name || !body.number)
    return res.status(400).json({ error: 'name or number missing' })

  const id = Math.floor(Math.random() * 1000000)
  const person = { id, name: body.name, number: body.number }
  persons.push(person)
  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
