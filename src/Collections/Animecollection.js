import CommentSection from '../CommentSection';
import Navbar from '../Navbar';
function Animecollection()
{
    return(
        <div className="bg-black">
        <Navbar />
        <hr></hr>
      <h1 className="text-slate-400 text-4xl ml-20 mb-10 mt-10">Naruto  </h1>
           <div className="flex mx-20">
           
            <img src="https://images-cdn.ubuy.co.in/63527edf3492081cbd062a28-hislooks-naruto-poster-anime-wall-art.jpg" alt="poster of adukalam" className="h-[500px] w-[300px] mb-10"/>
            <img src="https://m.media-amazon.com/images/I/51FBN6cRXTL._AC_UF1000,1000_QL80_.jpg" alt="poster for adukalam" className="h-[500px] w-[1200px] mb-10"/>
     
           </div>
           <CommentSection/>

           <hr></hr>
      <h1 className="text-slate-400 text-4xl ml-20 mb-10 mt-10">One Piece  </h1>
           <div className="flex mx-20">
           
            <img src="https://m.media-amazon.com/images/I/81lSS6PrOPL._AC_UF1000,1000_QL80_.jpg" alt="poster of adukalam" className="h-[500px] w-[300px] mb-10"/>
            <img src="https://cdn.europosters.eu/image/hp/60699.jpg" alt="poster for adukalam" className="h-[500px] w-[1200px] mb-10 mr-40"/>
           
           </div>
           <CommentSection />
        </div>
    );
}
export default Animecollection;