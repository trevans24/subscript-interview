import React, { useMemo, useState, useReducer } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid"
import FilterSortBar from "./FilterSortBar"

const baseTodos = [
  {
    // id: uuid.v4(),
    id: uuidv4(),
    tags: ["bug"],
    title: "Setup development environment",
    completed: true,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    tags: ["feature"],
    title: "Develop website and add content",
    completed: false,
  },
  {
    // id: uuid.v4(),
    id: uuidv4(),
    tags: ["high priority"],
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
  const [isFiltered, setIsFiltered] = useState(false)
  const [sortDir, setSortDir] = useState("")

  const handleChange = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    dispatch({ type: "TOGGLE_TODO", payload: updatedTodo })
  }

  const delTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: [...todos.filter((todo) => todo.id !== id)],
    })
  }

  const addTodoItem = ({ title, tags }) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      tags,
      title,
      completed: false,
    }
    dispatch({ type: "ADD_TODO", payload: [...todos, newTodo] })
  }

  // Sort and filter
  const handleFilter = () => setIsFiltered(!isFiltered)
  const handleSort = () => {
    if (sortDir === "asc") {
      return setSortDir("dsc")
    }
    return setSortDir("asc")
  }

  // Filter todos
  // if isFilter true then filter out completed todos
  const filteredTodos = useMemo(
    () => (isFiltered ? todos.filter(({ completed }) => !completed) : todos),
    [isFiltered, todos]
  )

  // Sort
  // sort todos based on sort direction
  // compounded off of filtered todos
  const sortedTodos = useMemo(() => {
    return [...filteredTodos].sort((a, b) => {
      if (sortDir === "asc") return a.title.localeCompare(b.title)
      if (sortDir === "dsc") return b.title.localeCompare(a.title)
      return 0
    })
  }, [sortDir, filteredTodos])

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <FilterSortBar
        handleFilter={handleFilter}
        handleSort={handleSort}
        isFiltered={isFiltered}
        sortDir={sortDir}
      />
      <TodosList
        deleteTodoProps={delTodo}
        handleChangeProps={handleChange}
        todos={sortedTodos}
      />
    </div>
  )
}
export default TodoContainer
