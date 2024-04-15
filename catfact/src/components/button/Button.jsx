import React from 'react'
import './Button.css'

function Button ({ onClick }) {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <button className='button' onClick={handleClick}>Get another fact</button>
  )
}

export default Button