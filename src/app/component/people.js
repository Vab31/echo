'use client';
import { motion } from 'framer-motion';

const images = [
  '/images/slide1.jpeg',
  
  '/images/slide3.jpeg',
  '/images/slide4.png',
  '/images/slide5.png',
];

export default function People() {
  return (
    <div className='bg-white'>
        <h1 className="text-center text-3xl text-black font-bold mb-4">Meet Our Guests</h1>
        <p className="text-center text-gray-600 mb-8">
            Our Guests are the heart of Project Echo, bringing history to life with their expertise and passion.
        </p>
    <div className="relative w-full overflow-hidden bg-white rounded  h-48">
      <motion.div
        className="flex gap-8 absolute"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Professor ${index + 1}`}
            className="h-36 w-auto object-contain rounded border-2 border-gray-300 shadow-lg"
          />
        ))}
      </motion.div>
    </div></div>
  );
}

