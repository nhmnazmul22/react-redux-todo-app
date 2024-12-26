import React from "react";

const AddTodo = () => {
  return (
    <div className="addTodo-box">
      <input type="text" placeholder="Enter your Todo" />
      <button className="addTodoBtn btn">Add Todo +</button>
    </div>
  );
};

export default AddTodo;
