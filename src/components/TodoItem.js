import React from "react"

const completedStyle = {
  color: "#d35e0f",
  fontStyle: "italic",
  opacity: 0.4,
  textDecoration: "line-through",
}

const TodoItem = ({ deleteTodoProps, handleChangeProps, todo }) => {
  const { completed, id, title } = todo

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  )
}

export default TodoItem
