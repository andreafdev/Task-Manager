import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-3 p-6 bg-slate-200 shadow rounded-md flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa."
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa."
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
            //verificar se titulo e desc. estão preenchidas
            if (!title || !description) {
                return alert ("Preencha o título e a descrição.")
            }
          onAddTaskSubmit(title.trim(), description.trim());
          setTitle("");
          setDescription("");
        }}
        className="bg-violet-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
