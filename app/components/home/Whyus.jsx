import { Users, Shield, Star, Wrench, ShoppingBag, AlarmClock } from "lucide-react";
import Link from "next/link";

export default function Whyus() {
  return (
    <section className="py-16 bg-zinc-900 rounded-2xl shadow-lg">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🏍️</div>
            <h3 className="text-white font-bold mb-2">Group Rides</h3>
            <p className="text-gray-300">Regular rides to explore Sikkim's breathtaking landscapes and discover hidden gems.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-white font-bold mb-2">Events & Meetups</h3>
            <p className="text-gray-300">Annual gatherings, charity events, and social rides to strengthen our community bond.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-white font-bold mb-2">Riding Workshops</h3>
            <p className="text-gray-300">Sessions focused on safety, maintenance, and enhancing riding skills.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">👕</div>
            <h3 className="text-white font-bold mb-2">Merchandise</h3>
            <p className="text-gray-300">Exclusive club apparel and accessories for members.</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-white font-bold mb-2">Group Rides & Expeditions</h3>
            <p className="text-gray-300">Regular group rides from scenic Sikkim trips to Himalayan expeditions, connecting riders and exploring beauty together.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-white font-bold mb-2">Workshops & Knowledge</h3>
            <p className="text-gray-300">Comprehensive workshops on maintenance, safety, and riding techniques for confident road adventures.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-white font-bold mb-2">Community Involvement</h3>
            <p className="text-gray-300">Organizing charity rides and safety programs to support and improve our local community.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-white font-bold mb-2">Club Meetups & Socials</h3>
            <p className="text-gray-300">Regular social gatherings to share stories and plan future adventures together.</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Our Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">⛑️</div>
            <h3 className="text-white font-bold mb-2">Safety First</h3>
            <p className="text-gray-300">Prioritizing safety in all activities to ensure we can ride again and again.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-white font-bold mb-2">Adventure</h3>
            <p className="text-gray-300">Embracing the thrill of the road and beauty of nature together.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🤍</div>
            <h3 className="text-white font-bold mb-2">Unity</h3>
            <p className="text-gray-300">More than riders—we're family. Built on respect and support.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-white font-bold mb-2">Heritage</h3>
            <p className="text-gray-300">Honoring Royal Enfield's legacy and timeless appeal.</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Our Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-white font-bold mb-2">Ride Safe, Ride Again</h3>
            <p className="text-gray-300">Ensuring safety on every ride for years of motorcycling enjoyment.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🌏</div>
            <h3 className="text-white font-bold mb-2">Unite & Celebrate</h3>
            <p className="text-gray-300">Building a community that celebrates Royal Enfield's legacy and rider bonds.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-white font-bold mb-2">Explore Sikkim</h3>
            <p className="text-gray-300">Discovering the beauty of Sikkim through responsible group riding.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl hover:bg-zinc-700 transition-all">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-white font-bold mb-2">Inclusive Community</h3>
            <p className="text-gray-300">Creating a space where every rider is valued and respected.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/contact">
            <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold">
              Become a Member Today!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
