import React from 'react';
import Image from 'next/image';
import img1 from '../assets/gallery/1.jpg';
import img2 from '../assets/gallery/2.jpg';
import img3 from '../assets/gallery/3.jpg';
import img4 from '../assets/gallery/4.jpg';
import img5 from '../assets/gallery/5.jpg';
import img6 from '../assets/gallery/6.jpg';
import Link from 'next/link';

export default function Work() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif mb-4">Our Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We pride ourselves on delivering exceptional service and beautiful results. Here's a glimpse of our work.
        </p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full aspect-square">
                <Image
                  src={img}
                  alt={`Work ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="text-center mt-12">
            <Link href="/gallery">
            <button className="btn btn-primary px-12 transition">
                View Gallery
            </button>
            </Link>
        </div>
    </section>
  );
}
