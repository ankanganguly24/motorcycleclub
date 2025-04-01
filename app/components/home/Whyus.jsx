import { Users, Shield, Star, Wrench, ShoppingBag, AlarmClock } from "lucide-react";
import BenefitCard from "../common/BenefitsCard";
import Link from "next/link";

export default function Whyus() {
  return (
    <section className="py-16 bg-zinc-900 rounded-2xl shadow-lg">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Why Join EEMC?
        </h2>

        {/* Grid for desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard icon={<Users className="h-10 w-10 text-primary" />} title="Exclusive Group Rides" description="Join our weekly and monthly organized rides to scenic destinations with fellow enthusiasts." />
          <BenefitCard icon={<Shield className="h-10 w-10 text-primary" />} title="Safety Training & Workshops" description="Access professional training sessions to enhance your riding skills and safety knowledge." />
          <BenefitCard icon={<Star className="h-10 w-10 text-primary" />} title="Community & Charity Rides" description="Participate in our charity events and give back to the community while doing what you love." />
          <BenefitCard icon={<Wrench className="h-10 w-10 text-primary" />} title="Motorcycle Maintenance" description="Learn maintenance tips and get access to our network of trusted mechanics and customization experts." />
          <BenefitCard icon={<ShoppingBag className="h-10 w-10 text-primary" />} title="Exclusive Club Merchandise" description="Get access to high-quality EEMC branded gear that's only available to members." />
          <BenefitCard icon={<AlarmClock className="h-10 w-10 text-primary" />} title="Lifelong Friendships" description="Build lasting relationships with people who share your passion for motorcycles and adventure." />
        </div>

        {/* Centered Button */}
        <div className="text-center mt-10">
        <Link href="/contact">
          <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Become a Member Today!
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
}
