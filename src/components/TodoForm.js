import React, { useState } from 'react'

const TodoForm = props => { //Inside the props, the onSubmit function is the key value in the object.
  const [input, setInput] = useState('') // To save the value entered in the input, useState is used to generate the input variable.

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({ // Runs a function received from the parent component, which then passes the factor value to the parent component, i.e., the id, text value.
      id: Math.floor(Math.random() * 10000),
      text: input,
    })

    setInput('') // Initializes the input value. Makes the text in the <input value={input}/> tag disappear.
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? ( // If the edit is true from the value received in props to the key value, the tag below is rendered.
        <>
          <input
            type="text"
            placeholder="Update your item"
            name="text"
            className="todo-input edit"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button edit">update</button>
        </>
      ) : ( // If props.edit is false, the tag below is rendered.
        <>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            className="todo-input"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  )
}

export default TodoForm