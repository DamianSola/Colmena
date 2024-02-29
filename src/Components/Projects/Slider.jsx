'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App({slides}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {slides.map((e,i) => {
            return <SwiperSlide key={i} >

                <img src={e.imagen} />
                <span>
                  <h1>{e.nombre}</h1>
                </span>
                {/* <div style={{backgroundImage: 'url(' + e.imagen + ')'}} width="400">
              </div> */}
            </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}