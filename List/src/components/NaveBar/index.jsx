import { Link } from "react-router-dom";

export const Navebar = () => {
  return (
    <nav
      style={{
        width: "45rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <ul>
        <li>
          <Link to="/">Criar Tarefa</Link>
        </li>
        <li>
          <Link to="/List">Lista de Tarefas</Link>
        </li>
      </ul>
    </nav>
  );
};
