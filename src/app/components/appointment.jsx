import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaClock, FaPhoneAlt, FaStar } from "react-icons/fa";
import appointmentImg from "../assets/gallery/1.jpg"; // Adjust the path as necessary

export default function Appointment() {
  return (
    <section className="relative bg-base-100 py-20 px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-2xl"></div>

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image with card overlay */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={appointmentImg}
            alt="Braiding stylist in action"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-md p-4 rounded-md shadow-md max-w-sm">
            <h4 className="text-lg font-bold mb-2 flex items-center">
              <FaStar className="text-pink-700 mr-2" /> Top-Rated Stylists
            </h4>
            <p className="text-sm text-gray-700">
              Our braiders are skilled artists known for delivering clean parts, flawless styles, and a luxury experience.
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Book Your Braiding Appointment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you need knotless braids, twists, or a custom style, we offer professional, timely service in a relaxing environment. Secure your spot today.
          </p>

          <ul className="mb-8 space-y-3">
            <li className="flex items-center gap-3 text-primary">
              <FaClock className="text-xl" /> <span>Open Monday - Saturday: 9am - 6pm</span>
            </li>
            <li className="flex items-center gap-3 text-primary">
              <FaPhoneAlt className="text-xl" /> <span>Call or Text: (123) 456-7890</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link href="/booking" className="btn btn-primary">
              <FaCalendarCheck /> Book Now
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}