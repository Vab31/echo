import React from 'react'

export default function Us() {
  return (
    <div id='about'>
      <section class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <b>Vision</b>
            <i>"To build a platform where the voices of India’s soldiers and their families are heard, honored, and supported—through remembrance, education, and action."</i>
            <br />
            <b>Mission </b>
            <i>"Supporting the families of our Indian Army heroes through 3 Ps: Patronage, Partnership, and Promotion."</i>
            <br />
            <p class="mb-8 leading-relaxed"><span className='text-3xl font-bold'>Project Echo </span>is an organization working towards bringing together army personnel and curious minds to explore India’s rich past in a way that feels alive, personal, and deeply relevant. From freedom movements to wars, we aim to amplify the voices and help those who have fought the battles. Through heartfelt dialogue, critical reflection, and boundless curiosity, Project Echo is here to make history feel like more than facts and timelines it’s here to help us see that history isn’t just behind us. It’s within us. The three pillars of Project Echo are Patronage through crowdfunding, Promotion through interviews, and Partnership with NGOs with a shared vision.</p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://www.nct.ac.in/assets/images/history/2.png" />
          </div>
        </div>
      </section>
    </div>
  )
}
