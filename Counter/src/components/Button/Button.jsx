import React from 'react'
import './button.css'

const Button = ({ handleClick, text, style }) => {
  const handleClic = () => {
    handleClick()
  }

  return (
    <button className={style} onClick={handleClic}>
      {text}
    </button>
  )
}

export default Button
