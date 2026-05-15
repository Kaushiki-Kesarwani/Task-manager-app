import React from 'react'
import { useState } from 'react'
import API from '../services/api'

//add your tasks
const Addtask = ({fetchTasks}) => {
   const [title, setTitle] = useState("");

     const handleAddTask = async (e) => {
    e.preventDefault();

    try{
  await API.post('/api/tasks',{title});

  alert("Task added successfully!");
  setTitle("");
  fetchTasks();
    }catch(err){
  alert( "Task adding failed!");
     
    }
     };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
    
  )
}

export default Addtask