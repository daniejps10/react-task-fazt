export default function TaskCard({ task, deleteTask }) {

	function showAlert(){
		alert("Eliminando tarea...")
	}

	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			<button onClick={() => deleteTask(task.id)}>
				Eliminar
			</button>
		</div>
	);
}
