import { useState, useCallback } from "react";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = useCallback((todoText) => {
    const newTodoList = [...todoList];

    const newTodoItem = {
      text: todoText,
      done: false
    }

    newTodoList.push(newTodoItem);
    setTodoList(newTodoList);
  }, [todoList]);

  const updateTodo = useCallback((index) => {
    const newTodoList = [...todoList];

    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);

  }, [todoList]);

  const deleteTodo = useCallback((index) => {
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }, [todoList]);

  return {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
