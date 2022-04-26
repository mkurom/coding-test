import { useState, memo } from "react";

export const Input = memo(({ addTodo }) => {
  console.log('Input');

  const [text, setText] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const replacedText = text.trim();

      if (replacedText === "") {
        setText("");
        return;
      }

      addTodo(replacedText);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={onChangeText}
        onKeyDown={onKeyDown}
      />
    </div>
  );
});