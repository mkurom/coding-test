import './style/App.css';

import React, { useState, memo } from "react";
import { Input } from '../components/Input';
import { Filter } from '../components/Filter';
import { Search } from '../components/Search';
import { TodoList } from '../components/TodoList';
import { useTodoList } from '../hooks/useTodoList';

export const App = memo(() => {

  console.log('App');

  const {
    addTodo,
    updateTodo,
    deleteTodo,
    searchedTodo,
  } = useTodoList();

  const [todoFilter, setTodoFilter] = useState(0);
  const onChangeFilter = (value) => {
    setTodoFilter(value);
  };

  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (value) => {
    setSearchText(value);
  }

  return (
    <div>
      <h1>TODOアプリ</h1>
      <Input addTodo={addTodo} />

      <Filter
        onChange={onChangeFilter}
      />

      <Search
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />

      <TodoList
        searchText={searchText}
        todoFilter={todoFilter}
        onClickUpdate={updateTodo}
        onClickDelete={deleteTodo}
        searchedTodo={searchedTodo}
      />
    </div>
  );
});

