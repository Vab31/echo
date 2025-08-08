
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
            title="War & Impact: The Project Echo Podcast"
            tags={['Military', 'Leadership', 'Peace', 'Youth Empowerment']}
            videoSrc="https://www.youtube.com/embed/CzcsaAnrH-s?si=hdVzqBt4N4e5B3Ri"
            description={`In this powerful episode of The Project Echo Podcast, we sit down with Tarun Bhasin, the Founder of One World Foundation, to dive deep into the pressing realities of war, its global implications, and the urgent need for peace and unity.

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

          <PodcastCard
  name="Veteran Pawan‑jit Ahluwalia (Chairperson, Premier Consultancy & Investigation Pvt. Ltd.)"
  title="Discipline, Defence & Destiny: The Project Echo Podcast"
  tags={['Army Veteran', 'Security Leadership', 'Entrepreneurship', 'Risk Management']}
  videoSrc="https://www.youtube.com/embed/PHn9sEOrG6Y"
  description={`In this insightful episode of The Project Echo Podcast, we are joined by Veteran Pawan‑jit Ahluwalia—former army officer and Chairperson of Premier Consultancy & Investigation Pvt. Ltd.—as he reflects on his remarkable journey from the armed forces to leading one of India’s top private security networks.

With decades of experience in defence, investigation, and leadership, Mr. Ahluwalia shares timeless lessons on discipline, resilience, and building trust in high-stakes environments. This episode explores how military values shape strong institutions and empower purpose-driven entrepreneurship.

Tune in for a masterclass in courage, strategy, and service.`}
/>

<PodcastCard
  name="Major Reenu Ohlan (Retd.) – Army Veteran & Senior Leader in Administration"
  title="Beyond the Uniform: The Project Echo Podcast"
  tags={['Army Veteran', 'Women in Leadership', 'Resilience', 'Service']}
  videoSrc="https://www.youtube.com/embed/XiYvdKv4_ho"
  description={`In this heartfelt episode of The Project Echo Podcast, I (Sanaya) sit down with Major Reenu Ohlan (Retd.), a decorated Indian Army veteran and now a senior leader in infrastructure and facilities management. From her 8 years of distinguished service in the armed forces to her civilian leadership roles at institutions like NABARD, The Lawrence School Sanawar, and DMI Finance—Major Reenu’s journey is one of courage, resilience, and service.

We talk about her experience as a woman officer in the Army. Her words offer not only inspiration but also a raw, powerful look into life beyond the uniform.
A moving tribute to service, sacrifice, and strength—don’t miss this conversation.`}
/>



<PodcastCard
  name="Brigadier Satish Sawhney (Retd.) – Indian Army Veteran"
  title="The War Within: The Project Echo Podcast"
  tags={['Army Veteran', 'PTSD', 'Leadership', 'Mental Health']}
  videoSrc="https://www.youtube.com/embed/3M6Gi6vcci0"
  description={`In this emotional and eye-opening episode of The Project Echo Podcast, host Sanaya is joined by Brigadier Satish Sawhney (Retd.), a decorated Indian Army veteran with over 34 years of service, including commanding roles in the Kargil and Northeast sectors.

Brig. Sawhney shares his raw and heartfelt perspective on the unseen scars of war—addressing PTSD, emotional trauma, and the toll that conflict takes on a soldier’s mind and body. From leadership under fire to healing in silence, this episode goes beyond medals and uniforms to explore the lasting impact of war on the human spirit.

A profound conversation about loss, courage, and the battle that continues long after the battlefield fades.`}
/>

        </div>
      </div>
    </section>
  );
}
