import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slides = [
{
  poster:'https://i.imgur.com/PSxIQOm.jpg',
  name:'Ayalaan',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
{
  poster:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/10/migration-mig_adv1sheet_landing4_rgb_1sm_rgb.jpg',
  name:'Migration',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
{
  poster:'https://www.businessoftollywood.com/wp-content/uploads/2024/01/Guntur-Karam-1.jpg',
  name:'kuntur karam',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
{
  poster:'https://static.toiimg.com/thumb/msid-101818872,width-1280,height-720,resizemode-4/101818872.jpg',
  name:'Merry christmas',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
];
function Latestmovie ()
{
  return(
    <div>
    <Fade>
        {slides.map((row, index) => (
          <div className='flex' key={index}>
           <img src={row.poster} alt={row.name} style={{width:'400px',height:'200px'}}></img>
           <div className="flex-col">
           <h1 className="text-slate-50">{row.name}</h1>
           <h1>{row.rating}</h1>
           </div>
          </div>
        ))};
      </Fade>
    </div>
  );
}
 export default Latestmovie;

 /*
 import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slides = [
{
  poster:'https://i.imgur.com/PSxIQOm.jpg',
  name:'Ayalaan',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
{
  poster:'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/10/migration-mig_adv1sheet_landing4_rgb_1sm_rgb.jpg',
  name:'Migration',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
{
  poster:'https://www.businessoftollywood.com/wp-content/uploads/2024/01/Guntur-Karam-1.jpg',
  name:'kuntur karam',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
{
  poster:'https://static.toiimg.com/thumb/msid-101818872,width-1280,height-720,resizemode-4/101818872.jpg',
  name:'Merry christmas',
  rating:'⭐⭐⭐⭐',
  rlink:'',
  wlink:''
},
];
function Latestmovie ()
{
  return(
    <div>
    <Fade>
        {slides.map((row, index) => (
          <div key={index}>
            <div className="flex-col justify-end ">
              <img className='mx-auto' src={row.poster} alt={row.name} style={{width:'800px', height:'400px'}}></img>
              <div className="flex justify-center mt-20">
              <h1 className="text-3xl text-purple-50 mr-10">{row.name}</h1>
              <h2 className="mr-10">{row.rating}</h2>
              <a  className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mr-10'href={row.rlink}>Show Review</a>
              <a  className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mr-10'href={row.wlink}>Give Review</a>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
 export default Latestmovie;
 */