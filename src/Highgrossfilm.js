import React, { useState } from 'react';
import './App.css';

const ReviewItem = ({ poster, collection, name, rating }) => {
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
        <p>{collection}</p>
        <p> {rating}</p>
      </div>
    </div>
  );
};

function Highgrossfilm() {
  const reviewData = [
    { poster: 'https://m.media-amazon.com/images/I/712b+yDoWVL._AC_UF1000,1000_QL80_.jpg', collection: '₹2,023.81 crore' ,name:'Dangal',rating:'⭐⭐⭐⭐⭐'},
    { poster: 'https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=20&crop=false', collection: '₹1,810.595 crore',name:'Baahubali 2' ,rating:'⭐⭐⭐'},
    { poster: 'https://image.tmdb.org/t/p/original/kdO4JtO5DnIMyLymQv8C8Ol1CzA.jpg', collection:'₹1,387.26 crore',name:'RRR',rating:'⭐⭐' },
    { poster: 'https://e1.pxfuel.com/desktop-wallpaper/794/865/desktop-wallpaper-kgf-chapter-2-stills-first-look-posters-of-kgf-chapter-2-movie-kgf-chapter-2-poster.jpg', collection: '₹1,200 crore',name:'KGF 2' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://filmfare.wwmindia.com/content/2023/aug/jawan21691407612.jpg', collection: '₹1,148.32 crore' ,name:'Jawan',rating:'⭐⭐⭐'},
    { poster: 'https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg', collection: '₹1,050.3 crore' ,name:'Pathan',rating:'⭐⭐⭐'}
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

export default Highgrossfilm;
