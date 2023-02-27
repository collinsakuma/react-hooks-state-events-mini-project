import React from "react";

function Task({ task, handleTaskDelete }) {
  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button className="delete" onClick={() => handleTaskDelete(task.text)}>X</button>
    </div>
  );
}

export default Task;
