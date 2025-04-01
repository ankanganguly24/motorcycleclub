import React from 'react'
import FeaturedEvents from '../components/home/FeaturedEvents'
import Button from '../components/common/Button'
import { ContactForm } from '../components/common/ContactForm'

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">

      <FeaturedEvents />

      {/* Hero Section */}
      <section className="bg-zinc-900 text-white rounded-2xl p-8 my-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
          Join Our Next Adventure 🏍️
        </h1>
        <p className="text-lg opacity-90 max-w-2xl">
          From thrilling mountain rides to peaceful coastal cruises, we've got something for every rider. Register now and be part of our next epic journey.
        </p>
      </section>

      {/* Registration Form */}
      <section className="my-12 max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          Quick Registration 📝
        </h2>
        <ContactForm />
      </section>

      {/* Upcoming Events */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-zinc-900 p-6 rounded-xl text-white">
          <div className="text-accent text-5xl font-bold mb-4">1</div>
          <h3 className="font-semibold text-xl mb-2">Thrill</h3>
          <p className="opacity-75 mb-4">A challenging route through scenic mountain passes. Perfect for experienced riders.</p>
        
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl text-white">
          <div className="text-accent text-5xl font-bold mb-4">2</div>
          <h3 className="font-semibold text-xl mb-2">Experience</h3>
          <p className="opacity-75 mb-4">Relaxing ride along the coastline with stunning views of nature.</p>
         
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl text-white">
          <div className="text-accent text-5xl font-bold mb-4">3</div>
          <h3 className="font-semibold text-xl mb-2">Exciting</h3>
          <p className="opacity-75 mb-4">Experience the legendary things God offers to us human beings.</p>
        
        </div>
      </section>

    </div>
  )
}

export default EventsPage