import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) {
		return <h2 className="text-white text-4xl font-bold text-center">No hay tareas aún</h2>;
	}

	return (
		<div className="grid grid-cols-4 gap-2">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}
