import './App.css';

import React, { useState } from "react";
import { TodoList } from './TodoList';
import { useTodoList } from './useTodoList';

export const App = () => {

  // input用テキスト
  const [todoText, setTodoText] = useState("");
  // todoリスト
  const { todoList, addTodo, updateTodo, deleteTodo, getFilterdTodoList, getSearchedTodoList, getDisplayList } = useTodoList();

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;

    const replacedText = todoText.trim();

    if (replacedText === "") return;

    addTodo(replacedText);

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
      <TodoList
        orgTodoList={todoList}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        getFilterdTodoList={getFilterdTodoList}
        getSearchedTodoList={getSearchedTodoList}
        getDisplayList={getDisplayList}
      />
    </div>
  );
}

