"use client";
import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="task-form">   
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>Add</button>
    </div>
  );
}