import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo; //single todo object
  toggleTodo: (id: number) => void; //accepts a number and returns void
  deleteTodo: (id: number) => void; //accepts a number and returns void
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  //The TodoItem component accepts three props: todo, toggleTodo, and deleteTodo. The todo prop is a single todo object, and the toggleTodo and deleteTodo props are functions that accept a number and return void.
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
