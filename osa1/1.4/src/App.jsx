function App() {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]



 console.log(course)

  return (
parts.forEach(part => console.log(`Part: ${part.name}, Exercises: ${part.exercises}`))

  )
}

export default App
