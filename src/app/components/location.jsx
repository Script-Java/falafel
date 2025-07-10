import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';

export default function LocationSection() {
  // --- DYNAMIC DATA ---
  // In a real app, you'd fetch this from a CMS or API.
  const locationData = {
    isOpen: true, // Change this to `false` to see the "CLOSED" state
    date: "Wednesday, July 9th",
    address: "7701 Stacy Rd, McKinney, TX",
    hours: "11:00 AM - 8:00 PM",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=7701+Stacy+Rd+McKinney+TX",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.523851528657!2d-96.7247223848098!3d33.1221189808698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c176e03820a4d%3A0xe21289294452f15!2s7701%20Stacy%20Rd%2C%20McKinney%2C%20TX%2075070!5e0!3m2!1sen!2sus!4v1625884878432!5m2!1sen!2sus",
  };

  return (
    // Use daisyUI theme colors for the section background
    <section className="bg-base-200 py-20 sm:py-28">
      <div className="container mx-auto px-6 flex flex-col items-center">

        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-base-content">
                Rolling Through Town
            </h2>
            <p className="text-lg text-base-content/70 mt-4 max-w-2xl">
                Fresh falafel is closer than you think. Find our spot for the day and come grab a bite!
            </p>
        </div>

        {/* Use the daisyUI `card` component for the Polaroid effect */}
        <div className="card bg-base-100 shadow-xl max-w-4xl w-full transform -rotate-2 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
          
          {/* Use the daisyUI `badge` component for the status stamp */}
          {locationData.isOpen ? (
              <div className="badge badge-success badge-lg gap-2 absolute -top-4 -right-4 z-10 transform rotate-6 p-4 font-bold">
                Open Now!
              </div>
            ) : (
              <div className="badge badge-error badge-lg gap-2 absolute -top-4 -right-4 z-10 transform rotate-6 p-4 font-bold">
                Closed
              </div>
          )}

          {/* The `figure` element is used for media in a card */}
          <figure className="h-80 lg:h-96">
            <iframe
              src={locationData.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>

          {/* The `card-body` provides consistent padding for the content */}
          <div className="card-body">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left side: Location details */}
              <div className="font-serif italic text-base-content/80 space-y-3 text-lg">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-primary"/>
                  <span>{locationData.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary"/>
                  <a href={locationData.googleMapsLink} target="_blank" rel="noopener noreferrer" className="link link-hover">
                    {locationData.address}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-primary"/>
                  <span>{locationData.hours}</span>
                </div>
              </div>

              {/* Right side: Directions Button */}
              <div className="card-actions justify-center md:justify-end">
                <a 
                  href={locationData.googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}