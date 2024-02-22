import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slides = [
  {
    review: 'Another good one from Dhanush. Excellent story line & sharp dialog that talks about social justice',
    name: 'Blue sattai Maran',
    rating: '⭐⭐⭐⭐'
  },
  {
    review: 'Half baked with no screenplay and wasting many good actors',
    name: 'Its Prasanth',
    rating: '⭐⭐'
  },
  {
    review: 'movie with best first half and slow , unrealist second half',
    name: 'Second Show',
    rating: '⭐⭐⭐'
  },
];

const divstyle = {
  display: 'flex',
  flexDirection: 'column',  // Adjusted to display items in a column
  alignItems: "center",
  justifyContent: "center"
};

const spanstyle = {
  color: 'white'
};

function Reviewslide() {
 
  return (
    <div className="bg-black opacity-70 text-slate-50 mt-[500px]">
      <Fade>
        {slides.map((row, index) => (
          <div key={index}>
            <div style={divstyle}>
              <h4 style={spanstyle}>{row.review}</h4>
              <span style={spanstyle}>{row.rating}</span>
              <h2 className='text-xl'style={spanstyle}>{row.name}</h2>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Reviewslide;
