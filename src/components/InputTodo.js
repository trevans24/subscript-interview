import React, { useState } from "react"

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState([])

  const onChange = (e) => setTitle(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // if title isn't empty then submit
    if (title.trim() && tags.length > 0) {
      addTodoProps({ title, tags })
      setTitle("")
      setTags([])
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault()
      setTags([...tags, e.target.value.trim()])
      e.target.value = ""
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text input-title"
        name="title"
        onChange={onChange}
        placeholder="Add todo..."
        type="text"
        value={title}
      />
      <input
        className="input-text input-tags"
        name="tag"
        onKeyDown={handleKeyDown}
        placeholder="Add Tags (press Enter to add)"
        type="text"
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}
export default InputTodo
