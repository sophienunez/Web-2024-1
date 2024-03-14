import React, { useState } from 'react'
import { Header, Footer, Adding } from './components'
import { Body } from './components/body/Body'
import assasinBakcgroundMusic from './assets/background_music.mp3'

export function App () {
  const [musicEnabled, setMusicEnabled] = useState(true)
  const [tasks, setTasks] = useState([])

  // Función para agregar una tarea a la lista de tareas
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  // Función para borrar todas las tareas
  const clearAllTasks = () => {
    setTasks([])
  }

  // Función para borrar una tarea específica
  const deleteTask = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  const toggleMusic = () => {
    setMusicEnabled((prevState) => !prevState)
  }

  return (
    <>
      {musicEnabled && <audio src={assasinBakcgroundMusic} autoPlay loop />}
      <Header/>
      <Adding onAddTask={addTask}/>
      <Body tasks={tasks} toggleMusic={toggleMusic} clearAllTasks={clearAllTasks} deleteTask={deleteTask} />
      <Footer />
    </>
  )
}
