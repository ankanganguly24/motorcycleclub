"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Mail, Phone } from "lucide-react";
import logo from "../../../public/logo/Eastern Enfielders Sikkim_Logo/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-primary rounded-4xl mt-1 px-5 justify-between items-center">
        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          {["/", "/about", "/events","/Gallery", "/contact"].map((path, index) => (
            <Link 
              key={index} 
              href={path} 
              className={`text-lg font-semibold text-white hover:underline ${
                active === path ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive(path)}
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        <div >
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} className="rounded-full" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
  <Link href="mailto:eemcsikkim@gmail.com" className="text-lg flex items-center gap-2 font-semibold text-white">
    <Mail size={20} /> eemcsikkim@gmail.com
  </Link>
  <Link href="tel:7798761662" className="text-lg flex items-center gap-2 font-semibold text-white">
    <Phone size={20} /> +91-7798761662
  </Link>
</div>


        {/* Logo (Outside on the Right) */}
        
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-primary p-4 flex justify-between items-center rounded-lg">
        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Logo (Outside on the Right) */}
        <div className="absolute right-5 top-2">
          <Link href="/">
            <Image src={logo} alt="logo" width={60} height={60} className="rounded-full" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu - Opens on Click */}
      {isOpen && (
  <div className="md:hidden bg-primary p-5 rounded-lg mt-2">
    <div className="flex flex-col gap-4 text-start">
      {["/", "/about", "/events", "Gallery", "/contact"].map((path, index) => (
        <Link 
          key={index} 
          href={path} 
          className={`text-lg font-semibold text-white hover:underline ${active === path ? "border-b-2 border-white" : ""}`}
          onClick={() => {
            setActive(path);
            setIsOpen(false);
          }}
        >
          {path === "/" 
            ? "Home" 
            : path === "Gallery" 
              ? "Gallery" // Display "Gallery" as is
              : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)} 
        </Link>
      ))}
    </div>

    {/* Contact Info */}
    <div className="flex flex-col gap-4 mt-5">
      <Link href="mailto:eemcsikkim@gmail.com" className="text-lg flex items-center gap-2 font-semibold text-white">
        <Mail size={20} /> eemcsikkim@gmail.com
      </Link>
      <Link href="tel:7798761662" className="text-lg flex items-center gap-2 font-semibold text-white">
        <Phone size={20} /> +91-7798761662
      </Link>
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
