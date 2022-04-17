import './App.css';
import React, { useState } from "react";
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

  return (
    <div>
      <h1>TODOアプリ</h1>

      <form>
        <label>
          TODO:
          <input type="text" value={todoText} onChange={onChangeText} />
        </label>
        <input type="submit" value="作成" onClick={onClickAdd} />
      </form>

      <TodoList todoItems={todoList} />
    </div>
  );
}
