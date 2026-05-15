import React from 'react'
import API from '../services/api'


const TaskList = ({fetchTasks,tasks}) => {

  //delete tasks
    const handleDelete = async (id)=>{

        try{
            await API.delete(`/api/tasks/${id}`)
             fetchTasks();
        }catch(err){
                  alert("Delete failed ❌");
        }
    };

     // update tasks
  const handleToggle = async (task) => {

    try {

      await API.put(`/api/tasks/${task._id}`, {
        completed: !task.completed,
      });

      fetchTasks();

    } catch (error) {

      alert("Update failed ❌");
    }
  };
  return (
    <div>
        <ul>

      {tasks.map((task) => (

        <li key={task._id}>

          <span
            onClick={() => handleToggle(task)}
            style={{
              cursor: "pointer",
              textDecoration:
                task.completed
                  ? "line-through"
                  : "none",
            }}
          >
            {task.title}
          </span>

          <button
            onClick={() => handleDelete(task._id)}
          >
            Delete
          </button>

        </li>

      ))}

    </ul>
    </div>
  );
}

export default TaskList