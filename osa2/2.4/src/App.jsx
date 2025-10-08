import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
      { name: 'Redux', exercises: 11 }

    ]
  }
 
  function Header({ course }) {
    return <h1>{course}</h1>
  }


  function Content({ parts }) {
    return (
      <div>
        {parts.map((part, index) => (
          <p key={index}>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
    )
  }

  function Total({ parts }) {
    const total = parts.reduce((sum, part) => {
      console.log('what is happening', sum, part)
      return sum + part.exercises
    }, 0)


  return <p>Number of exercises {total}</p>
}

return ( <div className='box'>
   <Header course={course.name} 
/> <Content parts={course.parts} 
/> <Total parts={course.parts} /> 
</div> ) }


export default App
