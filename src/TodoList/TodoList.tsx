import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[]; //array of todo objects
  toggleTodo: (id: number) => void; //accepts a number and returns void
  deleteTodo: (id: number) => void; //accepts a number and returns void
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  //The TodoList component accepts three props: todos, toggleTodo, and deleteTodo. The todos prop is an array of todo objects, and the toggleTodo and deleteTodo props are functions that accept a number and return void.
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
