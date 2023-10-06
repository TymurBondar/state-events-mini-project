import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [listedTasks, setListedTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");
  const [newTask, setNewTask] = useState({
    text: "",
    category: ""
  });

  function filterByCategory(event){
    setFilter(event.target.textContent);
  };

  function onDelete(event) {
    const textValue = event.target.parentNode.querySelector('.text').textContent;
    const updatedTasks = listedTasks.filter(task => task.text !== textValue);
    setListedTasks(updatedTasks);
  };

  function handleInputChange(event) {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  }

  function onFormSubmit(event){
    event.preventDefault();
    setListedTasks([...listedTasks, newTask]);
    setNewTask({ text: "", category: "" }); // Reset form fields
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterByCategory} filter={filter} />
      <NewTaskForm 
        categories={CATEGORIES} 
        newTask={newTask} 
        onFormSubmit={onFormSubmit} 
        handleInputChange={handleInputChange} 
      />
      <TaskList tasks={listedTasks} onDelete={onDelete} filter={filter} />
    </div>
  );
}

export default App;
