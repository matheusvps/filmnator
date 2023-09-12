import React, { useState } from 'react';

function Movies({ movies, addMovie, removeMovie }) {
 const [newMovie, setNewMovie] = useState('');

 const handleAddMovie = () => {
   addMovie(newMovie);
   setNewMovie('');
 };

 const handleRemoveMovie = (movie) => {
   removeMovie(movie);
 };

 return (
   <div className="movies-container">
     <h2>Lista de Filmes</h2>
     <ul className="movies-list">
       {movies.map((movie, index) => (
         <li key={index}>
           <div className="movie-item">
             <span>{movie}</span>
             <button onClick={() => handleRemoveMovie(movie)}>Deletar</button>
           </div>
         </li>
       ))}
     </ul>
     <input
       type="text"
       value={newMovie}
       onChange={(e) => setNewMovie(e.target.value)}
     />
     <button onClick={handleAddMovie}>Add</button>
   </div>
 );
}

export default Movies;
