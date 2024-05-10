import { useState } from 'react'
import './style.css'

function TodoList() {
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItem = (event) => {
    const target = event.target
    const item = target.value

    if(item) {
      setTodoList([...todoList, item])
      setInputValue('')
    }
  }

  const updateInput = (event) => {
    setInputValue(event.target?.value)
  }

  const handleSubmitTodoItem = (event) => {
    if(event.key === 'Enter' && inputValue) {
      addItem(event)
    }
  }

  return (
   <div className='todo'>
    <p>Todo list :)</p>
    <label htmlFor='todo'>Add something!</label>
    <input 
      id='todo' 
      type="text"
      value={inputValue}
      onChange={updateInput}
      onKeyDown={handleSubmitTodoItem}
    />
    <ul className='todo-list'>
      {todoList.map((item, index) => {
        <li key={index}>{item}</li>
        return <li key={index}>{item}</li>

      })}
    </ul>
   </div>
  )
}

export default TodoList
