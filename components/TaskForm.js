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
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}