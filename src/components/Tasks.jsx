import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate ()

    function onSeeDetailsClick (task) {
        const query = new URLSearchParams()
        query.set('title', task.title)
        query.set('description', task.description)
        navigate(`/task?${query.toString()}}`)
    }

    
  return (
    <ul className="space-y-3 p-6 bg-slate-200 shadow rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-violet-200 text-slate-600 p-2 rounded-md w-full text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button onClick={() => onSeeDetailsClick(task)} className="bg-violet-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-violet-400 p-2 rounded-md text-white"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
