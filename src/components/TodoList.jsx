import React, { useState } from "react";

export const TodoList = (props) => {
  const { orgTodoList, onClickDone, onClickDelete, getFilterdTodoList, getSearchedTodoList, getDisplayList } = props;

  if (orgTodoList === undefined) return;

  const [todoFilter, setTodoFilter] = useState(0);
  const onClickFilter = (e) => {
    setTodoFilter(Number(e.target.value));
  };

  const [searchText, setSearchText] = useState("");
  const onsetSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const filterdList = getFilterdTodoList(todoFilter);

  const searchedList = getSearchedTodoList(searchText);

  var tmpList = [];

  tmpList = getDisplayList(filterdList, searchedList);

  const todoList = tmpList.map((item, index) => {
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
      {orgTodoList.length > 0 && (
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
      <p>Todo件数: {tmpList.length} 件</p>
      <ul>{todoList}</ul>
    </div>
  );
}
