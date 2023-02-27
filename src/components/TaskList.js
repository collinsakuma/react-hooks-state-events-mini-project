import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleTaskDelete }) {
  const renderTasks= tasks.map(task => (
    <Task key={task.text} task={task} handleTaskDelete={handleTaskDelete}/>
  ))
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
