import './App.css';
import React, { useState, useCallback } from "react";
import { TodoList } from './TodoList';

export const App = () => {

  // input用テキスト
  const [todoText, setTodoText] = useState("");
  // todoリスト
  const [todoList, setTodoList] = React.useState([]);

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodoList = [...todoList];

    const newTodoItem = {
      text: todoText,
      done: false
    }

    newTodoList.push(newTodoItem);
    setTodoList(newTodoList);

    setTodoText("");
  };

  const onClickDone = ((index) => {
    const newTodoList = [...todoList];

    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  });

  const onClickDelete = ((index) => {
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  });

  return (
    <div>
      <h1>TODOアプリ</h1>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button type="button" onClick={onClickAdd}>作成</button>

      <TodoList todoItems={todoList} onClickDone={onClickDone} onClickDelete={onClickDelete} />
    </div>
  );
}

