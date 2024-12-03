import { useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import {v4} from 'uuid'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação pra virar dev. full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Praticar inglês",
      description: "Focar no aprimoramento do inglês para alcançar fluência",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Criar um projeto pessoal",
      description: "Desenvolver um projeto completo para o portfólio usando React e Node.js",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar banco de dados",
      description: "Aprender mais sobre SQL e MongoDB para gerenciar dados com eficiência",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Melhorar soft skills",
      description: "Trabalhar em comunicação, trabalho em equipe e liderança para a carreira",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), // Corrigido: de "task.lenght" para "tasks.length"
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-violet-400 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-violet-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
