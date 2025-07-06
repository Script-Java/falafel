"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import heroImg1 from "../assets/gallery/1.jpg";
import heroImg2 from "../assets/gallery/2.jpg";
import heroImg3 from "../assets/gallery/3.jpg";

const slides = [
  {
    image: heroImg1,
    title: "Crown Yourself in Braids",
    subtitle:
      "Our expert stylists specialize in classic and creative braiding styles that enhance your natural beauty. Whether it’s tribal, box, knotless, or feed-in braids — we craft each look with precision and care to match your unique personality.",
  },
  {
    image: heroImg2,
    title: "Braids That Turn Heads",
    subtitle:
      "Step into a new level of confidence with braiding styles that make a statement. From elegant updos to long flowing braids, we deliver stunning results that protect your hair while keeping you fashion-forward.",
  },
  {
    image: heroImg3,
    title: "Slay Every Strand",
    subtitle:
      "Don’t just get your hair braided — get it elevated. Our salon blends tradition with modern flair, using premium products and gentle techniques to give you braids that last, feel light, and look absolutely flawless.",
  },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        key={current}
        src={slides[current].image}
        alt="Hero Background"
        fill
        priority
        placeholder="blur"
        className={`object-cover object-center z-0 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-700" />

      <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-5xl text-white space-y-6">
          <h1 className="text-4xl text-primary md:text-7xl font-extrabold leading-tight">
            {slides[current].title.split(" ").map((word, idx) => (
              <span
                key={idx}
                className={word.toLowerCase() === "bold" ? "text-pink-400" : ""}
              >
                {word + " "}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <button className="btn btn-lg bg-pink-500 text-white hover:bg-pink-600">
                Book Online
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
}
