import React from 'react'
import Heromission from '../component/fund_section/heromission'
import Nav  from '../component/nav'
import Footer from '../component/footer'
import How from '../component/fund_section/how'
import Slide from '../component/fund_section/fund_slider'


export default function Page() {
  return (
    <div>
        <Nav/>
        <Slide/>
        <Heromission/>
        <How/>
        <Footer/>
    </div>
  )
}
