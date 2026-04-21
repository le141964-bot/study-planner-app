"use client";
import { useState, useEffect } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

import dynamic from "next/dynamic";
const Tasklist = dynamic(() => import("../../components/TaskList"), {
  loading: () => <p>Loading Tasks...</p>,
});  

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const fetchQuote = async () => {
    try {
      const res = await fetch("/api/quote");
      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      console.error(err);
      setQuote("Stay productive");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Tasks</h1>

      <p style={{ marginBottom: "20px", fontStyle: "italic" }}>
        {quote ? `"${quote}"` : "Loading motivation..."}
      </p>

      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p>No tasks yet? Add one!</p>
      ) : (
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      )}

      <button onClick={fetchQuote} className="btn">
        New Quote
      </button>
    </div>
  );
}