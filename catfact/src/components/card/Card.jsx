import React, { useState } from 'react'
import './Card.css'
import Image from '../image/Image'
import Button from '../button/Button'
import Fact from '../fact/Fact'

function Card () {
  const [preview, setPreview] = useState('')

  const handleFactChange = (preview) => {
    setPreview(preview)
  }

  return (
    <div className='card'>
      <div className='card-content'>
        <Image />
        <div className='fact-firstLine'>{preview}</div>
        <Fact onFactChange={handleFactChange} />
        <Button />
      </div>
    </div>
  )
}

export default Card
