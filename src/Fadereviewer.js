import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
const slides=[
    {
        poster:"https://gumlet.assettype.com/filmcompanion%2F2023-04%2Fd260afd8-034c-4a3e-b197-bfb117cc9d9c%2FVetriramaan_lead_image.jpg?auto=format%2Ccompress&fit=max&w=1200",
        name:'collection of vetrimaran',
        content:"Films of award winning director who's giving best of best. ",
        link:"one.html"
    },
    {
        poster:"https://www.90daykorean.com/wp-content/uploads/2021/05/Kdrama-2.png",
        name:'K dramas',
        content:'The Drama with fashion, style , culture and more . Explore here !.',
        link:"two.html"
    },
    {
        poster:"https://c.saavncdn.com/editorial/Let_sPlaySelenaGomez_20231018052134.jpg",
        name:'Favourites of Selena Gomez',
        content:'Definitly takes your heart with beautiful lines and voice . Check some here !',
        link:"three.html"
    },
];
const divstyle={
    display:"flex",
    alignItems:"center"
    
};
const contentstyle={
    flexDirection: 'column'
}
export const Fadereviewer = () => {
    const customArrows = (
        <div style={{ display: 'none' }}>
          {/* Hide the default navigation arrows */}
          <span>&#60;</span>
          <span>&#62;</span>
        </div>
      );
    
  return (
    <div className='fade-container'>
        <Fade prevArrow={customArrows} nextArrow={customArrows}>
    {slides.map((row,index)=>(
        <div key={index}>
            <div style={divstyle}>
                <img src={row.poster} alt={row.name} style={{width:'600px',height:'300px'}}></img>
                <div style={contentstyle}>
                <a href={row.link} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500'>{row.name}</a>
                <p>{row.content}</p>
                </div>
            </div>
        </div>
    ))}
        </Fade>
      
    </div> 
    );
}
