import React, { useReducer } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid"

const baseTodos = [
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Setup development environment",
    completed: true,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Develop website and add content",
    completed: false,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    title: "Deploy to live server",
    completed: false,
  },
]

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return action.payload
    case "DELETE_TODO":
      return action.payload
    case "TOGGLE_TODO":
      return action.payload
    default:
      return state
  }
}

const TodoContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, baseTodos)

  const handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  const delTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: [...todos.filter((todo) => todo.id !== id)],
    })
  }

  const addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    }
    dispatch({ type: "ADD_TODO", payload: [...todos, newTodo] })
  }

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        deleteTodoProps={delTodo}
        handleChangeProps={handleChange}
        todos={todos}
      />
    </div>
  )
}
export default TodoContainer
