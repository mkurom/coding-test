import { useState, memo } from "react";
import styled from 'styled-components';

export const Input = memo(({ addTodo }) => {
  console.log('Input');

  const [text, setText] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      callAddTodo();
    }
  };

  const callAddTodo = () => {
    const replacedText = text.trim();

    if (replacedText === "") {
      setText("");
      return;
    }

    addTodo(replacedText);
    setText('');
  };

  return (
    <div>
      <SInput
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={onChangeText}
        onKeyDown={onKeyDown}
      />
      <SButton onClick={callAddTodo}>追加</SButton>
    </div>
  );
});

const SInput = styled.input`
  margin: 4px;
  border: 1px solid DarkGray;
  border-radius: 3px;
`;

const SButton = styled.button`
  width: 100px;
  margin-left:10px;
  background-color: Blue;
  border: none;
  border-radius: 6px;
  padding: 2px;
  color: #fff;
  &:hover {
    background-color: DarkBlue;
    color: #fff;
    cursor: pointer;
  }
`;