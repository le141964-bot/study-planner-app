"use client";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}