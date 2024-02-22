
import './App.css';
function Podcastposter() {
  const reviewData =  [
    {poster:'https://m.media-amazon.com/images/I/51REuhrbdxL.jpg',pname:'SVK',language:'Tamil',rating:'5.4k ▶️'},
    {poster:'https://i.scdn.co/image/ab6765630000ba8a330014e13d9ba6e998216ebd',pname:'Raj Shamani',language:'English',rating:'4.5M ▶️'},
    {poster:'https://c.sop.saavncdn.com/The-Desi-Crime-Podcast-20240123083907-500x500.jpg',pname:'Desi Crime',language:'English',rating:'4.9M ▶️'},
    {poster:'https://m.media-amazon.com/images/M/MV5BNjdmZTk4N2ItNGUxOC00ZWFkLWJmZjUtYmEzZjA5MDRiYTk5XkEyXkFqcGdeQXVyMTUyMTUzNjE0._V1_FMjpg_UX1000_.jpg',pname:'Lipsika',language:'Telugu',rating:'5.4k ▶️'},
    {poster:'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/15437408/15437408-1678485808373-7be37bf2d6a7.jpg',pname:'Happy vibes with Appu',language:'Malayalam',rating:'5.4k▶️ '},
    {poster:'https://m.media-amazon.com/images/I/41wtpTilpSL._SL500_.jpg',pname:'RJ Praveen',language:'Hindi',rating:'4.7M ▶️'},
  ];
  
    

  return (
    <div className='flex'>
        {reviewData.map((review, index) => (
          <div key={index} className="mb-4">
            <img src={review.poster} alt={review.sname} className='song-poster' />
            <h1 className='text-slate-50 text-xl'>{review.pname}</h1>
            <h1 className='text-slate-400 text-xl'>{review.language}</h1>
            <h1 className='text-slate-50 text-xl'>{review.rating}</h1>
          </div>
        ))}
    </div>
  );
}

export default Podcastposter;

