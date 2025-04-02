import React from "react";

import Image from "next/image";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import { ContactForm } from "../common/ContactForm";

const ContactAndLocation = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Registration form 
            Statehood riders meet Sikkim(May 15,16,17-2025)</h3>
            <ContactForm />
          </div> */}

          {/* Club Location */}
          <div className="bg-zinc-900 p-8 rounded-xl h-full">
            <h3 className="text-2xl font-bold mb-6 text-white">Club Location</h3>
            <div className="aspect-video bg-zinc-800 mb-6 rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905177.4237840321!2d88.46659555000001!3d27.598201049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1743524179728!5m2!1sen!2sin" width="600" height="450" ></iframe>
            </div>
            <div className="space-y-4 text-white">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Sikkim, Saramsa garden, India</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>eemcsikkim@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>+91-7798761662</p>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Club meetings every Thursday at 7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndLocation;
