'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function App({slides}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(slides[0].imagen)

  // useEffect(() => {
  //   $('#imagenPrincipal').attr('src', rutaImagen);
  // },[])

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {slides.map((e,i) => {
            return <SwiperSlide key={i} >
              <Link href={`/Project/${e.nombre}`} >
                <img src={e.imagen}/>
              </Link>
                <span>
                  <h1>{e.nombre}</h1>
                </span>
            </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}