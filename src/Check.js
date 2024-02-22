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
        alt={`Poster for ${name}`}
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

const AmazonPrimeContent = () => {
  const reviewData = [
    // Add your Amazon Prime content here
    { poster: 'https://cdn.europosters.eu/image/750/posters/the-boys-homelander-stencil-i101102.jpg', review: 'It definitly shows superherors other side' ,name:'The Boys',rating:'⭐⭐⭐'},
    { poster: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Raazi_-_Poster.jpg', review: 'The famil entertainer with good twist',name:'Raazi' ,rating:'⭐⭐'},
    { poster: 'https://www.cinejosh.com/newsimg/newsmainimg/dhootha-trailer-to-be-out-tomorrow_b_2211230632.jpg', review: 'the real box office hit',name:'Dhoota',rating:'⭐⭐⭐⭐' },
    { poster: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sapta-sagaradaache-ello--side-a-et00329345-1692362518.jpg', review: 'The perfect balance of emotions',name:'Sapta sagaradaache ello' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://upload.wikimedia.org/wikipedia/en/8/82/Uriyadi_poster.jpg', review: 'The inspired story that worth for time and money ' ,name:'uyiradi',rating:'⭐⭐⭐'},
    { poster: 'https://www.themoviedb.org/t/p/original/cTS86RwEBIDgCgUmjWQTSoPsK6p.jpg', review: 'The not bad crime thriller ' ,name:'Farzi',rating:'⭐⭐⭐'}
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
};

const HotStarContent = () => {
  const reviewData = [
    // Add your HotStar content here
    { poster: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91zzAMkVCUL._AC_UF1000,1000_QL80_.jpg', review: 'The powerpacked action hit film ' ,name:'Avengers End Game',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg', review: 'The must film of Indian cinema',name:'m.S Dhoni' ,rating:'⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BZmM3ZjNiMGMtMTc2NS00OTQ5LWI2MzItY2Q0Yjg1Y2I5MTZlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg', review: 'The family drama with good screenplay',name:'Geetha Govindam',rating:'⭐⭐⭐⭐' },
    { poster: 'https://m.media-amazon.com/images/M/MV5BODUyYmVmZjQtOGYyYS00ZTgxLTlhOWYtYTRjMzk4ZDA1ZDgxXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_.jpg', review: 'The perfect balance of emotions',name:'Madras' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://media-cache.cinematerial.com/p/500x/2hata14h/what-if-movie-poster.jpg?v=1702538165', review: 'The worth film for time and money ' ,name:'What If',rating:'⭐⭐⭐'},
    { poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PzzueDkjAj7RQF6B7MIj2Pac0EyggaXfPw&usqp=CAU',review:'the true inspiration story',name:'12th Fail',rating:'⭐⭐⭐⭐'}
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
};

const NetflixContent = () => {
  const reviewData = [
    // Add your Netflix content here
    { poster: 'https://www.themoviedb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', review: 'The powerpacked 1st half ' ,name:'Fight club',rating:'⭐⭐⭐'},
    { poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Sesham_Mikeil_Fathima_poster.jpeg/220px-Sesham_Mikeil_Fathima_poster.jpeg', review: 'The 2 hours tiktok',name:'Jailer' ,rating:'⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' },
    { poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Hi_Nanna_poster.jpg/220px-Hi_Nanna_poster.jpg', review: 'The perfect balance of emotions',name:'Viduthalai' ,rating:'⭐⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BZTUzYjRlOTYtNjdjMC00ZmMyLWI3NTUtOWMwMmM2ZDU4NTRhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg', review: 'The inspired story that worth for time and money ' ,name:'Karnan',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BY2Y0OTc3MTMtZGE2Zi00YjFiLTg0ZWUtYTVmZjhiY2FiMDhjXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', review: 'The not bad crime thriller ' ,name:'Por Thozhil',rating:'⭐⭐⭐'}
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
};
const SonylivContent = () => {
  const reviewData = [
    // Add your Sonyliv content here
    { poster: 'https://m.media-amazon.com/images/M/MV5BOTYyYjhiOTYtODA0MC00M2ExLWE4M2ItNWZiMmFiNzQ1MGE1XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg', review: 'The powerpacked 1st half ' ,name:'Fight club',rating:'⭐⭐⭐'},
    { poster: 'https://m.media-amazon.com/images/M/MV5BM2UzNmY5NGEtYmE2ZS00YTcxLTg1OWMtYmM1NTAzMWY1MTcxXkEyXkFqcGdeQXVyMTA1OTMzNTQw._V1_.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' },
    { poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Lincoln_2012_Teaser_Poster.jpg/220px-Lincoln_2012_Teaser_Poster.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' },
    { poster: 'https://m.media-amazon.com/images/M/MV5BMmRlZDQ1MmUtMzE2Yi00YTkxLTk1MGMtYmIyYWQwODcxYzRlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' },
    { poster: 'https://upload.wikimedia.org/wikipedia/en/4/47/Sivaranjiniyum_Innum_Sila_Pengalum.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' },
    { poster: 'https://www.bollywoodhungama.com/wp-content/uploads/2019/12/World-Famous-Lover_-Vijay-Deverakonda-and-Raashi-Khanna-look-so-in-love-in-the-latest-poster.jpg', review: 'the real box office hit',name:'Vikram',rating:'⭐⭐⭐⭐' }
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
};

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState('amazonPrime');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-layout">
      <div className="tab-options">
        <div className={`tab-option ${activeTab === 'amazonPrime' ? 'active' : ''}`} onClick={() => handleTabClick('amazonPrime')}>
          Amazon Prime
        </div>
        <div className={`tab-option ${activeTab === 'hotStar' ? 'active' : ''}`} onClick={() => handleTabClick('hotStar')}>
          HotStar
        </div>
        <div className={`tab-option ${activeTab === 'netflix' ? 'active' : ''}`} onClick={() => handleTabClick('netflix')}>
          Netflix
        </div>
        <div className={`tab-option ${activeTab === 'sonyliv' ? 'active' : ''}`} onClick={() => handleTabClick('sonyliv')}>
          SonyLiv
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'amazonPrime' && <AmazonPrimeContent />}
        {activeTab === 'hotStar' && <HotStarContent />}
        {activeTab === 'netflix' && <NetflixContent />}
        {activeTab == 'sonyliv' && <SonylivContent />}
      </div>
    </div>
  );
};

export default TabLayout;
