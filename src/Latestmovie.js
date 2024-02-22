/*
import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide} from 'react-slideshow-image';

const slides = [
  {
    poster: 'https://i.imgur.com/PSxIQOm.jpg',
    name: 'Ayalaan',
    oneline:'A lost alien seeks help from four friends to get back to his home planet, while a group of hostile scientists tries to capture it.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
  {
    poster: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/10/migration-mig_adv1sheet_landing4_rgb_1sm_rgb.jpg',
    name: 'Migration',
    oneline:'A family of ducks decides to leave the safety of a New England pond for an adventurous trip to Jamaica. However, their well-laid plans quickly go awry when they get lost and wind up in New York City',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
  {
    poster: 'https://www.businessoftollywood.com/wp-content/uploads/2024/01/Guntur-Karam-1.jpg',
    name: 'kuntur karam',
    oneline:'the king of the underworld of Guntur city, as he falls in love with a journalist working to expose the illegal activities in the city.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
  {
    poster: 'https://static.toiimg.com/thumb/msid-101818872,width-1280,height-720,resizemode-4/101818872.jpg',
    name: 'Merry Christmas',
    oneline: 'Two strangers meet on a fateful Christmas Eve, but a night of romance soon becomes a nightmare.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
];

function Latestmovie() {
  return (
    <div>
      <Slide>
        {slides.map((row, index) => (
          <div key={index} className="flex items-center justify-start mb-6">
            <img className="mr-4" src={row.poster} alt={row.name} style={{ width: '600px', height: '400px' }} />
            <div>
              <h1 className="text-3xl text-red-50 underline decoration-sky-500 font-serif mb-2">{row.name}</h1>
              <p className="text-slate-50">{row.oneline}</p>
              <h2 className="mb-2">{row.rating}</h2>
              <div className="flex">
                <a className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mr-2' href={row.rlink}>Show Review</a>
                <a className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' href={row.wlink}>Give Review</a>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Latestmovie;
*/
import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide} from 'react-slideshow-image';

const slides = [
  {
    poster: 'https://i.imgur.com/PSxIQOm.jpg',
    name: 'Ayalaan',
    oneline:'A lost alien seeks help from four friends to get back to his home planet, while a group of hostile scientists tries to capture it.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
  {
    poster: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/10/migration-mig_adv1sheet_landing4_rgb_1sm_rgb.jpg',
    name: 'Migration',
    oneline:'the king of the underworld of Guntur city, as he falls in love with a journalist working to expose the illegal activities in the city.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
  {
    poster: 'https://www.businessoftollywood.com/wp-content/uploads/2024/01/Guntur-Karam-1.jpg',
    name: 'kuntur karam',
    oneline:'the king of the underworld of Guntur city, as he falls in love with a journalist working to expose the illegal activities in the city.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
  {
    poster: 'https://static.toiimg.com/thumb/msid-101818872,width-1280,height-720,resizemode-4/101818872.jpg',
    name: 'Merry Christmas',
    oneline: 'the king of the underworld of Guntur city, as he falls in love with a journalist working to expose the illegal activities in the city.',
    rating: '⭐⭐⭐⭐',
    rlink: '',
    wlink: ''
  },
];

function Latestmovie() {
  const settings={
  infinite:true,
  slidesToShow:3
  };
  return (
    <div>
      <Slide {...settings}>
        {slides.map((row, index) => (
          <div key={index} className="mb-6">
            <img className="mr-4" src={row.poster} alt={row.name} style={{ width: '300px', height: '200px' }} />
            <div>
              <h1 className="text-3xl text-slate-50  mb-2">{row.name}</h1>
              <h2 className="mb-2">{row.rating}</h2>
              <div className="flex">
                <a className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mr-2' href={row.rlink}>Show Review</a>
                <a className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' href={row.wlink}>Give Review</a>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Latestmovie;
