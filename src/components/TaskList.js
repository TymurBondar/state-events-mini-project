import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, filter }) {

  const newTasks = tasks.filter(task => filter === "All" || task.category === filter);

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {newTasks.map(taskobj => {
        return <Task task={taskobj} key={taskobj.text} onDelete={onDelete}/>
      })}
    </div>
  );
};

export default TaskList;
