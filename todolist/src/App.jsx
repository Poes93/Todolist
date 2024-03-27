import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        document.title = `${todos.filter(todo => !todo.isCompleted).length} tasks remaining`;
    }, [todos]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    return (
      <div className="app">
          <div className="header">To-Do List Maker</div>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
  );
}



export default App;