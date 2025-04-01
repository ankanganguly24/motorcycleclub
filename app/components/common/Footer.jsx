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
                alt="Eastern Eagle MC Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
              <span className="font-bold text-xl">Eastern Enfielders Sikkim MC</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting passionate riders, fostering adventure, and creating lifelong memories since 2005. 🏍️🌍
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
                </svg>
                <span className="sr-only">Custom Social 1</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
                </svg>
                <span className="sr-only">Custom Social 2</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div >
            <h3 className="font-bold text-lg mb-4 ">Location & Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <div className="w-full h-40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905177.4237840321!2d88.46659555000001!3d27.598201049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1743524179728!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
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
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Latest Rides</h3>
            <p className="text-gray-400 mb-4">
              Check out our recent rides and thrilling adventures. Join us on our next journey! 🏍️🚀
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
          <p>&copy; {new Date().getFullYear()} Eastern Eagle Motorcycle Club. All rights reserved.</p>
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
