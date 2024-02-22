import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Reviewslide from './disreviewer';
import Latesthover from './Latesthover';
import TabLayout from './Check';
import Songshover from './Songshover';
import Collectioncards from './Collectioncards';
import Checkcover from './Checkcover';
import Footer from './Footer';
import Movieshover from './Movieshover';
import Recommondations from './Recommandations';
function Home()
{
    return(
        <div className='bg-black'>
      
        <div className="relative flex  justify-center h-screen overflow-hidden"> 
          <video src=  "/videos/bg8.mp4"  autoplay="{true}" loop muted 
              className="absolute z-10 w-auto  min-w-full max-w-none">
          </video>
          <div className='absolute z-10 inset-0 '>
          <Navbar />
          <Reviewslide />
          </div>
        </div>
        <div>
          <h1 className='text-sky-400 text-3xl text-center  mb-10'>Upcoming Movies</h1>
          <Checkcover />
        </div>
        <div>
          <h1 className='text-sky-400 text-3xl text-center mb-10'>Recent Movies - Streaming on theaters Now</h1>
          <Movieshover />
          </div>
          <div>
          <h1 className='text-sky-400 text-3xl text-center my-10'>Review Collection of Best</h1>
          <Collectioncards />
        </div>
       
          <div className='text-slate-50'>
            <h1 className='text-sky-400 text-3xl text-center my-10'>Explore some OTT</h1>
        <TabLayout />
        </div>
        <div className=' ml-28 mr-20 px-10'>
        <h1 className='text-sky-400 text-3xl text-center pt-10 my-10'>Hits to Listen On</h1>
        <Songshover />
        </div>
        <div>
          <h1 className='text-sky-400 text-3xl text-center my-10'>Best of Kollywood</h1>
          <Latesthover />
          </div>
          <div class="flex items-center justify-center my-10">
    <div class="border-t border-gray-300 flex-grow h-0"></div> 
    <h1 class="text-sky-50 text-3xl mx-4 ">Recommendations for you!</h1>
    <div class="border-t border-gray-300 flex-grow h-0"></div> 
</div>
        <Recommondations />
       <Footer />
      </div>
    );
}
export default Home;