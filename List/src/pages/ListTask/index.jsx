import { useState } from "react";
import Todo from "../../components/todo";
import Search from "../../components/Search";

import "../../App.css";

export function ListTask() {
  const [array, setArray] = useState("");
  const arraySalvo = JSON.parse(localStorage.getItem("array"));
  const [search, setSearch] = useState("");
  const removeTodo = (id) => {
    const newTodos = [...arraySalvo];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    localStorage.setItem("array", JSON.stringify(filteredTodos));
    setArray(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...arraySalvo];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    localStorage.setItem("array", JSON.stringify(newTodos));
    setArray(newTodos);
  };

  return (
    <div className="app">
      <h1>lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      {arraySalvo
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
    </div>
  );
}
