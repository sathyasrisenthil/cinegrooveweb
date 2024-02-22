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

function Latesthover() {
  const reviewData = [
    { poster: 'https://static.moviecrow.com/gallery/20231202/223235-Fight%20club%202.jpeg', review: 'The powerpacked 1st half ' ,name:'Fight club',rating:'⭐⭐⭐'},
    { poster: 'https://timesofindia.indiatimes.com/photo/92282228.cms', review: 'The 2 hours tiktok',name:'Jailer' ,rating:'⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BNWIzMzc2ZTAtYzJlYS00NzZlLWIyMGYtYTY0MjQxZjg4MjlhXkEyXkFqcGdeQXVyMTQ3NDMyMzc0._V1_.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' },
    { poster: 'https://img.studioflicks.com/wp-content/uploads/2022/09/12113246/Viduthalai-1-Movie-HQ-Posters-2.jpg', review: 'The perfect balance of emotions',name:'Viduthalai' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://cdn.cinematerial.com/p/136x/celgf2dv/karnan-movie-poster-sm.jpg?v=1616703091', review: 'The inspired story that worth for time and money ' ,name:'Karnan',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BMjMwMmU4ZTktMjVkZi00NTQ5LTg2ZjQtZGU2YzA5MWJkMWViXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg', review: 'The not bad crime thriller ' ,name:'Por Thozhil',rating:'⭐⭐⭐'}
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

export default Latesthover;
