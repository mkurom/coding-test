import React, { memo } from "react";
import { completeTodo, incompleteTodo } from '../constants/constant.js';

import styled from 'styled-components';

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
      <SLi key={item.text + '_' + index.toString()}>
        <div>
          {item.text}
          {doneText}
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => {
              onClickUpdate(index);
            }}
          />
          <SButton type="button" onClick={() => onClickDelete(index)}>削除</SButton>
        </div>
      </SLi>
    );
  });

  return (
    <div>
      <h3>Todo件数: {displayCount} 件</h3>
      <ul>{filteredTodoList}</ul>
    </div>
  );
});

const SLi = styled.li`
  list-style: none;
`;

const SButton = styled.button`
  width: 100px;
  margin-left:10px;
  background-color: #ddd;
  border: none;
  border-radius: 6px;
  padding: 2px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
