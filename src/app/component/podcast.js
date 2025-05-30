// import React from 'react'

// export default function Podcast() {
//     return (
//         <div>
//             {/* Podcast 1 */}
//             <h1 class="text-3xl font-bold text-center mt-10 mb-5">Speaker</h1>
//             <section class="text-gray-600 body-font bg-white">
//                 <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//                     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                         <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Echoing Forgotten Voices:
//                             <br class="hidden lg:inline-block" />A Conversation with Pratishtha Mukerjee</h1>
//                             <p class="mb-8 leading-relaxed">In this engaging episode of Project Echo, we dive deep into India’s layered past with Pratishtha Mukerjee. From lesser-known stories to new interpretations of well-known events, this conversation breathes new energy into how we remember our history. Perfect for anyone seeking history that resonates beyond textbooks.</p>
                          
//                     </div>
//                     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                     <div className="w-full aspect-video max-w-3xl mb-6">
//             <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
//               <iframe
//                 src="https://player.vimeo.com/video/1080761363?h=926c0fac86&badge=0&autopause=0&player_id=0&app_id=58479"
//                 frameBorder="0"
//                 allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                 }}
//                 title="Interview with Ms. Pratishtha Mukerjee"
//               />
//             </div>
//           </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }


"use client";

import React, { useState } from 'react';

const PodcastCard = ({ name, title, description, videoSrc, tags }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title={`Podcast with ${name}`}
          />
        </div>
        <div className="p-6 text-left">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-indigo-600 mt-1">{title}</p>
          <div className="flex flex-wrap mt-2 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-base">
            {expanded ? description : `${description.substring(0, 180)}...`}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-indigo-500 hover:underline focus:outline-none"
          >
            {expanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Podcast() {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <PodcastCard
            name="Army Veteran Lt. Col. Tarun Bhasin (Founder, One World Foundation)"
            title="War & Impact: Echo Podcast"
            tags={['Military', 'Leadership', 'Peace', 'Youth Empowerment']}
            videoSrc="https://www.youtube.com/embed/CzcsaAnrH-s?si=hdVzqBt4N4e5B3Ri"
            description={`In this powerful episode of Echo Podcast, we sit down with Tarun Bhasin, the Founder of One World Foundation, to dive deep into the pressing realities of war, its global implications, and the urgent need for peace and unity.

From humanitarian crises to the role of youth and policy in shaping the future, Tarun shares insightful perspectives drawn from real-world experience and activism.`}
          />
          <PodcastCard
            name="Elias Forneris and Host Sanaya"
            title="Elias Forneris: Bridging History | PhD at Cambridge, MP Candidate 2024"
            tags={['History', 'Archaeology', 'Education', 'Civilizations']}
            videoSrc="https://www.youtube.com/embed/hOBvFtgxc_0?si=6NAfp2V__pcF0LN9"
            description={`Step back in time with us as we explore the fascinating world of history and archaeology with Mrs. Pratishtha and Host Sanaya! 🏺📜 From ancient civilizations to groundbreaking discoveries, this podcast delves into the secrets of the past, uncovering the stories that shaped humanity.

Join us on this journey through time and uncover the hidden gems of history! Don’t forget to like, comment, and subscribe for more insightful discussions.`}
          />
        </div>
      </div>
    </section>
  );
}
