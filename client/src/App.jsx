import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  console.log("API URL:", process.env.REACT_APP_API_URL); // Agregar esta línea
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Lista de Tareas (MERN)</h1>
      <TaskForm />
      <hr />
      <TaskList />
    </div>
  );
}

export default App;
