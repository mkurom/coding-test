// import { AiOutlineCheck } from "react-icons/fa"
import React from "react";

export const TodoList = (props) => {

  const { todoItems, onClickDone, onClickDelete } = props;

  if (todoItems === undefined) return;

  const todoList = todoItems.map((item, index) =>
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

  return (
    <div>
      <p>Todo件数: {todoItems.length} 件</p>
      <ul>{todoList}</ul>
    </div>
  );
}
