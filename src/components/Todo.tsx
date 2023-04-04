import * as React from 'react'
import {useCallback, useState} from "react";
import {Input, List} from "antd";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";

export default function Todo() {
  const {
    todos,
    addTodo,
    removeTodo,
    setDate,
  } = useTodo()

  const [message, setMessage] = useState("")

  const handlePressEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value
      addTodo(value)
      setMessage("")
    },
  [])

  return (
    <div className="todoContainer">
      <h2>TODO App</h2>

      <Input
        allowClear={true}
        onChange={e => setMessage(e.target.value)}
        onPressEnter={handlePressEnter}
        placeholder="What needs to be done?"
        value={message}
      />

      <List
        locale={{ emptyText: "No todo items" }}
        dataSource={todos}
        renderItem={item => (
          <TodoItem
            todo={item}
            setDate={setDate}
            removeTodo={removeTodo}
          />
        )}
      />
    </div>
  )
}