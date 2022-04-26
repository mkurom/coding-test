import { useState, useCallback } from "react";
import { completeTodo, incompleteTodo } from '../constants/constant.js';

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

  const searchedTodo = (todoFilter, searchText) => {
    const tmpList = todoList.map((item) => {
      if (todoFilter === completeTodo) {
        return item.done ? item : null;
      }
      else if (todoFilter === incompleteTodo) {
        return item.done ? null : item;
      }
      return item;
    });

    if (searchText === "") {
      return tmpList;
    }

    const filteredTodoList = tmpList.map((item) => {
      if (item === null) {
        return null;
      }
      if (item.text.match(searchText)) {
        return item;
      }
      return null;
    });

    return filteredTodoList;
  };

  return {
    addTodo,
    updateTodo,
    deleteTodo,
    searchedTodo,
  };
}
