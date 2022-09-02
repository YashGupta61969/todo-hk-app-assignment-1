import React, { useState } from 'react'
import './todoInput.css'

function TodoInput({set}) {
  const [inputText, setInputText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(inputText.length){
          set(prev=>[...prev,inputText])
          setInputText('');
        }else alert("please Enter Something")
        
    }

  return (
    <form onSubmit={handleSubmit} className='todo_form'>
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder='Type Here' />
        <button>Add Todo</button>
    </form>
  )
}

export default TodoInput
