import React from 'react'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Whyus from './components/home/Whyus'
import FeaturedEvents from './components/home/FeaturedEvents'
import HowToJoin from './components/home/JoiningProcess'

import SocialMediaSection from './components/home/InstagramSection'
import ContactAndLocation from './components/home/ContactAndLocation'

const page = () => {
  return (
    <>
        <Hero />
        <About />
        <Whyus />
        <FeaturedEvents />
        <HowToJoin />
        <SocialMediaSection />
        <ContactAndLocation />
    </>

  )
}

export default page