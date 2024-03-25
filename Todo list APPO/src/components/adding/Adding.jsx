// adding.jsx
import React, { useState, useContext } from 'react';
import { TasksContext } from '../../context/TaskContextProvider.jsx';
import Button from '../button/Button';
import { v4 as uuidv4 } from 'uuid';
import './adding.css';

export function Adding() {
  const { addTask } = useContext(TasksContext);
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        title: task,
        completed: false,
      };
      console.log("New task to add:", newTask);
      addTask(newTask);
      setTask('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='adding-container'>
      <div className='task-input'>
        <input
          type='text'
          placeholder='Escribe tus objetivos'
          value={task}
          onChange={handleTaskChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleAddTask} text='Agregar' style='addTask' />
      </div>
    </div>
  );
}
