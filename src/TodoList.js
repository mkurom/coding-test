
export const TodoList = () => {

  // sample data
  const dataList = ["todo1", "todo2", "todo3", "todo4", "todo5"];

  const todoList = dataList.map((item) =>
    <li key={item}>
      {item}
    </li>
  );

  return (
    <ul>{todoList}</ul>
  );
}
