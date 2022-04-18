import { completeTodo, incompleteTodo } from './constant.js';
import React, { useState, useCallback } from "react";

export const TodoList = (props) => {
  const { todoItems, onClickDone, onClickDelete } = props;

  if (todoItems === undefined) return;


  const [todoFilter, setTodoFilter] = useState(0);
  const onClickFilter = (e) => {
    setTodoFilter(Number(e.target.value));
  };

  const [searchText, setSearchText] = useState("");
  const onsetSearchText = (event) => {
    setSearchText(event.target.value);
  };

  var filterdList = [];

  const newTodoList = [...todoItems];

  if (todoFilter === completeTodo) {
    filterdList = newTodoList.filter((todoItem) => {
      return todoItem.done;
    });
  } else if (todoFilter === incompleteTodo) {
    filterdList = newTodoList.filter((todoItem) => {
      return !todoItem.done;
    });
  } else {
    filterdList = newTodoList;
  }

  if (searchText != "") {
    filterdList = filterdList.filter((todoItem) => {
      return todoItem.text.includes(searchText);
    });
  }

  const todoList = filterdList.map((item, index) => {
    return (
      <li key={item.text}>
        <div>
          {item.text}
          {item.done && " 完了済"}
          <div>
            <button type="button" onClick={() => onClickDone(index)}>{
              item.done ? "未完了" : "完了"
            }</button>
            <button type="button" onClick={() => onClickDelete(index)}>削除</button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      {todoItems.length > 0 && (
        <div>
          <p>キーワード検索</p>
          <input type="text" value={searchText} onChange={onsetSearchText} />
          <div onChange={onClickFilter}>
            <p>フィルター</p>
            <input type="radio" name="theme" value="0" />全て
            <input type="radio" name="theme" value="1" />完了
            <input type="radio" name="theme" value="2" />未完了
          </div>
        </div>
      )}
      <p>Todo件数: {filterdList.length} 件</p>
      <ul>{todoList}</ul>
    </div>
  );
}
