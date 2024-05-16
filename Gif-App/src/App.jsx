import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GifSearch } from './components/Gif-Search/Gifs';
import GifFavorites from './components/Favorites/Favorite-Gifs';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<GifSearch />} /> 
        <Route path="/favorites" element={<GifFavorites />}/>
      </Routes> 
    </div>
  );
}

export default App;