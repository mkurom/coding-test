import React, { memo } from "react";
import { allTodo, completeTodo, incompleteTodo } from '../constants/constant.js';
import styled from 'styled-components';

export const Filter = memo(({ active, onChange }) => {
  console.log('Filter');

  const onClick = (key) => {
    onChange(key);
  };

  return (
    <SDiv>
      <h3>フィルター</h3>
      <STab active={active === allTodo} onClick={onClick.bind(null, allTodo)} >All</STab>
      <STab active={active === completeTodo} onClick={onClick.bind(null, completeTodo)}>Done</STab>
      <STab active={active === incompleteTodo} onClick={onClick.bind(null, incompleteTodo)}>ToDo</STab>
    </SDiv>
  );
});

const SDiv = styled.div`
  padding: 10px;
`

const STab = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  width: 20%;
  text-decoration: none;

  margin: 5px;
  border: none;
  border-bottom: ${props => (props.active ? 'none' : '')};
  background-color: ${props => (props.active ? 'Aqua' : 'LightGray')};
  border-radius: 50px;
  height: 30px;

  :hover {
    background-color: AliceBlue;
  }
`;