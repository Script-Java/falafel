"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Replace these with your actual food truck images
import heroImg1 from "../assets/gallery/1.jpg";
import heroImg2 from "../assets/gallery/2.jpg";
import heroImg3 from "../assets/gallery/3.jpg";

const slides = [
  {
    image: heroImg1,
    title: "Golden, Crispy, Unforgettable.",
    subtitle:
      "This isn't just falafel. It's a flavor explosion crafted from fresh chickpeas, hand-picked herbs, and a secret blend of Mediterranean spices, all fried to golden perfection. Get ready for the perfect crunch.",
  },
  {
    image: heroImg2,
    title: "Sizzling Shawarma & Fresh Catfish.",
    subtitle:
      "Taste the difference with our juicy, marinated chicken shawarma or our flaky, crispy fried catfish. Each bite is packed with bold flavors and served hot right off the grill. Your new obsession is waiting.",
  },
  {
    image: heroImg3,
    title: "Your Street Food Destination.",
    subtitle:
      "We're rolling through your neighborhood with the freshest, most authentic Mediterranean street food. Forget boring lunches. Find our truck, grab a wrap, and make your day delicious.",
  },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  // Go to the previous slide
  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300); // Corresponds to the fade-out duration
  };

  // Go to the next slide
  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300); // Corresponds to the fade-out duration
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        key={current} // Key prop is crucial for re-triggering the animation on change
        src={slides[current].image}
        alt="Falafel and Fin Food Truck Delicious Food"
        fill
        priority
        placeholder="blur"
        className={`object-cover object-center z-0 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Text Content */}
      <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <div className="max-w-4xl text-white space-y-6">
          <h1 className="text-4xl text-yellow-400 md:text-7xl font-extrabold leading-tight drop-shadow-lg">
            {slides[current].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {slides[current].subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/events">
              <button className="btn btn-primary btn-lg">
                Find The Truck
              </button>
            </Link>
            <Link href="/menu">
              <button className="btn btn-outline btn-lg ">
                View The Menu
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
}