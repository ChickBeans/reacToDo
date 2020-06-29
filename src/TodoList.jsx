import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  // {...todo}はtodoに入っている要素を全て引き継ぐ
  const todos = props.todos.map((todo) => (
    <Todo key={todo.id.toString()} {...todo} />
  ));
  return (
    <ul>
      {todos}
      {console.log(todos)}
    </ul>
  );
};

export default TodoList;
