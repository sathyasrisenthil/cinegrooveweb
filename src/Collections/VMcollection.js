import React from "react";
import Navbar from '../Navbar';
import CommentSection from "../CommentSection";
import Artists from "../Artists";
function VMcollection()
{
    return(
        <div className="bg-black">
            <div >
            <Navbar/>
            <hr></hr>
            <div className="flex">
      <h1 className="text-slate-400 text-4xl ml-20 mr-10  mt-10">Adukalam  </h1 >
      </div>
      <h1 className="text-slate-50 text-xl ml-20 mb-5">Falling in love with Irene as well as refusing to obey his boss Pettaikaran in a rooster fight complicates Karuppu's life.</h1>
           <div className="flex mx-20">
           
            <img src="https://cdn.cinematerial.com/p/297x/b7wh8lfv/aadukalam-indian-movie-poster-md.jpg?v=1456537582" alt="poster of adukalam" className="h-[500px] w-[300px] mb-5"/>
            <img src="https://wallpapercave.com/wp/wp8662896.jpg" alt="poster for adukalam" className="h-[500px] w-[1200px] mb-5"/>

           </div>
           <div>
           <h1 className="text-slate-50 text-2xl ml-20 mt-10 mb-10">Drama | Action | Romance | 2011 | U/A</h1>
           
           </div>
            </div>
            <CommentSection />
        </div>
    );
}
export default VMcollection;