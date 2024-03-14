import React from 'react'
import './button.css'
import buttonClickSound from '../../assets/Coin.mp3'

const Button = ({ handleClick, text, style, clearAllTasks, deleteTask, index }) => {
  const handleClickWithSound = () => {
    const audio = new window.Audio(buttonClickSound)
    audio.play()
    handleClick()
  }

  const handleClearAllTasks = () => {
    if (clearAllTasks) {
      clearAllTasks()
    }
  }

  const handleDeleteTask = () => {
    if (deleteTask) {
      deleteTask(index)
    }
  }

  return (
    <button className={style} onClick={text === 'Limpia todo' ? handleClearAllTasks : text === 'Borrar' ? handleDeleteTask : handleClickWithSound}>
      {text}
    </button>
  )
}

export default Button
