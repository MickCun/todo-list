import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  const [task, setTask] = useState(() => {
    return localStorage.getItem("task") || ""
  })

  // 2️⃣ Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  // 3️⃣ Save task whenever it changes
  useEffect(() => {
    localStorage.setItem("task", task)
  }, [task])

  const addTodo = () => {
    setTodos([...todos, task])
    setTask("")
  }

  return (
    <>
      <div class="custom-container">
        <div class="todo-container">
          <div class="todo-header">
            <h1>Todo List</h1>
          </div>
          <div class="input-group mb-3">
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" class="form-control" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addTodo}>Add Todo</button>
          </div>
          <ul>
            { todos.map((t, i) => (
              <li key={i}>{t}</li>
            )) }
          </ul>
        </div>
      </div>

    </>
  )
}

export default App