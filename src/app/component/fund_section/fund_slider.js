'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Slide() {
  const slides = [
    { src: '/images/ndf.png' },
    { src: '/images/s1.png' },
    { src: '/images/s2.png' },
  ];

  return (
    <div className="w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center h-full"
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

