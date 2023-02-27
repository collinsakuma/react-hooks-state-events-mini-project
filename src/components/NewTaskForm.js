import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [inputDetails, setInputDetails] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: inputDetails,
      category: inputCategory,
    }
    onTaskFormSubmit(newTask)
  }
  const categoryOptions = categories.map(category => (
    <option key={category}>{category}</option>
  ))
  return (
    <form className="new-task-form" onSubmit={(e) => handleFormSubmit(e)}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={inputDetails}
          onChange={(e) => setInputDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        >
          {categoryOptions}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
