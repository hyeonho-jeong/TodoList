import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([]) // operation of todos data store with useStateHook

  // Make a "Add" function 
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)
  }

  // Make a "Delet" function
  const deleteTodo = id => {
    const removedArr = todos.filter(todo => todo.id !== id)
    setTodos(removedArr)
  }

  // Make a "Update" function
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  // Make a "complete" function
  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    console.log('complete')
    setTodos(updateTodos)
  }

  return (
    <div className="todo-list">
      <h1>What's The Plan For Today?</h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo // Transfer the todo component with the to-do data, removal function, modification function, and completion function to props
        todos={todos} 
        removeTodo={deleteTodo} 
        updateTodo={updateTodo} 
        completeTodo={completeTodo} 
      ></Todo>
    </div>
  )
}

export default TodoList