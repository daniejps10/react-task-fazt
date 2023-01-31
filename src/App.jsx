
import React, { useState, useEffect } from "react";
import { tasks as data } from './data/tasks'

import TaskList from "./components/task/TaskList";
import TaskForm from "./components/task/TaskForm";

function App() {
	
  const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

  function createTask(task){
    setTasks([...tasks, 
      {
        id: tasks.length,
        title: task.title,
        description: task.description
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
