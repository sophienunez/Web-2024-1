import React, { useState, useEffect } from 'react'
import './Image.css'

function Image() {
  const [isLoading, setIsLoading] = useState(true)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://cataas.com/cat')
      .then(response => {
        setImageUrl(response.url)
        setIsLoading(false)
      })
      .catch(error => console.log('Error', error))
  }, [])

  return (
    <div className="image-container">
      {isLoading ? (
        <div className='loader' />
      ) : (
        <img className='image' src={imageUrl} alt='Cat' onLoad={() => setIsLoading(false)} />
      )}
    </div>
  )
}

export default Image