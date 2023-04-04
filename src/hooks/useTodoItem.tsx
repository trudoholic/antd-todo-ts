import {useCallback, useEffect, useState} from 'react'

const useTodoItem = () => {

  const handleDateChange = (date: any, dateString: any) => {
    // Update the date when changed
    // this.props.setDate(this.props.todo.index, date, dateString);
  };

  const remove = () => {
    // Remove this TodoItem
    // this.props.removeTodo(this.props.todo.index);
  };

  return {
    handleDateChange,
    remove,
  }
}

export default useTodoItem