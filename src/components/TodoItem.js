import React from "react"

const completedStyle = {
  color: "#d35e0f",
  fontStyle: "italic",
  opacity: 0.4,
  textDecoration: "line-through",
}

const containerStyle = {
  display: "flex",
  gap: "4px",
}

const TodoItem = ({ deleteTodoProps, handleChangeProps, todo }) => {
  const { completed, id, title, tags } = todo

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <div style={containerStyle}>
        {tags.map((tag) => (
          <span style={{ display: "block" }}>{tag}</span>
        ))}
      </div>
    </li>
  )
}

export default TodoItem
