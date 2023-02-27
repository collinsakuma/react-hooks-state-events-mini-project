import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksArray, setTaskArray] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleTaskDelete = (text) => {
    setTaskArray(tasksArray.filter(task => task.text !== text));
  }
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  const onTaskFormSubmit = (newTask) => {
    setTaskArray(
      [...tasksArray, newTask]
    )
  }

  const filterTasks = tasksArray.filter(task => task.category === selectedCategory || selectedCategory === "All")
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategorySelect={handleCategorySelect} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filterTasks} handleTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
 