import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Posterslide.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { EffectFlip, Pagination,Autoplay } from 'swiper/modules';
function PosterSlide()
{
    const slideimg=[
        {
            poster:'https://w0.peakpx.com/wallpaper/739/856/HD-wallpaper-vanguard-2020-jackie-chan-yang-yang-action-movies-movies.jpg',
            name:''
        },
        {
            poster:'https://c4.wallpaperflare.com/wallpaper/59/92/1004/1lll-comedy-drama-film-wallpaper-preview.jpg',
            name:''
        },
        {
            poster:'https://www.shutterstock.com/image-illustration/3d-render-noir-illustration-toon-600nw-2228762673.jpg',
            name:''
        },
        {
            poster:'https://wallpapercosmos.com/w/full/0/d/f/24886-1920x1080-desktop-1080p-jujutsu-kaisen-0-the-movie-wallpaper-photo.jpg',
            name:''
        }
    ]
    return(
      <div >
        <div className='flex mx-36'>
         
        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[EffectFlip, Pagination,Autoplay]}
        className="flipswiper"
      >
       
        <SwiperSlide className='flipss'>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/869d6274284099.5c2a29444e565.png" className='flipssimg'/>
        </SwiperSlide>
       
        
        <SwiperSlide className='flipss'>
          <img src="https://wallpapercave.com/wp/wp6568611.jpg" className='flipssimg'/>
        </SwiperSlide>
        
        <SwiperSlide className='flipss'>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ffe165173771815.64f16fa580274.jpg" className='flipssimg'/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[EffectFlip, Pagination,Autoplay]}
        className="flipswiper"
      >
       
        <SwiperSlide className='flipss'>
          <img src="https://www.tallengestore.com/cdn/shop/products/3_Idiots_41fc064d-da6d-4a45-9652-f0e4105adf6a.jpg?v=1582192776" className='flipssimg'/>
        </SwiperSlide>
       
        
        <SwiperSlide className='flipss'>
          <img src="https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_.jpg" className='flipssimg'/>
        </SwiperSlide>
        
        <SwiperSlide className='flipss'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIPS8j053GqirQk7MdVTldNWvTQCK7zbkHYrfcldmmQ&s" className='flipssimg'/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[EffectFlip, Pagination,Autoplay]}
        className="flipswiper"
      >
       
        <SwiperSlide className='flipss'>
          <img src="https://lh5.googleusercontent.com/proxy/xjyb3WWbX8PKuoN6vPud6MerEQGmCikWd45d36iJTNS_juVmiit4JZ_okgH6uQv2IIa_HjgyH0O94s-fVXYOT-2fnxA-XZspQD6_YrwLLkXmPLsaWQ" className='flipssimg'/>
        </SwiperSlide>
       
        
        <SwiperSlide className='flipss'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcsWZOECHIaLXx8f6R0jtLAVc4f4cYQOqZOfY_hpU9A&s" className='flipssimg'/>
        </SwiperSlide>
        <SwiperSlide className='flipss'>
          <img src="https://upload.wikimedia.org/wikipedia/en/0/01/Visaranai_film_release_poster.jpg" className='flipssimg'/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[EffectFlip, Pagination,Autoplay]}
        className="flipswiper"
      >
       
        <SwiperSlide className='flipss'>
          <img src="https://i.pinimg.com/originals/a5/38/87/a538872f7a0859bed018b787543c4fc2.jpg" className='flipssimg'/>
        </SwiperSlide>
       
        
        <SwiperSlide className='flipss'>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/OrphanFirstKillPoster.jpg" className='flipssimg'/>
        </SwiperSlide>
        <SwiperSlide className='flipss'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuLCpOVXSGHoO_2zBmAf440VGUncMFlMynALhToZj8g&s" className='flipssimg'/>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className='flex mx-[240px] justify-between mb-10'>
            <h1 className='text-slate-400 text-2xl'>Action</h1>
            <h1 className='text-slate-400 text-2xl'>Comedy</h1>
            <h1 className='text-slate-400 text-2xl'>Thriller</h1>
            <h1 className='text-slate-400 text-2xl'>Horror</h1>
          </div>
        
        </div>
    );
}
export default PosterSlide;