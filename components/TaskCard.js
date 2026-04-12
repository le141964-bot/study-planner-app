"use client";

export default function TaskCard({ task, toggleTask, deleteTask }) {
  return (
    <div className={task.completed ? "card completed" : "card"}>
      
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </p>

      <button onClick={toggleTask}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={deleteTask}>
        Delete
      </button>

    </div>
  );
}