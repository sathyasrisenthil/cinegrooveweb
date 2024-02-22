import React from 'react';
const Recommondations = () => {
    const genre = ['Action','comedy','Drama','Horror','Mystery','Romance','Thriller'];
    const songs=['English','Tamil','Telugu','Malayalam','Kanada','French'];
    const series=['K series','C series','J series'];
     
    return (
        <div className='flex justify-center'>
        <div className='mx-20'>
          <h2 className='text-sky-400 text-2xl'>Movies genres</h2>
          <ul>
            {genre.map((item, index) => (
              <li key={`genre-${index}`}><a className="text-slate-50" href="">{item}</a></li>
            ))}
          </ul>
        </div>
        <div  className='mx-20'>
          <h2 className='text-sky-400 text-2xl'>Songs</h2>
          <ul>
            {songs.map((item, index) => (
              <li key={`songs-${index}`}><a className="text-slate-50" href="">{item}</a></li>
            ))}
          </ul>
        </div>
        <div  className='mx-20'>
          <h2 className='text-sky-400 text-2xl'>Series</h2>
          <ul>
            {series.map((item, index) => (
              <li key={`series-${index}`}><a className="text-slate-50" href="">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      );
    };
    
    export default Recommondations;
