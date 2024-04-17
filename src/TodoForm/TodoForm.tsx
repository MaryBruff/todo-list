import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}
//Defines the shape of the props that the TodoForm component expects. The addTodo prop is a function that takes a string as an argument and returns void because it doesn't return anything.

function TodoForm({ addTodo }: TodoFormProps) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return; // Prevent adding empty todo
    addTodo(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
