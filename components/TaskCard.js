"use client";

export default function TaskCard({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      
      <p className="task-text">{task.text}</p>

      <div className="card-actions">
        <button
          className="btn-outline complete"
          onClick={toggleTask}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="btn-outline delete"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>

    </div>
  );
}