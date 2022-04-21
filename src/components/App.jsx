import './style/App.css';

import React, { useState, memo } from "react";
import { TodoList } from '../components/TodoList';
import { useTodoList } from '../hooks/useTodoList';

export const App = memo(() => {

  console.log('App');

  const [todoText, setTodoText] = useState("");

  const {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  } = useTodoList();

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    console.log(todoText);

    const replacedText = todoText.trim();

    if (replacedText === "") {
      setTodoText("");
      return;
    }
    addTodo(replacedText);

    setTodoText("");
  };

  return (
    <div>
      <h1>TODOアプリ</h1>
      <input type="text" value={todoText} onChange={onChangeText} />
      <button type="button" onClick={onClickAdd}>作成</button>
      <TodoList
        orgTodoList={todoList}
        onClickUpdate={updateTodo}
        onClickDelete={deleteTodo}
      />
    </div>
  );
});

