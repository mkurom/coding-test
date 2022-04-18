import { completeTodo, incompleteTodo } from './constant.js';
import React from "react";

export const TodoList = (props) => {
  const { todoItems, onClickDone, onClickDelete } = props;

  const [todoFilter, setTodoFilter] = React.useState(0);
  const onClickFilter = (filterIndex) => {
    setTodoFilter(filterIndex);
  };

  if (todoItems === undefined) return;

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
      {todoItems.length > 0 &&
        (
          <div onChange={(e) => onClickFilter(Number(e.target.value))}>
            <input type="radio" name="theme" value="0" />全て
            <input type="radio" name="theme" value="1" />完了
            <input type="radio" name="theme" value="2" />未完了
          </div>
        )
      }
      <p>Todo件数: {todoItems.length} 件</p>
      <ul>{todoList}</ul>
    </div>
  );
}
