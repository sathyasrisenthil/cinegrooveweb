import React from 'react';
import {BrowerRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './Home.js';
import Moviespage from './Pages/Moviespage.js';
import Seriespage from './Pages/Seriespage.js';
import Songspage from './Pages/SongsPage.js';
import Loginpage from './Pages/Loginpage.js';
import Signpage from './Pages/Signpage.js';
import Aboutuspage from './Pages/Aboutuspage.js';
import VMcollection from './Collections/VMcollection.js';
import Animecollection from './Collections/Animecollection.js';
import SGcollection from './Collections/SGcollection.js';
import KDcollection from './Collections/KDCollection.js';
function App() {
  return (
    
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Moviespage' element={<Moviespage />}/>
    <Route path='/SeriesPage' element={<Seriespage />}/>
    <Route path='/Songspage' element={<Songspage />}/>
    <Route path='/Loginpage' element={<Loginpage />}/>
    <Route path='/Signpage' element={<Signpage />}/>
    <Route path="/Aboutuspage" element={<Aboutuspage />}/>
    <Route path="/VMcollection" element={<VMcollection />}/>
    <Route path="/Animecollection" element={<Animecollection />}/>
    <Route path="/SGcollection" element={<SGcollection/>}/>
    <Route path="/KDCollection" element={<KDcollection />}/>
   </Routes>
    
   
  );
}

export default App;

/*
<div className='mx-32'>
      <h1 className='text-sky-400 text-3xl text-center mb-10'>Latest Release - Streaming on theaters Now !</h1>
        <Latestmovie />
      </div>


      Follow us on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       <div className='text-center flex justify-center mt-20'>
        <h1 className='text-slate-50 text-2xl  ml-30'> Share your reviews and access more by</h1>
        <a className='text-sky-400  text-3xl px-10' href=''>Login</a>
        <h1 className='text-slate-50 text-2xl'>/</h1>
        <a className='text-sky-400  text-3xl px-10' href=''>SignUp</a>
      </div>
      <div className='flex justify-center mt-10'>
     <h1 className='text-sky-400 text-xl text-center'></h1> <Icon />
     </div>
*/