import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  // {...todo}はtodoに入っている要素を全て引き継ぐ
  const todos = props.todos.map((todo) => (
    <Todo 
    key={todo.id.toString()} 
    {...todo}
    setTodoStatus={props.setTodoStatus}
    />
  ));
  return (
    <ul>
      {todos}
    </ul>
  );
};

export default TodoList;
