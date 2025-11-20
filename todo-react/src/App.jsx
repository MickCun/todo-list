import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  const addTodo = () => {
    const inputBox = document.getElementById("todo");
    const inputValue = inputBox.value
    console.log(inputValue)
  }

  return (
    <>
      <input type="text" id="todo"></input>
      <button onClick={ addTodo }>Click Me!</button>
    

    </>
  )


}



export default App
