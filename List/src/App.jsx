import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navebar } from "./components/NaveBar";
import { CreateTask } from "./pages/CreateTask";
import { ListTask } from "./pages/ListTask";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // padding: "5%",
      }}
    >
      <Navebar />
      <Routes>
        <Route path="/" element={<CreateTask />} />
        <Route path="/List" element={<ListTask />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </div>
  );
}
