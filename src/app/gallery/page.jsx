"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// --- IMPORT YOUR GALLERY IMAGES ---
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";

// Array of all imported images for easier mapping
const galleryImages = [
  { src: img1, span: "row-span-2" }, { src: img2 }, { src: img3 },
  { src: img4 }, { src: img5, span: "row-span-2" }, { src: img6 },
  { src: img7 }, { src: img8 }, { src: img9, span: "row-span-2" },
  { src: img10 }, { src: img11 }, { src: img12 },
  { src: img13, span: "row-span-2" }, { src: img14 }
];


export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <Navbar />
      <main className="bg-base-100 py-20 mt-64 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold">
              Food, Friends & <span className="text-primary">Good Times</span>
            </h1>
            <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
              A collection of our delicious dishes, behind-the-scenes moments, and happy customers. This is what Falafel & Fin is all about.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl shadow-lg cursor-pointer group ${image.span || ''}`}
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  placeholder="blur"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl max-h-4/5">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 sm:top-0 sm:-right-12 text-white btn btn-ghost btn-circle"
              aria-label="Close gallery"
            >
              <FaTimes size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrevImage}
              className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 text-white btn btn-ghost btn-circle"
              aria-label="Previous image"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={showNextImage}
              className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 text-white btn btn-ghost btn-circle"
              aria-label="Next image"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Image Display */}
            <div className="w-full h-full flex items-center justify-center">
               <Image
                src={galleryImages[selectedImageIndex].src}
                alt={`Enlarged gallery image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
