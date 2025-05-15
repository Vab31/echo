import React from 'react'

export default function Nav() {
  return (
<div>
  <header class="text-black body-font bg-white">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between p-5">
    
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/images/logo.png" alt="logo" class="h-14 w-auto object-contain" />
        <span class="ml-3 text-2xl text-black font-bold">Project Echo</span>
      </a>

      
      <nav class="flex flex-wrap items-center text-base justify-center md:justify-end space-x-5">
        <a class="hover:text-gray-900" href="/">Home</a>
        <a class="hover:text-gray-900" href="/fundraising">FundRaising</a>
        <a class="hover:text-gray-900" href="/podcasts">Podcast</a>
        <a class="hover:text-gray-900" href="#about">About</a>
      </nav>
    </div>
  </header>
</div>


  )
}
