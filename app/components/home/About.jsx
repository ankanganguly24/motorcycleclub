import React from "react";
import Image from "next/image";
import Button from "../common/Button";

import image1 from "../../../public/whatsappimages/image1.jpeg";
import image2 from "../../../public/whatsappimages/image11.jpeg";
import image3 from "../../../public/whatsappimages/image12.jpeg";

import Carousel from "../common/Caraousel";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20 rounded-2xl md:my-6 my-4 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Eastern Enfielders Sikkim Motorcycle Club</h2>
            <p className="text-gray-300 mb-6">
            Eastern Enfielders Motorcycle Club, Sikkim, founded in 2019 by a group of dedicated motorcycle enthusiasts, our club is dedicated to the love of Royal Enfield motorcycles and the thrill of riding through the beautiful and rugged terrains of Sikkim and beyond. With a deep-rooted belief in riding safely and embracing the spirit of adventure, our motto—“Ride Safe, Ride Again”—reflects our commitment to enjoying the freedom of the open road while ensuring that we ride responsibly and return safely to ride again.
From conquering mountain roads to exploring new paths, the Eastern Enfielders is a family of riders who share the same passion, thrill, and respect for the road. We are always eager to welcome new riders who want to experience the joy of motorcycling while building lifelong friendships along the way.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8 md:bg-wtertiary md:p-2 rounded-lg shadow-lg">
              <div className="text-center ">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15</p>
                <p className="text-sm text-gray-400">Core Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">120+</p>
                <p className="text-sm text-gray-400">Successful Rides</p>
              </div>
            </div>
            <Link href="/about">
            <Button variant="primary" className="mt-4">
              Learn More
            </Button>
            </Link>
          </div>

          {/* Carousel Component */}
          <div className="md:w-1/2">
            <Carousel images={[image1, image2, image3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
