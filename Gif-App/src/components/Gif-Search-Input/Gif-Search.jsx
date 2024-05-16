import React from 'react'
import { NavLink } from 'react-router-dom'
import './Gif-Search.css'

function GifSearchInput ({ searchTerm, onChange, onKeyDown, onSearch, isLoading }) {
  return (
    <div className='gif-search-input'>
      <div className='title-wrap'>
        <h1 className='title'>SEARCH GIFS HERE</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="49" viewBox="0 0 30 49" fill="none" className="arrow-down">
          <path d="M17 2C17 0.89543 16.1046 -4.82823e-08 15 0C13.8954 -4.82823e-08 13 0.895431 13 2L17 2ZM13.5858 48.4142C14.3668 49.1953 15.6332 49.1953 16.4142 48.4142L29.1421 35.6863C29.9232 34.9052 29.9232 33.6389 29.1421 32.8579C28.3611 32.0768 27.0948 32.0768 26.3137 32.8579L15 44.1716L3.68629 32.8579C2.90524 32.0768 1.63891 32.0768 0.857866 32.8579C0.0768172 33.6389 0.0768172 34.9052 0.857866 35.6863L13.5858 48.4142ZM13 2L13 47L17 47L17 2L13 2Z" fill="black"/>
        </svg>
      </div>
      <div className='search-wrap'>
        <input className='search-bar'
        type='text'
        placeholder='what are you looking for...'
        value={searchTerm}
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
        <button className='search-btn' onClick={onSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
        </button>
        <NavLink to="/favorites">
          <button className='favorites-btn'>Favorites</button>
        </NavLink>   
      </div>
      <footer>
        <p className='footer-text'>By sophie and kazu...</p>
        <img src="https://i.ibb.co/0sj9bjB/tomat.png" alt="" />
      </footer>
    </div>
  )
}

export default GifSearchInput
