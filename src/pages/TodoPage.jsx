import React from "react";
import TodoApp from "../components/TodoApp";
import TodoList from "../components/TodoList";
const TodoPage = () => {
  return (
    <div className="todo-app-container">
      <div className="container">
        <TodoApp />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
