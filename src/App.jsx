import React, { Component } from "react";
import TodoList from './TodoList'
import Form from './Form'
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    const todos = [
      {
        id: 1,
        title: "Hello, React!",
        desc: "React始めました",
        done: false
      },
      {
        id: 2,
        title: "Hello, Redux!",
        desc: "Reduxも始めました",
        done: false
      },
    ]
    this.state = {
      todos: todos,
      // idの代わり、現在のid数
      countTodo: todos.length + 1,
    }
  }




    handleSubmit(e) {
      // e.preventDefaultで画面の更新オフに
      e.preventDefault();
      // 入力内容を保持
      const title = e.target.title.value;
      const desc = e.target.desc.value;
      // 配列を複製
      const todos = this.state.todos.slice();
      const countTodo = this.state.countTodo;

      // 新しい投稿をtodosの末尾に追加する
      todos.push({
        id: countTodo,
        title: title,
        desc: desc,
        done: false,
      });

      // todosに最新投稿を追加したtodosを追加する
      this.setState({todos: todos})
      // countTodoの値を更新する
      this.setState({countTodo: countTodo + 1})

      // 初期化
      e.target.title.value = '';
      e.target.desc.value = '';
    }

    // Todoの完了/未完了の切り替え
    setTodoStatus(clickTodo) {
      // stateの配列オブジェクトに変更を加える為、複製する
      const todos = this.state.todos.slice();
      // 配列とidのズレ解消
      const todo = todos[clickTodo.id - 1];
      todo.done = !todo.done;
      todos[clickTodo.id - 1] = todo;

      // todosの更新
      this.setState({todos: todos});
    }

  render() {
    return (
      <div className="app">
        <h1>todoアプリを作ってみた</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          />
      </div>
    );
  }
}

export default App;
