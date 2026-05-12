
import { useState } from 'react';
import API from '../services/api'

const Taskpage = () => {
    const [title, setTitle] = useState("");

     const handleAddTask = async (e) => {
    e.preventDefault();

    try{
  await API.post('/api/tasks',{title});

  alert("Task added successfully!");
  setTitle("");
    }catch(err){
       console.log(err.response?.data || err.message);
  alert(err.response?.data?.message || "Error adding task!");
      // alert("Error adding task!");
    }
     }

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

export default Taskpage
