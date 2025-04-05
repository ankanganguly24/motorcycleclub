import React from "react";

import Image from "next/image";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import { ContactForm } from "../common/ContactForm";

const ContactAndLocation = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Contact Us
        </h2>
        <p>
          For membership information, upcoming rides, or any other inquiries, feel free to reach out to us. Stay connected with us through our social media platforms for the latest updates on events and rides.
        </p>
        <div className="grid grid-cols-1 gap-12">
          <div className="bg-zinc-900 p-8 rounded-xl h-full">
            <h3 className="text-2xl font-bold mb-6 text-white">Club Location</h3>
            <div className="aspect-video bg-zinc-800 mb-6 rounded-lg overflow-hidden flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.151620090932!2d88.59487329999999!3d27.277124999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5ccb0fcb08b%3A0x5ecdf68eebdd12b4!2sSaramsa%20Garden!5e0!3m2!1sen!2sin!4v1743691699523!5m2!1sen!2sin" 
                width="100%" 
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-white">
                <h4 className="text-xl font-semibold text-primary mb-4">Club Information</h4>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Sikkim, Saramsa garden, India</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>eemcsikkim@gmail.com</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>+91-7798761662</p>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p>Club meetings every Thursday at 7 PM</p>
                </div>
                <div className="flex items-start gap-4 mt-6">
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/eastern_enfielders?igsh=aG96bnZuN24yZ2hq" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:text-primary/80">
                      📸 Instagram
                    </a>
                    <a href="https://www.facebook.com/share/12EvLKvuKRk/?mibextid=wwXIfr" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary hover:text-primary/80">
                      👍 Facebook
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-white">
                <h4 className="text-xl font-semibold text-primary mb-4">Team Contacts</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Rajesh Chettri (Chief)</p>
                    <p className="text-zinc-400">Pakyong | +91-7798761662</p>
                  </div>
                  <div>
                    <p className="font-semibold">Pratap Chettri</p>
                    <p className="text-zinc-400">Pakyong | +91-7093898403</p>
                  </div>
                  <div>
                    <p className="font-semibold">Anand Biswakarma</p>
                    <p className="text-zinc-400">Gangtok | +91-9735022813</p>
                  </div>
                  <div>
                    <p className="font-semibold">Karma Bhutia</p>
                    <p className="text-zinc-400">Singtam | +91-9733341636</p>
                  </div>

                  <div>
                    <p className="font-semibold">MEENAKCHI KANTA SHARMA</p>
                    <p className="text-zinc-400">GANGTOK | +91-8116136419</p>
                  </div>

                  <div>
                    <p className="font-semibold">TSHERING SHERPA</p>
                    <p className="text-zinc-400">ASSAM LINGEY | +91-9775647919</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndLocation;
