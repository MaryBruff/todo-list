import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import TodoItem from './TodoItem/TodoItem';
import { Todo } from './types';


function App() {
  //The angle brackets <> are used to specify the type of the state variable. In this case, the state variable is an array of Todo objects.
  const [todos, setTodos] = useState<Todo[]>([]);

  //The addTodo function is used to add a new todo item to the list of todos. 
  //The function takes a text parameter and creates a new todo object with a unique id, the text, and a done property set to false. 
  //The new todo object is then added to the list of todos using the setTodos function.
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.random(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos)
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
