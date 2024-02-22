import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Recommondations from '../Recommandations';
import Tserieshover from '../Tserieshover';
import Eserieshover from '../Eserieshover';
import Bestshows from '../Bestshows';
function Seriespage()
{
    return(
        <div className='bg-black'>
            <Navbar />
            <div>
        <img src="https://cdn.vectorstock.com/i/preview-1x/56/23/space-horizontal-poster-vector-30395623.jpg" alt="poster" className='w-full h-[250px] mb-10'></img>
      </div>    
      
        <div className='my-10'>
            <h1 className='text-sky-400 text-3xl text-center my-10'>Famous Series of All Time</h1>
            <Eserieshover />
        </div>
        <div className='my-10'>
            <h1 className='text-sky-400 text-3xl text-center my-10'>The Must Watch Enterainer for Adults</h1>
            <Bestshows />
        </div>
        <div className='my-10'>
        <h1 className='text-sky-400 text-3xl text-center my-10'>Best Tamil series</h1>
        <Tserieshover />
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
export default Seriespage;