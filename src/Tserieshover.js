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

function Tserieshover() {
  const reviewData = [
    { poster: 'https://m.media-amazon.com/images/M/MV5BMzc5YTZkMzUtMDhjZS00YTUwLTg3YWMtNThmZDliODQ3ZmNjXkEyXkFqcGdeQXVyMTMyODUxMzgz._V1_.jpg', review: '' ,name:'Suzhal',rating:'⭐⭐⭐⭐'},
    { poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFT7MPLn8vcQAWK1oNwggVqO8Diu0oOvOQNt-FxrsLw&s', review: '',name:'Vadhandhi' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://image.tmdb.org/t/p/original/e45iJGBhuFtrxapt2D3afAF4mQc.jpg', review: ' ',name:'November Story',rating:'⭐⭐⭐⭐' },
    { poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8xCu8M70SueT6nP-0WY_uEMZtzuyeyzrOqcMm7lQ8A&s', review: '',name:'Ayali' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BM2QzYWFlNzYtMGZjMi00NzFiLTkzYTMtYTRhM2Q3ZTI2YTM2XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_UY1200_CR22,0,630,1200_AL_.jpg', review: ' ' ,name:'Sengalam',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BNTdiYzQ1YWEtMjk0Mi00Y2Y4LWFkZDMtMDJmMzhjZGY1MzBkXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg', review: ' ' ,name:'Velangu',rating:'⭐⭐⭐⭐'}
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

export default Tserieshover;
