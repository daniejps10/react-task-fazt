import TaskCard from './TaskCard'

export default function TaskList({tasks}) {

   if (tasks.length === 0){
      return <h1>No hay tareas aún</h1>;
   }

	return <div>
      {
         tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
         ))
      }
   </div>;
}
