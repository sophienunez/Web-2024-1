import React from 'react'
import Button from '../button/Button'
import './body.css'

export function Body ({ toggleMusic, tasks, clearAllTasks, deleteTask }) {
  return (
    <div className='container'>

      {/* Lista de tareas */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button handleClick={() => {}} text='Borrar' style='deleteTask' deleteTask={deleteTask} index={index} /> {/* Pasamos la función deleteTask y el índice */}
          </li>
        ))}
      </ul>
      <Button handleClick={() => {}} text='Limpiar tareas' style='clearAll' clearAllTasks={clearAllTasks} />
      <Button handleClick={toggleMusic} text='♪' style='music-button' />
    </div>
  )
}
