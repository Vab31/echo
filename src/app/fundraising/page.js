import React from 'react'
import Heromission from '../component/fund_section/heromission'
import Nav  from '../component/nav'
import Footer from '../component/footer'
import How from '../component/fund_section/how'
import Slide from '../component/fund_section/fund_slider'
import SupportHeroSection from '../component/fund_section/donate'



export default function Page() {
  return (
    <div>
        <Nav/>
        <Slide/>
        <SupportHeroSection/>
        <Heromission/>
        <How/>
        <Footer/>
    </div>
  )
}
