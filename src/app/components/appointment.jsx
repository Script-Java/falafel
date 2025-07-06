import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaClock, FaPhoneAlt, FaStar } from "react-icons/fa";
import appointmentImg from "../assets/gallery/a.jpg";

export default function Appointment() {
  return (
    <section className="relative bg-gradient-to-b from-white to-pink-50 py-24 px-6 overflow-hidden">
      {/* Glowing Backgrounds */}


      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image with overlay card */}
        <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src={appointmentImg}
            alt="Braiding stylist in action"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-md p-5 rounded-xl shadow-md max-w-sm animate-fade-in-up">
            <h4 className="text-lg font-bold mb-2 flex items-center">
              <FaStar className="text-pink-700 mr-2" /> Top-Rated Stylists
            </h4>
            <p className="text-sm text-gray-700">
              Our braiders are skilled artists known for clean parts, flawless finishes, and luxury-level service in every session.
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div className="animate-fade-in-up delay-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Book Your Braiding Appointment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            From knotless styles to creative twists, our salon delivers premium care in a calming space. Reserve your session and leave with confidence and style.
          </p>

          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-3 text-primary">
              <FaClock className="text-xl" /> <span>Open Monday - Saturday: 8am - 7pm</span>
            </li>
            <li className="flex items-center gap-3 text-primary">
              <FaPhoneAlt className="text-xl" /> <span>Call or Text: (214) 682-4270</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link href="https://salomeamama.setmore.com/" className="btn btn-primary px-6 py-3 text-lg">
              <FaCalendarCheck className="mr-2" /> Book Now
            </Link>
            <Link href="/about" className="btn btn-outline px-6 py-3 text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}