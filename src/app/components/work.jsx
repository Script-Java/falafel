import React from 'react';
import Image from 'next/image';
import img1 from '../assets/gallery/4.jpg';
import img2 from '../assets/gallery/5.jpg';
import img3 from '../assets/gallery/6.jpg';
import img4 from '../assets/gallery/7.jpg';
import img5 from '../assets/gallery/8.jpg';
import img6 from '../assets/gallery/9.jpg';
import Link from 'next/link';

export default function Work() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/patterns/texture.png')] bg-cover" />

      <div className="relative max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-black mb-4 font-serif animate-fade-in-up">
            Our Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in delay-100">
            Every braid tells a story. From intricate cornrows to boho knotless styles, our work speaks for itself—bold, elegant, and always personalized.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in delay-200">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={img}
                  alt={`Work ${i + 1}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-300">
          <Link href="/gallery">
            <button className="btn btn-primary px-10 py-3 rounded-full text-white text-lg tracking-wide shadow-lg hover:scale-105 transition-transform duration-300">
              View Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}