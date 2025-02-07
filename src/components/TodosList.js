import React from "react"
import TodoItem from "./TodoItem"

const TodosList = ({ deleteTodoProps, handleChangeProps, todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          deleteTodoProps={deleteTodoProps}
          handleChangeProps={handleChangeProps}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodosList
