import React, { useState, memo } from "react";
import { Input } from '../components/Input';
import { Filter } from '../components/Filter';
import { Search } from '../components/Search';
import { TodoList } from '../components/TodoList';
import { useTodoList } from '../hooks/useTodoList';

import styled from 'styled-components';

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
    <SDiv>
      <SH1>TODOアプリ</SH1>
      <Input addTodo={addTodo} />

      <Filter
        active={todoFilter}
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
    </SDiv>
  );
});

const SDiv = styled.div`
  padding: 4px;
  text-align: center;
`;

const SH1 = styled.h1`
  // text-align: center;
`;
