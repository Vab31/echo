'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Slider() {
  const slides = [
    { src: '/images/slide1.jpeg', text: 'Welcome to Project Echo' },
    { src: '/images/slide4.png', text: 'Echoing the Past with New Energy' },
    { src: '/images/slide5.png', text: 'Conversations That Bring History to Life' }
    
  ];

  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative">
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
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                  {slide.text}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
