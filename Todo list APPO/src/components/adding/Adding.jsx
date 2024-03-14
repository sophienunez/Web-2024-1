import React, { useState } from 'react'
import './adding.css'

export function Adding ({ onAddTask }) {
  const [task, setTask] = useState('')

  // Función para manejar el cambio en el input de la tarea
  const handleTaskChange = (event) => {
    setTask(event.target.value)
  }

  // Función para manejar la adición de la tarea
  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task) // Llamar a la función del padre para agregar la tarea
      setTask('')
    }
  }

  // Función para manejar la adición de la tarea al presionar Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask()
    }
  }

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
        <button onClick={handleAddTask}>Agregar</button>
      </div>
    </div>
  )
}
