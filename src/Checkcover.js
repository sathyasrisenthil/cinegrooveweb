import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Checkcover.css';

// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

export default function Checkcover()
{
    return (
        <div className='container'>
          <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           loop={true}
           slidesPerView={'auto'} 
           coverflowEffect={{
             rotate: 0,
             stretch: 0,
             depth: 100,
             modifier: 2.5,
           }}
           autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
           pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination,Autoplay]}
            className="swiper_container"
          >
            <SwiperSlide className='ssdiv'>
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/rajinikanth_lal_salaam_poster-three_four.jpg?VersionId=UjaQxiGnLOAj_70_qEKEMlKc5oaQ1nZq" className='ssimg'/>
            </SwiperSlide >
            <SwiperSlide className='ssdiv'>
              <img src="https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" className='ssimg' />
            </SwiperSlide>
            <SwiperSlide className='ssdiv'>
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MiwgRmViIDIwMjQ%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00384524-qsfzuywwjq-portrait.jpg" className='ssimg'/>
            </SwiperSlide>
            <SwiperSlide className='ssdiv'>
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-NiwgU2VwIDIwMjQ%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00341295-ejxuxhmwpw-portrait.jpg" className='ssimg'/>
            </SwiperSlide>
            <SwiperSlide className='ssdiv'>
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTQsIEp1biAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00384010-vwlvuzrqwj-portrait.jpg" className='ssimg' />
            </SwiperSlide>
            <SwiperSlide className='ssdiv'>
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjAyNA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383509-ejamxjnwab-portrait.jpg" className='ssimg' />
            </SwiperSlide>
            <SwiperSlide className='ssdiv'>
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-OSwgRmViIDIwMjQ%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358328-hugaqedctr-portrait.jpg" className='ssimg' />
            </SwiperSlide>
            <SwiperSlide className='ssdiv'>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Kanguva_poster.jpg/220px-Kanguva_poster.jpg" at="" className='ssimg'/>
            </SwiperSlide>
            <div className='slider-controler'>
                <div className='swiper-pagination'>

                </div>
            </div>
          </Swiper>
        </div>
      );
}