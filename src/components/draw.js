import React, { useState } from 'react';

function Draw({ movies }) {
 const [drawnMovie, setDrawnMovie] = useState(null);
 const [drawing, setDrawing] = useState(false);

 const handleDraw = () => {
   setDrawing(true);
   setTimeout(() => {
     const randomMovie = movies[Math.floor(Math.random() * movies.length)];
     setDrawnMovie(randomMovie);
     setDrawing(false);
   }, 5000);
 };

 const handleResetDraw = () => {
   setDrawnMovie(null);
 };

 return (
  <div className={`sorting-container ${drawing ? 'popcorn-animation' : ''}`}>
  <h2>Vai vir um filme que o Matheus deseja, amém.</h2>
     {drawing ? (
       <p>Escolhendo...</p>
     ) : (
       <div>
         {drawnMovie ? (
           <div>
             <p>{drawnMovie}</p>
             <button 
              className="sorting-button"
              onClick={handleResetDraw}
             >
              Redraw
            </button>
           </div>
         ) : (
           <button 
            className="sorting-button"
            onClick={handleDraw}
           >
            Draw
           </button>
         )}
       </div>
     )}
   </div>
 );
}

export default Draw;
