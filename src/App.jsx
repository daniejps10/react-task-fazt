
import React, { useState, useEffect } from "react";
import { tasks as data } from './tasks'

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
	
  const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

  function createTask(taskTitle){
    setTasks([...tasks, 
      {
        id: tasks.length,
        title: taskTitle,
        description: "Algo nuevo"
      }
    ])
  }

	return (
		<>
			<TaskForm createTask={createTask}/>
			<TaskList tasks={tasks} />
		</>
	);
}

export default App;
