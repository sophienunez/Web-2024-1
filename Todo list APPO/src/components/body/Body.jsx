import React, { useContext } from 'react';
import Button from '../button/Button';
import './body.css';
import { TasksContext } from '../../context/TaskContextProvider.jsx';

export function Body() {
  const { tasks, completedTasks, deleteTask, markTaskAsCompleted, markTaskAsUnCompleted, currentList } = useContext(TasksContext);

  console.log("Tasks:", tasks);
  console.log("Completed tasks:", completedTasks);

  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleDeleteAll = () => {
  };

  return (
    <div className='container'>
      {currentList === 'pending' && (
        <div>
          <h2>Tareas pendientes</h2>
          {tasks.length === 0 ? (
            <p>No hay tareas pendientes.</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <span>{task.title}</span>
                  <Button
                    type='delete'
                    onClick={() => handleDelete(task.id)}
                    text='Borrar'
                    style='deleteTask'
                  />
                  <Button
                    onClick={() => markTaskAsCompleted(task.id)}
                    text='Completar'
                    style='completeTask'
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {currentList === 'completed' && (
        <div>
          <h2>Tareas completadas</h2>
          {completedTasks.length === 0 ? (
            <p>No hay tareas completadas.</p>
          ) : (
            <ul>
              {completedTasks.map((task) => (
                <li key={task.id}>
                  <span>{task.title}</span>
                  <Button
                    type='delete'
                    onClick={() => handleDelete(task.id)}
                    text='Borrar'
                    style='deleteTask'
                  />
                  <Button
                    onClick={() => markTaskAsUnCompleted(task.id)}
                    text='No se ha completado'
                    style='completeTask'
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {currentList === 'all' && (
        <div>
          <h2>Todas las tareas</h2>
          {tasks.length === 0 && completedTasks.length === 0 ? (
            <p>No hay tareas de ningún tipo.</p>
          ) : (
            <ul>
              {[...tasks, ...completedTasks].map((task) => (
                <li key={task.id}>
                  <span>{task.title}</span>
                  <Button
                    type='delete'
                    onClick={() => handleDelete(task.id)}
                    text='Borrar'
                    style='deleteTask'
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <Button
        type='deleteAll'
        onClick={handleDeleteAll}
        text='Borrar todas las tareas'
        style='deleteTask'
      />
    </div>
  );
}
