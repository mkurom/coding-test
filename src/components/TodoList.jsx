import React, { memo } from "react";
import { completeTodo, incompleteTodo } from '../constants/constant.js';

export const TodoList = memo((props) => {
  const {
    searchText,
    todoFilter,
    onClickUpdate,
    onClickDelete,
    searchedTodo
  } = props;

  var displayCount = 0;
  const filteredTodoList = searchedTodo(todoFilter, searchText).map((item, index) => {
    var doneText = " 未完了";

    if (item === null) {
      return <></>;
    }

    if (todoFilter === completeTodo) {
      if (item.done) {
        doneText = " 完了済";
        displayCount++;
      }
      else {
        return <></>;
      }
    }
    else if (todoFilter === incompleteTodo) {
      if (item.done) {
        return <></>;
      }
      else {
        doneText = " 未完了";
        displayCount++;
      }
    }
    else {
      doneText = item.done ? " 完了済" : " 未完了";
      displayCount++;
    }
    return (
      <li key={item.text + '_' + index.toString()}>
        <div>
          {item.text}
          {doneText}
          <div>
            <button type="button" onClick={() => onClickUpdate(index)}>{
              item.done ? "未完了にする" : "完了にする"
            }</button>
            <button type="button" onClick={() => onClickDelete(index)}>削除</button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <p>Todo件数: {displayCount} 件</p>
      <ul>{filteredTodoList}</ul>
    </div>
  );
});
