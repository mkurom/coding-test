export const TodoList = (props) => {

  const { todoItems } = props;

  if (todoItems === undefined) return;

  const todoList = todoItems.map((item) =>
    <li key={item.text}>
      {item.text}
    </li>
  );

  return (
    <ul>{todoList}</ul>
  );
}
