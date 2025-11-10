const express = require('express')
const app = express()

// Дані у "пам'яті" сервера
let persons = [
  { id: 1, name: 'Arto Hellas', number: '040-123456' },
  { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' }
]

// Роут для /info
app.get('/info', (request, response) => {
  const date = new Date()
  const info = `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
  `
  response.send(info)
})

// Запуск сервера
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
