import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaCalendarCheck } from "react-icons/fa";

// --- MOCK DATA FOR UPCOMING EVENTS ---
// In a real app, you would fetch this data from a CMS or API.
const upcomingEvents = [
  {
    id: 1,
    month: "JUL",
    day: "12",
    dayOfWeek: "Saturday",
    title: "McKinney Farmers Market",
    location: "Chestnut Square Historic Park, McKinney, TX",
    time: "9:00 AM - 1:00 PM",
    description: "Catch us at our usual spot for your weekend falafel fix! We'll have the full menu ready for the market crowd.",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Chestnut+Square+Historic+Park+McKinney+TX",
  },
  {
    id: 2,
    month: "JUL",
    day: "18",
    dayOfWeek: "Friday",
    title: "Food Truck Friday at TUPPS Brewery",
    location: "TUPPS Brewery, McKinney, TX",
    time: "5:00 PM - 10:00 PM",
    description: "Great beer and great food. We're pairing our sizzling shawarma with TUPPS' best brews. The perfect start to your weekend!",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=TUPPS+Brewery+McKinney+TX",
  },
  {
    id: 3,
    month: "JUL",
    day: "26",
    dayOfWeek: "Saturday",
    title: "Hub 121 Food Truck Rally",
    location: "Hub 121, McKinney, TX",
    time: "11:00 AM - 9:00 PM",
    description: "Join us for an all-day food truck festival! We'll be serving up our full menu alongside live music and family fun.",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Hub+121+McKinney+TX",
  },
    {
    id: 4,
    month: "AUG",
    day: "02",
    dayOfWeek: "Saturday",
    title: "Downtown McKinney Arts & Music Festival",
    location: "Historic Downtown McKinney Square",
    time: "10:00 AM - 8:00 PM",
    description: "Explore art, listen to live bands, and enjoy the best street food in town. Find our truck near the main stage!",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Historic+Downtown+McKinney+Square",
  },
];

export default function EventsPage() {
    return (
        <>
        <Navbar />
        <main className="">
            <div className="container mx-auto px-4 py-20 mt-64 sm:py-28">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Catch Us On The Road
                    </h1>
                    <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
                        We're always on the move! Here's where you can find the Falafel & Fin truck next. Come say hi and grab a bite.
                    </p>
                </div>

                {/* Events Timeline */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className="card lg:card-side bg-base-100 shadow-xl">
                            {/* Date Block */}
                            <div className="bg-primary text-primary-content text-center p-6 lg:w-40 flex flex-col justify-center rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none">
                                <span className="text-5xl font-bold">{event.day}</span>
                                <span className="text-2xl font-semibold">{event.month}</span>
                                <span className="text-sm opacity-80">{event.dayOfWeek}</span>
                            </div>

                            {/* Event Details */}
                            <div className="card-body">
                                <h2 className="card-title text-2xl md:text-3xl">{event.title}</h2>
                                <p className="text-base-content/80">{event.description}</p>
                                <div className="space-y-2 mt-2">
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-primary"/>
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-primary"/>
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <a href={event.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary">
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="text-center mt-20">
                    <div className="card max-w-2xl mx-auto bg-base-100 shadow-lg p-8">
                        <FaCalendarCheck className="text-primary text-4xl mx-auto mb-4" />
                        <h3 className="text-3xl font-bold">Want Us At Your Event?</h3>
                        <p className="py-4 text-base-content/80">
                            From corporate lunches to weddings and private parties, we bring the flavor to you. Let's talk about your catering needs!
                        </p>
                        <div className="card-actions justify-center">
                            <Link href="/catering">
                                <button className="btn btn-primary btn-lg">Book The Truck</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}
