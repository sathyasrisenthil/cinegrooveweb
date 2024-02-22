import React, { useState } from 'react';
import './App.css';

const ReviewItem = ({ poster, category, name, rating }) => {
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
        <h3 className='text-slate-50'>{name}</h3>
        <p className='text-sky-400'>{category}</p>
        <p> {rating}</p>
      </div>
    </div>
  );
};

function Bestshows() {
  const reviewData = [
    { poster: 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg', category: 'Adults' ,name:'Family Guy',rating:'⭐⭐⭐⭐⭐'},
    { poster: 'https://www.postergully.com/cdn/shop/products/LowRes_1Friends_1024x1024.jpg?v=1678204822', category: 'Adults',name:'Friends' ,rating:'⭐⭐⭐'},
    { poster: 'https://i.pinimg.com/550x/3e/1a/31/3e1a3118e2abafaa8adb7b2a3710f729.jpg', category:'U/A',name:'The Office',rating:'⭐⭐' },
    { poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_37IbPznU4ZL070fsz6dTtw7p7_6OSYgBiNFWpC7Dg&s', category: 'U',name:'Friends from College' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg', category: 'Adults' ,name:'Rick and Morty',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/I/81YbVdaJm+L.jpg', category: 'Adults' ,name:'The Boys',rating:'⭐⭐⭐'}
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

export default Bestshows;
