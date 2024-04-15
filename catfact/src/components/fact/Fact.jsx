import React, { useState, useEffect } from 'react'
import './Fact.css'

function Fact ({ onFactChange }) {
  const [fact, setFact] = useState('')

  useEffect(() => {
    if (!fact) {
      fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
          setFact(data.fact)
          const firstFourWords = data.fact.split(' ').slice(0, 4).join(' ')
          onFactChange(firstFourWords)
        })
        .catch(error => console.log('Error', error))
    }
  }, [fact, onFactChange])

  return (
    <div className='fact'>
      <p>{fact}</p>
    </div>
  )
}

export default Fact
