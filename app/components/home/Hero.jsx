import React from "react";
import Image from "next/image";
import heroImage from "../../../public/whatsappimages/heroImage.jpeg";
import Button from "../common/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <Image 
          src={heroImage} 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Ride Safe, Ride Again</h1>
        <p>Connecting passionate riders, fostering adventure, and creating lifelong memories.</p>
        <Link href="/events">
        <Button variant="primary"  className="mt-4">
            Join our event
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
