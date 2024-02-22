import React from "react";
function Artists()
{
    const artistpic=[
        {poster:"http://t2.gstatic.com/images?q=tbn:ANd9GcQWg3g7zOyzRQUnLfb7BfsE0oZNBIqaazyFnxFHk0v-qcVxVAupxu9-sPJIFJZrB_8HxsMEXQ",name:"G.V Prakash",tag:"Music director"},
        {poster:"http://t2.gstatic.com/images?q=tbn:ANd9GcQWcn_zRdaryefC4zWbYe1r5wj14-u9a0pCEoPOZZ1CLgj3XOqhg3r3nys7LI7CRcirSJ7v",name:"Selena Gomez",tag:"Singer"},
        {poster:"https://www.hollywoodreporter.com/wp-content/uploads/2012/03/justin-bieber-pr-2012-l.jpg?w=2000&h=1126&crop=1",name:"Justin Bieber",tag:"Singer"},
        {poster:"https://yt3.googleusercontent.com/REE6-1vzKMn4zFOPQWqFfuD7tB7oLjr0awH-y99bPkjnTuGT_cD54v6l0vdij0voKZvCmhAgTA=s900-c-k-c0x00ffffff-no-rj",name:"ilaiyaraja",tag:"Music director"},
        {poster:"https://failurebeforesuccess.com/wp-content/uploads/2022/06/10b0af92-c9e6-11eb-b0cf-a00e9b339624_1623773585837.jpg",name:"pritam Charaborty",tag:"Music Director"},
        {poster:"https://m.media-amazon.com/images/M/MV5BMjg1NmNiOTItOTljZS00ZTJkLTllMTAtN2E4OGE5N2UwZmY1XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",name:"Sushan shyam",tag:"Music Director"},
    ]
 return(
    <div className="flex justify-between mx-24">
     {artistpic.map((review, index) => (
          <div key={index} className="mb-4">
            <img src={review.poster} alt={review.name} className="rounded-full w-40 h-40" />
            <h1 className='text-slate-50 text-xl'>{review.name}</h1>
            <h1 className='text-slate-400 text-xl'>{review.tag}</h1>
          </div>
        ))}
    </div>
 );
}
export default Artists;