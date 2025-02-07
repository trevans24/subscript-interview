import React, { useCallback } from "react"

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

const TodoItem = React.memo(({ deleteTodoProps, handleChangeProps, todo }) => {
  const { completed, id, title, tags } = todo

  const handleChange = useCallback(
    () => handleChangeProps(id),
    [handleChangeProps]
  )
  const handleDelete = useCallback(() => deleteTodoProps(id), [deleteTodoProps])

  return (
    <li className="todo-item">
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <div style={containerStyle}>
        {tags.map((tag) => (
          <span style={{ display: "block" }}>{tag}</span>
        ))}
      </div>
    </li>
  )
})

export default TodoItem
