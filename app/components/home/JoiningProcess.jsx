import { ArrowDown, UserPlus, Bike, BadgeCheck } from "lucide-react";
import Button from "../common/Button";
import Image from "next/image";

export default function HowToJoin() {
  return (
    <section className="bg-zinc-900 text-white py-12 px-6 md:px-12 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
        How to Join ?
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        {/* Left Side: Icons with Arrows */}
        <div className="flex flex-col items-center space-y-6 bg-tertiary p-6 rounded-lg shadow-lg md:w-1/3 mb-10">
          <div className="flex flex-col items-center">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <UserPlus size={32} className="text-white" />
            </div>
            <p className="text-lg font-semibold mt-2">Find your event</p>
          </div>
          <ArrowDown size={32} className="text-primary" />
          <div className="flex flex-col items-center">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <Bike size={32} className="text-white" />
            </div>
            <p className="text-lg font-semibold mt-2">Submit the form</p>
          </div>
          <ArrowDown size={32} className="text-primary" />
          <div className="flex flex-col items-center">
            <div className="bg-primary p-4 rounded-full shadow-lg">
              <BadgeCheck size={32} className="text-white" />
            </div>
            <p className="text-lg font-semibold mt-2">Official member</p>
          </div>
        </div>
        
        {/* Right Side: Title, Text, and Button */}
        <div className="max-w-md text-center md:text-left md:ml-12">
            <Image src="/whatsappimages/image2.jpeg" alt="Join Us" width={400} height={400} className="rounded-lg mb-6" />
          <h3 className="text-2xl font-bold text-primary">Join the Adventure</h3>
          <p className="text-gray-400 mt-4">
            Sign up, participate in our orientation ride, and become an official member
            to enjoy exclusive benefits and unforgettable journeys.
          </p>
          <Button className="mt-6 bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:bg-primary-dark">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}