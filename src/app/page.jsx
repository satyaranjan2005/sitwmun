import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutLiteraryClub from './components/AboutLiteraryClub'
import Committees from './components/Committees'
import Countries from './components/Countries'
import EventTimeline from './components/EventTimeline'
import JudgesOfficials from './components/JudgesOfficials'
import AgendaDiscussion from './components/AgendaDiscussion'
import Organisers from './components/Organisers'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='bg-[#CAE4FB] overflow-x-hidden'>
      <Navbar />
      <Hero />
      <AboutLiteraryClub />
      <Committees />
      <Countries />
      <EventTimeline />
      <JudgesOfficials />
      <AgendaDiscussion />
      <Organisers />
      <Footer />
    </div>
  )
}

export default page
