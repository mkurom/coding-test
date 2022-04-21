import React, { useState, memo } from "react";
import { completeTodo, incompleteTodo } from '../constants/constant.js';

export const TodoList = memo((props) => {
  const {
    orgTodoList,
    onClickUpdate,
    onClickDelete,
  } = props;

  console.log('TodoList');

  const [todoFilter, setTodoFilter] = useState(0);
  const onChangeFilter = (e) => {
    setTodoFilter(Number(e.target.value));
  };

  const [searchText, setSearchText] = useState("");
  const onChangeText = (e) => {
    setSearchText(e.target.value);
  };

  var displayCount = 0;

  const todoList = orgTodoList.map((item, index) => {
    var doneText = " 未完了";
    if (todoFilter == completeTodo) {
      if (item.done) {
        doneText = " 完了済";
        displayCount++;
      }
      else {
        return (<></>);
      }
    }
    else if (todoFilter == incompleteTodo) {
      if (item.done) {
        return (<></>);
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
      <li key={item.text}>
        <div>
          {item.text}
          {doneText}
          <div>
            <button type="button" onClick={() => onClickUpdate(index)}>{
              item.done ? "未完了" : "完了"
            }</button>
            <button type="button" onClick={() => onClickDelete(index)}>削除</button>
          </div>
        </div>
      </li>
    );
  });

  console.log(todoList);

  var filteredTodoList = [];
  const tmpCount = displayCount;
  displayCount = 0;
  if (searchText !== "") {
    filteredTodoList = todoList.map((item, index) => {
      if (item.key !== null && item.key.match(searchText)) {
        displayCount++;
        return item;
      }
      return <></>;

    });
  }
  else {
    filteredTodoList = [...todoList];
    displayCount = tmpCount;
  }

  return (
    <div>
      {orgTodoList.length > 0 && (
        <div>
          <p>キーワード検索</p>
          <input type="text" value={searchText} onChange={onChangeText} />
          <div onChange={onChangeFilter}>
            <p>フィルター</p>
            <input type="radio" name="theme" value="0" defaultChecked />全て
            <input type="radio" name="theme" value="1" />完了
            <input type="radio" name="theme" value="2" />未完了
          </div>
        </div>
      )}
      <p>Todo件数: {displayCount} 件</p>
      <ul>{filteredTodoList}</ul>
    </div>
  );
});
