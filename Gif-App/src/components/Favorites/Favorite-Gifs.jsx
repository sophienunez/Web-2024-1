import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Favorite-Gifs.css"

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteGifs');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((gif) => gif.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteGifs', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='gif-favorites'>
      <NavLink to="/" className={"go-back"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
          <path d="M30 13.5C30.8284 13.5 31.5 12.8284 31.5 12C31.5 11.1716 30.8284 10.5 30 10.5V13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM30 10.5L2 10.5V13.5L30 13.5V10.5Z" fill="black"/>
        </svg>
        <h2>Favorites</h2>
      </NavLink>
      <div className='gif-favorites-content'>
        {favorites.length === 0 ? (
        <p>No tienes GIFs favoritos.</p>
      ) : (
        favorites.map((gif) => (
          <div key={gif.id} className='favorite-item'>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <div className='title-and-btn'>
              <p className='gif-title'>{gif.title}</p>
            <button className='remove-btn' onClick={() => removeFromFavorites(gif.id)}>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z" fill="#E1622D"/>
              </svg>
            </button>
            </div>         
          </div>
        ))
      )}
      </div>     
    </div>
  );
}

export default Favorites;
