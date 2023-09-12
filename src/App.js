import React, { useState } from 'react';
import Movies from './components/films';
import Draw from './components/draw';
import './App.css';

function App() {
 const [movies, setMovies] = useState([]);

 const addMovie = (newMovie) => {
   setMovies([...movies, newMovie]);
 };

 const removeMovie = (movie) => {
   setMovies(movies.filter(m => m !== movie));
 };

 return (
   <div className="App">
     <h1>Filmnator 🍿</h1>
     <Movies movies={movies} addMovie={addMovie} removeMovie={removeMovie} />
     <Draw movies={movies} />
   </div>
 );
}

export default App;
