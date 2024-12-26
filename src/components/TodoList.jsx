import React from "react";

const TodoList = () => {
  return (
    <div className="todo-list-box">
      <table className="todo-table">
        <thead>
          <tr>
            <th></th>
            <th>S.No</th>
            <th>Todo</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label className="custom-checkbox">
                <input type="checkbox" className="completed-todo" />
                <span className="checkmark"></span>
              </label>
            </td>
            <td>1</td>
            <td>JavaScript Learn</td>
            <td>Pending</td>
            <td>
              <button className="edit-btn btn">Edit</button>
              <button className="delete-btn btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
