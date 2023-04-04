import * as React from 'react';
import {useState} from 'react';

export interface ITodo {
  index: number
  content: any
  date: null
  dateString: string
}

const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (value: string) => {
    setTodos(prev => prev.concat({
      index: prev.length,
      content: value,
      date: null,
      dateString: ""
    }))
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    for (let i = index; i < newTodos.length; i++) {
      newTodos[i].index -= 1
    }
    setTodos(newTodos)
  }

  const setDate = (index: number, date: any, dateString: string) => {
    const newTodos = [...todos]
    if (newTodos[index]) {
      newTodos[index].date = date
      newTodos[index].dateString = dateString
      setTodos(newTodos)
    }
  }

  return {
    todos,
    addTodo,
    removeTodo,
    setDate,
  }
}

export default useTodo