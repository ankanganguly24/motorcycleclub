import React from 'react'
import About from '../components/home/About'
import HowToJoin from '../components/home/JoiningProcess'
import SocialMediaSection, { InstagramFeed } from '../components/home/InstagramSection'

const AboutUS = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <About />
      <section className="my-12 max-w-4xl mx-auto bg-accent rounded-2xl p-8 text-white bg-zinc-900">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          Our Members 🏍️ 
        </h2>
        <p className="mb-6 opacity-90">
          We are a passionate community of riders united by the love for adventure. Our club consists of over 100 members, each bringing their own unique story to the group. 🌟
        </p>
        <ul className="space-y-4 divide-y divide-white/20">
          <li className="pt-4 flex items-start gap-3">
            <span className="text-2xl">👑</span>
            <div>
              <span className="font-semibold block">Rajesh Chettri</span>
              <p className="opacity-90">A passionate biker and the chief.</p>
            </div>
          </li>
          <li className="pt-4 flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <span className="font-semibold block">Pratap Chettri</span>
              <p className="opacity-90">Our long-distance champion.</p>
            </div>
          </li>
          <li className="pt-4 flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <span className="font-semibold block">Anand Biswakarma</span>
              <p className="opacity-90">The master route planner.</p>
            </div>
          </li>
        </ul>
      </section>
      
      <section className="my-12 p-4 rounded-2xl max-w-4xl mx-auto bg-zinc-900">
        <h2 className="text-2xl  md:text-3xl font-bold mb-6 text-primary flex items-center gap-2">
          Epic Ride Stories 🏔️
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-accent text-white p-8 rounded-2xl">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
              <span>🌅</span> Sunset Ride to the Hills
            </h3>
            <p className="opacity-90">
              Picture this: 15 riders, winding mountain roads, and the most spectacular sunset you've ever seen. Our three-day expedition through the hills became legendary when we camped under the stars and shared stories around the campfire. The morning fog and sunrise made every moment worth remembering.
            </p>
          </div>
          <div className="bg-accent text-white p-8 rounded-2xl">
            <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
              <span>🌃</span> Midnight City Lights Run
            </h3>
            <p className="opacity-90">
              What started as a simple night ride turned into an unforgettable 6-hour urban adventure. 30 bikes cruising through the neon-lit streets, the sound of engines echoing off skyscrapers. We ended up at a 24-hour diner, sharing laughs and planning our next midnight escape.
            </p>
          </div>
          
        </div>
      </section>

      <div className='my-5'>
      <HowToJoin />
      <div className='px-5 py-10'>
      <SocialMediaSection/>

      </div>
      </div>
    </div>
  )
}

export default AboutUS
