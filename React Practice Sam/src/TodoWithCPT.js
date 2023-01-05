import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // load todos from local storage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // save todos to local storage when the todos state variable changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // create a new todo
  const addTodo = (event) => {
    event.preventDefault();
    if (!input) return;
    setTodos([...todos, { text: input, id: Date.now() }]);
    setInput('');
  };

  // delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // update a todo
  const updateTodo = (id, text) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <div className="mx-auto max-w-sm">
      <form onSubmit={addTodo} className="mb-5">
        <input
          className="border rounded py-2 px-3"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add a todo"
        />
      </form>
      <ul className="list-reset">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="text"
              className="border rounded py-2 px-3 w-full"
              value={todo.text}
              onChange={(event) => updateTodo(todo.id, event.target.value)}
            />
            <button
              className="text-red-500 ml-2"
              onClick={() => deleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
