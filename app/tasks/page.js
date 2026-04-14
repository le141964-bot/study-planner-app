"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="container">
        <h1>Tasks</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
     
    </div>
    
  );
}