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

function Eserieshover() {
  const seriesposter1 = [
    { poster: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg', review: '' ,name:'Breaking Bad',rating:'⭐⭐⭐⭐'},
    { poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2LihGpmIFi6Pr7qSWOO12dm2rPmefjVleFfceTegYA&s', review: '',name:'Wednesday' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', review: '',name:'Money Heist',rating:'⭐⭐⭐⭐' },
    { poster: 'https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg', review: '',name:'Young Sheldon' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', review: ' ' ,name:'Game of Thrones',rating:'⭐⭐⭐'},
    { poster: 'https://rukminim2.flixcart.com/image/850/1000/kvzkosw0/poster/y/9/a/medium-sex-education-tv-series-each-matte-finish-poster-original-imag8rk34qyazfpg.jpeg?q=90&crop=false', review: ' ' ,name:'Sex Education',rating:'⭐⭐⭐⭐'}
  ];
  const seriesposter2= [
    { poster: 'https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', review: '' ,name:'Squid Game',rating:'⭐⭐⭐⭐'},
    { poster: 'https://media.themoviedb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg', review: '',name:'All of us are dead' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://image.tmdb.org/t/p/original/hYC4bHfvjVYMfYuTpmwNofqAG0X.jpg', review: '',name:'Elite',rating:'⭐⭐⭐⭐' },
    { poster: 'https://i.redd.it/b7ux95rczt551.jpg', review: '',name:'Young Sheldon' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://www.tallengestore.com/cdn/shop/products/PrisonBreak-NetflixTVShowPoster_2b91c841-8ef7-432b-b6eb-bd68a801843f.jpg?v=1589271925', review: ' ' ,name:'Prision Break',rating:'⭐⭐⭐'},
    { poster: 'https://lh5.googleusercontent.com/proxy/kpM6xVrudASvB0t2crb16zPh0J4uZNkclLwt-G_8MNqkXJmuxfFUYiHRHNFcPdy1EDyCH9-SCn7u8kCIt0AxJBkgkVdQaFVTAEyqcYFXpprJ3Y3AJgNWMamFLU0a2ARdqsGy8W3UkKNO4qnK7hWDgGg-iYX1UZWUfSY6dZ-J_C5rr_pfiau8', review: ' ' ,name:'Stranger Things',rating:'⭐⭐⭐⭐'}
  ];
  return (
    <div>
    <div className="app mb-10">
      <div className="reviews">
        {seriesposter1.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
    </div>
    <div className="app">
      <div className="reviews">
        {seriesposter2.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Eserieshover;
