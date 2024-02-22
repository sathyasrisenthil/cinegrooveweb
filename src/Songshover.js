import './App.css';
import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';
function Songshover() {
  const reviewData =  [
    {poster:'https://images.hungama.com/c/1/6a9/cb8/75579285/75579285_300x300.jpg',sname:'Adiye',mname:'bachelor',rating:'5.4k ❤️'},
    {poster:'https://live.staticflickr.com/7228/7173749340_494dc537ab_z.jpg',sname:'Who Says',mname:'selena Gomez',rating:'5.4M ❤️'},
    {poster:'https://m.timesofindia.com/photo/105661069/size-226450/105661069.jpg',sname:'urugi urugi',mname:'Joe',rating:'5.4k ❤️'},
    {poster:'https://i.ytimg.com/vi/wL6dzVYwO8Q/maxresdefault.jpg',sname:'kuruchi Madathapetti',mname:'kuntur kaaram',rating:'5.4k ❤️'},
    {poster:'https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg',sname:'perfect',mname:'Ed Sheeran',rating:'5.4k ❤️'},
    {poster:'https://i.pinimg.com/736x/eb/9d/c7/eb9dc7708ae3bbe9efed31491f8888d3.jpg',sname:'Chaleya',mname:'Jawan',rating:'5.4k ❤️'},
    {poster:'https://i.scdn.co/image/ab67616d0000b273da4f682bf4f2ef4dd799bb46',sname:'Malare',mname:'premam',rating:'5.4k ❤️'},
    {poster:'https://i.scdn.co/image/ab67616d0000b27344aa56e23e3a89802e6c6347',sname:'Chammak challo',mname:'Ra-One',rating:'5.4k ❤️'},
  ];
  const settings={
    infinite:true,
    slidesToShow:6,
    duration: 3000,
    };
    const customArrows = (
      <div style={{ display: 'none' }}>
        {/* Hide the default navigation arrows */}
        <span>&#60;</span>
        <span>&#62;</span>
      </div>
    );

  return (
    <div>
      <Slide {...settings} prevArrow={customArrows} nextArrow={customArrows}>
        {reviewData.map((review, index) => (
          <div key={index} className="mb-4">
            <img src={review.poster} alt={review.sname} className='song-poster' />
            <h1 className='text-slate-50 text-xl'>{review.sname}</h1>
            <h1 className='text-slate-400 text-xl'>{review.mname}</h1>
            <h1 className='text-slate-50 text-xl'>{review.rating}</h1>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Songshover;
