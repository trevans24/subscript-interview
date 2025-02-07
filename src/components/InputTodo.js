import React, { useState } from "react"

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState("")

  const onChange = (e) => setTitle(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodoProps(title)
    setTitle("")
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        name="title"
        onChange={onChange}
        placeholder="Add todo..."
        type="text"
        value={title}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}
export default InputTodo
