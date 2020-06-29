import React from "react";
import "./css/todo.scss";

const Todo = (props) => {
  const link = props.done ? "Cancel" : "Complete!";
  return (
    <li className="undone">
      <span>{props.id}</span>
      <span>:{props.title}</span>
      <a href="">{link}</a>
      <p>{props.desc}</p>
    </li>
  );
};

export default Todo;
