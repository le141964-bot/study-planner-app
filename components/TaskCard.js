"use client"; 

export default function TaskCard({ task, toggleTask }) {
    return ( 
        <div className="card">
            <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </p>
            <button onClick={toggleTask}>
                {task.completed ? "Undo" : "Complete"}
            </button>
        </div>
    ); 
}