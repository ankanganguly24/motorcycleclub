import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export default function EventCard({ title, date, location, image, description }) {
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden shadow-md max-w-3xl mx-auto">
      {/* Image */}
      <div className="relative h-80 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-400 mt-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mt-4">{description}</p>

        {/* Button */}
        <div className="mt-6">
          <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold w-full sm:w-auto">
            Join Event
          </button>
        </div>
      </div>
    </div>
  );
}
