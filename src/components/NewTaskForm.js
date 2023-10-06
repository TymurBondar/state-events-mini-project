import React from "react";

function NewTaskForm({ categories, onFormSubmit, newTask, handleInputChange }) {
  return (
    <form onSubmit={onFormSubmit} className="new-task-form">
      <label>
        Details
        <input 
          value={newTask.text} 
          type="text" 
          name="text"
          onChange={handleInputChange} 
        />
      </label>
      <label>
        Category
        <select 
          value={newTask.category} 
          name="category" 
          onChange={handleInputChange}
        >
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
