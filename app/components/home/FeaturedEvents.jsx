import Button from "../common/Button";
import EventCard from "../common/EventCard";
import image1 from "../../../public/whatsappimages/image1.jpeg";

export default function FeaturedEvents() {
  const events = [
    {
      title: "Statehood riders meet sikkim 2025",
      date: "May 15-17, 2025",
      location: "Sikkim, India",
      image: "/whatsappimages/image11.jpeg",
      description: "Our signature event with breathtaking views and challenging roads.",
    },
  ];

  return (
    <section className="py-8 my-8 rounded-2xl bg-zinc-900">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Featured Events & Rides
        </h2>

        {/* Show one event full width, multiple events as grid */}
        <div className={`flex justify-center ${events.length === 1 ? "" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}`}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

    
      </div>
    </section>
  );
}
