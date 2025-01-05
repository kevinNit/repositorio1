import { useState, useEffect } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Obtener tareas
  const getTasks = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/tasks`
      );
      setTasks(data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Marcar tarea como completa/incompleta
  const toggleComplete = async (task) => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/tasks/${task._id}`,
        updatedTask
      );
      setTasks(tasks.map((t) => (t._id === task._id ? data : t)));
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  // Eliminar tarea
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task._id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              className="form-check-input me-2"
              onChange={() => toggleComplete(task)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteTask(task._id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
