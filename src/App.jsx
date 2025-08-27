import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Tasks from "./pages/Tasks";
import TaskDetail from "./components/TaskDetail"; // seu componente

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">ToDo List</h1>
            <nav className="flex gap-4">
              <Link to="/" className="hover:underline">Minhas Tarefas</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/task/:id" element={<TaskDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
