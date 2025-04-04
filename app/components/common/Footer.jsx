import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import logo from "../../../public/logo/Eastern Enfielders Sikkim_Logo/logo.png";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 rounded-2xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="Eastern Enfielders Sikkim Motorcycle Club"
                width={100}
                height={100}
                className="rounded-full"
              />
              <span className="font-bold text-xl">Eastern Enfielders Sikkim MC</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting passionate riders, fostering adventure, and creating lifelong memories since 2019. 🏍️🌍
            </p>
        
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/Gallery" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/registrationview" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>Registered people</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
  <h3 className="font-bold text-lg mb-4">Location & Contact</h3>
  <div className="space-y-2 text-gray-400">
    <li className="flex items-center gap-2">
      <div className="relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.151620090932!2d88.59487329999999!3d27.277124999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5ccb0fcb08b%3A0x5ecdf68eebdd12b4!2sSaramsa%20Garden!5e0!3m2!1sen!2sin!4v1743691699523!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-56 sm:h-72 lg:h-96 border-0 rounded-md"
        ></iframe>
      </div>
    </li>
    <li className="flex items-center gap-2">
      <span>📞</span>
      <Link href="tel:+91-7798761662" className="hover:text-white">
        +91-7798761662
      </Link>
    </li>
    <li className="flex items-center gap-2">
      <span>✉️</span>
      <Link href="mailto:eemcsikkim@gmail.com" className="hover:text-white">
        eemcsikkim@gmail.com
      </Link>
    </li>
  </div>
</div>


          <div>
            <h3 className="font-bold text-lg mb-4">Latest Rides</h3>
            <p className="text-gray-400 mb-4">
              Check out our recent rides and thrilling adventures. Join us on our event! 🏍️🚀
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  • Sunset Ride to the Hills 🌄
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  • Midnight Cruise Across the City 🌙
                </Link>
              </li>
            
              <li>
                <Link href="#" className="hover:text-white">
                  • Dune Adventure 🏜️
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>2025, Eastern Enfielders Sikkim Motorcycle Club. All rights reserved.</p>
          <p className="mt-2">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <Link href="https://kiwemedia.com" className="text-white hover:text-red-500">
              Kiwemedia
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
