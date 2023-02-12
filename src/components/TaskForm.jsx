import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-600 p-6 mb-4 rounded-3xl">
        <input
          type="text"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-slate-100 p-3 w-full mb-2 rounded-lg"
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-100 p-3 w-full mb-2 rounded-lg"
        ></textarea>
        <button className="bg-indigo-500 px-4 py-2 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
