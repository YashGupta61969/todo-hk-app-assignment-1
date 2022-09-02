import React from 'react'
import './todolist.css'

function TodoList({todos}) {
  return (
    <div className='todo_list'>
      <h1>Your Todos</h1>
      {todos.length? <div className="todos_container">
      {todos.map((todo, ind)=>(
        <div key={ind} className="todo_item">
            <p>{todo}</p>
        </div>
      ))}
      </div>:<p>No Todos Added</p>}
    </div>
  )
}

export default TodoList
