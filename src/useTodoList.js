import React, { useState, useCallback } from "react";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoText) => {
    const newTodoList = [...todoList];

    const newTodoItem = {
      text: todoText,
      done: false
    }

    newTodoList.push(newTodoItem);
    setTodoList(newTodoList);

    console.log('add Todo');
  }

  const updateTodo = (index) => {
    const newTodoList = [...todoList];

    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  }

  const deleteTodo = (index) => {
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return { todoList, addTodo, updateTodo, deleteTodo };
}
