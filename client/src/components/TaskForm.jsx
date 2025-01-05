import React, { useState } from "react";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await axios.post("http://localhost:5000/api/tasks", { title });
      setTitle("");
      // Recargamos la página (una forma rápida) o podríamos actualizar el estado usando context
      window.location.reload();
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
