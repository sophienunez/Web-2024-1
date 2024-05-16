import React from 'react';
import './Gif-results.css';

function GifResults({ gifs, isLoading, searchTerm, addToFavorites, isFavorite }) {
  const handleAddToFavorites = (gif) => {
    addToFavorites(gif);
  };

  return (
    <div className='gif-results'>
    <h2 className='results-number'>{gifs.length} results for “{searchTerm}"</h2>
      <div className='gif-results-content'>
        {isLoading && <div className='loader' />}

      {!isLoading && gifs.length === 0 && searchTerm !== '' && (
        <div className='no-results'>No se encontraron GIFs para "{searchTerm}".</div>
      )}

      {!isLoading &&
        gifs.map((gif) => (
          <div key={gif.id} className='gif-item'>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <div className='title-and-btn'>
              <p className='gif-title'>{gif.title}</p>
              <button className='add-favorite-btn' onClick={() => handleAddToFavorites(gif)}>
                {isFavorite ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z" fill="#E1622D"/>
                  </svg>
                  : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.1 20.8C11.6 20.8 11 20.6 10.6 20.2C4.1 14.5 4 14.4 4 14.3L3.9 14.2C2.7 13 2 11.3 2 9.6V9.4C2.1 5.8 5 3 8.6 3C9.7 3 11.2 3.6 12.1 4.8C13 3.6 14.6 3 15.7 3C19.3 3 22.1 5.8 22.3 9.4V9.6C22.3 11.4 21.6 13 20.4 14.3L20.3 14.4C20.2 14.5 19.4 15.2 13.7 20.3C13.2 20.6 12.7 20.8 12.1 20.8ZM5.5 14C5.9 14.4 7.9 15.8 11.6 19C11.9 19.3 12.3 19.3 12.6 19C16.4 15.6 18.6 13.7 19.1 13.3L19.2 13.2C20.2 12.2 20.7 10.9 20.7 9.6V9.4C20.6 6.6 18.4 4.5 15.6 4.5C14.9 4.5 13.5 5 13 6.1C12.8 6.5 12.4 6.7 12 6.7C11.6 6.7 11.2 6.5 11 6.1C10.5 5.1 9.2 4.5 8.4 4.5C5.7 4.5 3.4 6.7 3.3 9.4V9.7C3.3 11 3.9 12.3 4.8 13.2L5.5 14Z" fill="black"/>
                  </svg>
                }
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default GifResults;