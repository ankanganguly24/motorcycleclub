import React from "react";
import Image from "next/image";
import Button from "../common/Button";

import image1 from "../../../public/whatsappimages/image1.jpeg";
import image2 from "../../../public/whatsappimages/image2.jpeg";
import image3 from "../../../public/whatsappimages/image3.jpeg";
import Carousel from "../common/Caraousel";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-20 rounded-2xl md:my-6 my-4 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Eastern Enfielders Sikkim MC</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2017, Eastern Enfielders Sikkim MC has grown from a small group of passionate riders to one
              of the most respected motorcycle clubs in the region. We pride ourselves on our commitment to safety,
              community, and the pure joy of riding.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8 md:bg-wtertiary md:p-2 rounded-lg shadow-lg">
              <div className="text-center ">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-400">Active Members</p>
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
