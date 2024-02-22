import React, { useState } from 'react';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <nav className='flex  justify-between items-center text-white p-5'>
      <div className='brand'>
        <h1 className='text-sky-400 text-4xl font-serif font-bold'>CineGroove</h1>
      </div>
      <ul className='flex list-none'>
        <li><a href="/" className='text-white mr-10 text-xl font-bold hover:text-sky-600'>Home</a></li>
        <li><a href="/Moviespage" className='text-white mr-10 text-xl font-bold hover:text-sky-600'>Movies</a></li>
        <li><a href="/SeriesPage" className='text-white mr-10 text-xl font-bold hover:text-sky-600'>Series</a></li>
        <li><a href="/Songspage" className='text-white mr-10 text-xl font-bold hover:text-sky-600'>Songs</a></li>
      </ul>
      <div className='flex items-center opacity-50'>
        <input
          type='text'
          placeholder='Search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='mr-2 p-2 rounded-full'
        />
        {/* Add your search button or icon here */}
      </div>
    </nav>
  );
};

export default Navbar;
