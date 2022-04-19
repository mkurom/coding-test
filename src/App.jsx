import './App.css';
import constant from './constant.js';
import React, { useState, useCallback } from "react";
import { TodoList } from './TodoList';
import { useTodoList } from './useTodoList';

export const App = () => {

  // input用テキスト
  const [todoText, setTodoText] = useState("");
  // todoリスト
  const { todoList, addTodo, updateTodo, deleteTodo, getFilterdTodoList, getSearchedTodoList } = useTodoList();

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;

    addTodo(todoText);

    setTodoText("");
  };

  const onClickDone = (index) => {
    updateTodo(index);
  };

  const onClickDelete = (index) => {
    deleteTodo(index);
  };

  return (
    <div>
      <h1>TODOアプリ</h1>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button type="button" onClick={onClickAdd}>作成</button>

      <TodoList todoItems={todoList} onClickDone={onClickDone} onClickDelete={onClickDelete} />
    </div>
  );
}

