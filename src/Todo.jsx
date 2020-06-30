import React from "react";
import "./css/todo.scss";

const Todo = (props) => {
  // done,undoneによってレイアウト変更
  const className = props.done ? 'done' : 'undone';
  const link = props.done ? "Cancel" : "Complete!";
  return (
    <li className={className}>
      <span>{props.id}</span>
      <span>:{props.title}</span>
      <a 
      href=""
      onClick={(e) => {e.preventDefault(); props.setTodoStatus(props)}}
      >{link}</a>
      <p>{props.desc}</p>
    </li>
  );
};

export default Todo;
