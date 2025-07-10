"use client";

import { useState } from 'react';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FaRegPaperPlane, FaUtensils, FaTruck } from "react-icons/fa";

// --- REPLACE WITH A GREAT CATERING/EVENT IMAGE ---
import cateringHeroImage from "../assets/gallery/1.jpg";

export default function CateringPage() {
    const [status, setStatus] = useState('');

    // --- FORM SUBMISSION HANDLER ---
    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            eventDate: event.target.eventDate.value,
            eventAddress: event.target.eventAddress.value,
            guestCount: event.target.guestCount.value,
            eventType: event.target.eventType.value,
            details: event.target.details.value,
        };

        try {
            // This sends the form data to our serverless API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus(`Inquiry sent! Thank you, ${formData.name}. We'll be in touch soon.`);
                event.target.reset(); // Clear the form
            } else {
                const result = await response.json();
                throw new Error(result.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus(`Error: ${error.message}`);
        }
    };

    return (
        <>
        <Navbar />
        <main>
            {/* --- Hero Section --- */}
            <div className="hero min-h-[60vh]" style={{ backgroundImage: `url(${cateringHeroImage.src})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl md:text-6xl font-bold text-white">Make Your Next Event <span className="text-primary">Unforgettable</span>.</h1>
                    <p className="mb-5 text-lg text-gray-200">Ditch the boring buffet. Bring the flavor, fun, and unique experience of the Falafel & Fin food truck to your guests. Let's make some memories.</p>
                    <a href="#inquiry-form" className="btn btn-primary btn-lg">Get a Free Quote</a>
                    </div>
                </div>
            </div>

            {/* --- How It Works Section --- */}
            <div className="bg-base-200 py-20 sm:py-28">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">Hiring Us is Easy as 1-2-3</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="card bg-base-100 shadow-lg p-8">
                            <FaRegPaperPlane className="text-primary text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">1. Tell Us Your Plan</h3>
                            <p className="mt-2 text-base-content/80">Fill out our quick inquiry form with your event details. The more info, the better!</p>
                        </div>
                        <div className="card bg-base-100 shadow-lg p-8">
                            <FaUtensils className="text-primary text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">2. Craft Your Menu</h3>
                            <p className="mt-2 text-base-content/80">We'll work with you to create the perfect menu for your guests and budget.</p>
                        </div>
                        <div className="card bg-base-100 shadow-lg p-8">
                            <FaTruck className="text-primary text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">3. We Bring The Flavor</h3>
                            <p className="mt-2 text-base-content/80">Our team rolls up, serves delicious food with a smile, and handles all the cleanup.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Catering Inquiry Form Section --- */}
            <div id="inquiry-form" className="bg-base-100 py-20 sm:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                             <h2 className="text-4xl md:text-5xl font-bold">Let's Get This Party Started.</h2>
                             <p className="text-lg mt-4 text-base-content/70">
                                Ready to bring the best Mediterranean street food to your event? Fill out the form and our catering manager will get back to you within 48 hours.
                             </p>
                             <div className="mt-8 p-6 bg-base-200 rounded-2xl">
                                <h4 className="font-bold text-xl">Perfect For Any Occasion:</h4>
                                <ul className="list-disc list-inside mt-2 text-base-content/80">
                                    <li>Corporate Lunches & Office Parties</li>
                                    <li>Weddings & Rehearsal Dinners</li>
                                    <li>Birthday & Graduation Parties</li>
                                    <li>Neighborhood Block Parties</li>
                                    <li>And so much more!</li>
                                </ul>
                             </div>
                        </div>
                        <div className="card bg-base-200 shadow-xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label"><span className="label-text">Full Name</span></label>
                                        <input type="text" name="name" placeholder="John Doe" className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text">Email Address</span></label>
                                        <input type="email" name="email" placeholder="you@email.com" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label"><span className="label-text">Phone Number</span></label>
                                        <input type="tel" name="phone" placeholder="(555) 555-5555" className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text">Event Date</span></label>
                                        <input type="date" name="eventDate" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label"><span className="label-text">Event Address</span></label>
                                    <input type="text" name="eventAddress" placeholder="123 Main St, McKinney, TX" className="input input-bordered w-full" required />
                                </div>
                                 <div className="grid md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label"><span className="label-text">Number of Guests (Approx.)</span></label>
                                        <input type="number" name="guestCount" placeholder="50" className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label"><span className="label-text">Type of Event</span></label>
                                        <select name="eventType" className="select select-bordered" required>
                                            <option disabled selected value="">Select one...</option>
                                            <option>Corporate</option>
                                            <option>Wedding</option>
                                            <option>Private Party</option>
                                            <option>Community Event</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label"><span className="label-text">Additional Details</span></label>
                                    <textarea name="details" className="textarea textarea-bordered h-24" placeholder="Tell us a little more about your event, any special requests, etc."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Send Inquiry</button>
                            </form>
                             {/* Status Message Display */}
                            {status && (
                                <div className="text-center mt-6 p-4 rounded-lg bg-base-100">
                                    <p>{status}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}
