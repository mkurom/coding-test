import { useState } from "react";
import { completeTodo, incompleteTodo } from './constant.js';

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

  const getFilterdTodoList = (selectedIndex) => {
    var filterdList = [];
    const newTodoList = [...todoList];

    if (selectedIndex === completeTodo) {
      filterdList = newTodoList.filter((todoItem) => {
        return todoItem.done;
      });
    } else if (selectedIndex === incompleteTodo) {
      filterdList = newTodoList.filter((todoItem) => {
        return !todoItem.done;
      });
    } else {
      filterdList = newTodoList;
    }

    return filterdList;
  }

  const getSearchedTodoList = (searchText) => {
    var searchedList = [];
    const newTodoList = [...todoList];

    if (searchText === "") {
      console.log(newTodoList);
      return newTodoList;
    }

    searchedList = newTodoList.filter((todoItem) => {
      return todoItem.text.includes(searchText);
    });

    return searchedList;
  }

  const getDisplayList = (filterdList, searchedList) => {

    const newFilterdList = [...filterdList];
    const newSearchedList = [...searchedList];

    const duplicatedList = newFilterdList.filter(
      (item, index) => {
        return item.text === newSearchedList[index].text;
      }
    )

    return duplicatedList;
  }

  return { todoList, addTodo, updateTodo, deleteTodo, getFilterdTodoList, getSearchedTodoList, getDisplayList };
}
