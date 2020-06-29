import React, { Component } from "react";
import "./css/form.scss";

const Form = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="タイトル ※必須"
        />
        <br />
        <textarea
          name="desc"
          placeholder="説明を入力"
        ></textarea>
        <br />
        <button type="submit">todoを作成</button>
      </form>
    </div>
  );
};

export default Form;