import { useState } from "react";
import Todo from "../../components/todo";
import TodoForm from "../../components/TodoForm";

import "../../App.css";
import { useNavigate } from "react-router-dom";

export function CreateTask() {
  const navigate = useNavigate();

  const addTodo = (text, category) => {
    const arrayExistente = JSON.parse(localStorage.getItem("array"));
    if (arrayExistente != null) {
      console.log("1");
      const newTodos = {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      };
      arrayExistente.push(newTodos);
      localStorage.setItem("array", JSON.stringify(arrayExistente));
      navigate("/List");
    } else {
      console.log("2");
      const newTodos = [
        {
          id: Math.floor(Math.random() * 10000),
          text,
          category,
          isCompleted: false,
        },
      ];
      localStorage.setItem("array", JSON.stringify(newTodos));
      navigate("/List");
    }
  };

  return (
    <div className="app">
      <h1>Criação de tarefas</h1>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
