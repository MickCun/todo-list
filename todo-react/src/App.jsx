import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  const addTodo = () => {
    setTodos([...todos, task])
    setTask("")
  }

  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Click Me!</button>

      <ul>
        { todos.map((t, i) => (
          <li key={i}>{t}</li>
        )) }
      </ul>
    </>
  )


}



export default App
