import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask) {
      setTasks(prevTasks => [
        ...prevTasks,
        { text: trimmedTask, completed: false }
      ]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    setTasks(prevTasks => 
      prevTasks.map((t, i) => 
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = (index) => {
    setTasks(prevTasks => 
      prevTasks.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
            <div>
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Desmarcar' : 'Concluir'}
              </button>
              <button className="remove" onClick={() => removeTask(index)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
