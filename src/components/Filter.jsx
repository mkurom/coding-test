import React, { memo } from "react";
import { allTodo, completeTodo, incompleteTodo } from '../constants/constant.js';

export const Filter = memo(({ onChange }) => {
  console.log('Filter');

  const onClick = (key) => {
    onChange(key);
  };

  return (
    <div>
      <a
        href="#"
        onClick={onClick.bind(null, allTodo)}
      >All</a>
      <a
        href="#"
        onClick={onClick.bind(null, completeTodo)}
      >Done</a>
      <a
        href="#"
        onClick={onClick.bind(null, incompleteTodo)}
      >ToDo</a>
    </div>
  );
});