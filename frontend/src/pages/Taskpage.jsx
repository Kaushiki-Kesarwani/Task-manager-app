import { useEffect, useState } from "react";

import API from "../services/api";

import Addtask from '../components/Addtask'
import TaskList from '../components/TaskList';

function TaskPage() {

  const [tasks, setTasks] = useState([]);

  // fetch tasks
  const fetchTasks = async () => {

    try {

      const res = await API.get("/api/tasks");

      setTasks(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchTasks();

  }, []);

  return (
    <div>

      <h2>My Tasks</h2>

      <Addtask fetchTasks={fetchTasks} />

      <br />

      <TaskList
        tasks={tasks}
        fetchTasks={fetchTasks}
      />

    </div>
  );
}

export default TaskPage;