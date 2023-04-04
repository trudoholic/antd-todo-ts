import * as React from 'react';
import {List, DatePicker} from "antd";
import {CloseCircleFilled} from "@ant-design/icons";
import {ITodo} from "../hooks/useTodo";

interface IProps {
  todo: ITodo
  setDate: (index: number, date: any, dateString: string) => void
  removeTodo: (index: number) => void
}

export default function TodoItem({todo, setDate, removeTodo}: IProps) {

  const handleDateChange = (date: any, dateString: string) => {
    setDate(todo.index, date, dateString)
  }

  const remove = () => {
    removeTodo(todo.index)
  }

  return (
    <List.Item
      actions={[
        <DatePicker
          format="DD.MM.YYYY"
          onChange={handleDateChange}
          value={todo.date}
        />,
        <CloseCircleFilled onClick={remove} />
      ]}
    >
      {todo.content}
    </List.Item>
  )
}