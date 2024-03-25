import React from 'react'
import './button.css'
import buttonClickSound from '../../assets/Coin.mp3'

const Button = ({ onClick, text, style }) => {
  const handleClickWithSound = () => {
    const audio = new window.Audio(buttonClickSound)
    audio.play()
    onClick() // Llama a la función onClick proporcionada por el padre
  }

  return (
    <button className={style} onClick={handleClickWithSound}>
      {text}
    </button>
  )
}

export default Button
