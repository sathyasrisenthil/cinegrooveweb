import React, { useState } from 'react';
import './App.css';

const ReviewItem = ({ poster, review, name, rating }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`review-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={poster}
        alt={`Poster for ${name}` }
        className="review-poster"
      />
      <div className="text-overlay">
        <h3 className='text-sky-400'>{name}</h3>
        <p>{review}</p>
        <p> {rating}</p>
      </div>
    </div>
  );
};

function Movieshover() {
  const reviewData = [
    { poster: 'https://m.media-amazon.com/images/M/MV5BYjJmYzRjOTktNTljYy00MjRiLWI2NmUtN2Y1YzkyNjdjZDBjXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg', review: 'The movie with cricket and politics' ,name:'Blue Star',rating:'⭐⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BZjkwN2Q5Y2QtMmE2MC00NzlkLTg2NzQtYjVjYjVmNjE2ZTNiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', review: 'The powerpacked movie with good enterainer',name:'Fighter' ,rating:'⭐⭐⭐'},
    { poster: 'https://image.tmdb.org/t/p/original/qmen4UBfzvXAjpAgiTxO2P6b3Re.jpg', review: 'The best time passable for children' ,name:'Migration',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BNGI4NWRjMzEtMzkwNC00MGY1LThmMjUtYjFmM2I4ZDA2OGNjXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg', review: 'the real box office hit',name:'Hanuman',rating:'⭐⭐⭐⭐' },
    { poster: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/06/01/Superstar-Mahesh-Babu-s-Guntur-Karam-Movie-HD-Posters-and-Stills-1.jpg?fit=1800%2C2550&quality=80&zoom=1&ssl=1?v=1685636219', review: 'The average telugu drama movie',name:'Kuntur Kaaram' ,rating:'⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BNzk4MWIwYTEtZmI1ZC00OWJlLTk1OTAtMWM2OTA2ZWI2MGViXkEyXkFqcGdeQXVyMTU3NDgzNzM4._V1_.jpg', review: 'One time watchable' ,name:'Singapore Saloon',rating:'⭐⭐'}
  ];

  return (
    <div className="app">
      <div className="reviews">
        {reviewData.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
    </div>
  );
}

export default Movieshover;
