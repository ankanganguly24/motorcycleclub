"use client";
import React from 'react';
import Image from 'next/image';

const galleryItems = [
  { id: 1, title: "Riders Meet 2023", description: "Annual gathering of motorcycle enthusiasts" },
  { id: 2, title: "Mountain Expedition", description: "Conquering the Himalayan trails" },
  { id: 4, title: "Night Riders", description: "Urban adventure after dark" },
  { id: 5, title: "Track Day", description: "Speed and precision" },
  { id: 6, title: "Breakfast Ride", description: "Morning motivation" },
  { id: 7, title: "Cross Country", description: "Border to border journey" },
  { id: 8, title: "Safety Workshop", description: "Learning and growing together" },
  { id: 9, title: "Custom Show", description: "Showcasing unique builds" },
  { id: 10, title: "Beach Ride", description: "Coastal adventure" },
  { id: 11, title: "Charity Ride", description: "Riding for a cause" },
  { id: 12, title: "Off-Road Day", description: "Dirt and adventure" },
  { id: 13, title: "Club Anniversary", description: "Celebrating brotherhood" },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            className={`relative group overflow-hidden rounded-xl 
              ${index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 3 || index === 10 ? 'md:col-span-2' : ''}
              ${index === 10  ? 'md:row-span-2' : ''} 
              transition-all duration-300 hover:scale-[1.02]`}
          >
            <Image
              src={`/whatsappimages/image${item.id}.jpeg`}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;