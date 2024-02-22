import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Recommondations from '../Recommandations';
import Latesthover from '../Latesthover';
import PosterSlide from '../Posterslide';
import Movieshover from '../Movieshover';
import Highgrossfilm from '../Highgrossfilm';
function Moviespage()
{
    return(
      <div className='bg-black'>
      <Navbar/>
      <div>
        <img src="https://cdn.vectorstock.com/i/preview-1x/56/23/space-horizontal-poster-vector-30395623.jpg" alt="poster" className='w-full h-[250px] mb-10'></img>
      </div>
      
      
      <div className='my-10'>
        <h1 className='text-sky-400 text-center text-3xl my-10'>Latest Movies to watch</h1>
      <Movieshover />
      </div>
      <div className='my-10'>
        <h1 className='text-3xl text-center text-sky-400 my-10'>Check Out different Genre</h1>
      <PosterSlide />
      </div>
      <div className='my-10'>
      <h1 className='text-3xl text-center text-sky-400 my-10'>Highest Gross Indian Films</h1>
      <Highgrossfilm />
      </div>
      
      <div class="flex items-center justify-center mb-10">
    <div class="border-t border-gray-300 flex-grow h-0"></div> 
    <h1 class="text-sky-50 text-3xl mx-4 ">Recommendations for you!</h1>
    <div class="border-t border-gray-300 flex-grow h-0"></div> 
</div>
    
      <Recommondations />
      <Footer />
      </div>
    );
}
export default Moviespage;