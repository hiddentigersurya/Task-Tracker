import React, { useState } from "react"; 
import "./index.css"; 

const Home = () => {
    // Initialize state for tasks and taskName
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    // Function to add a new task
    const addTask = () => {
        if (taskName.trim()) { // Check if taskName is not empty
            setTasks([...tasks, { name: taskName, completed: false }]); // Add new task to tasks array
            setTaskName(""); // Clear the input field
        }
    };

    // Function to delete a task by index
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index); // Filter out the task to be deleted
        setTasks(newTasks); // Update tasks state
    };

    // Function to toggle task completion status by index
    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task // Toggle completed status
        );
        setTasks(newTasks); 
    };

    return (
        <div className="home">
            <h1 className="app-title">Task Tracker</h1> 
            <h2 className="section-title">Add a Task</h2> 
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} // Update taskName state on input change
                placeholder="Enter task name"
                className="task-input"
            />
            <button onClick={addTask} className="add-task-button">Add Task</button> 
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}> 
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)} // Toggle task completion on checkbox change
                            className="task-checkbox"
                        />
                        <span className="task-name">{task.name}</span> 
                        <button onClick={() => deleteTask(index)} className="delete-task-button">Delete</button> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home; 