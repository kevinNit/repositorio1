import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
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
