"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-6 relative">
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <Link href="/">
            <Image src={logo} alt="Logo" width={160} height={80} priority />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 uppercase text-sm">
          <Link href="/">HOME</Link>
          <Link href="/about">About</Link>
          <Link href="/style">Style</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="https://www.google.com/maps/place/Asam+African+Hair+Braiding/">Google Reviews</Link>
        </div>

        {/* Book Now Button */}
        <div className="hidden sm:flex">
          <Link href="https://salomeamama.setmore.com/">
            <button className="btn btn-primary px-6 py-2 font-semibold text-sm uppercase">Book Now</button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-30">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile) */}
      <div
        className={`transition-all duration-300 overflow-hidden lg:hidden bg-black px-6 text-sm uppercase text-white ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col gap-3">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/style" onClick={() => setMenuOpen(false)}>Style</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="https://salomeamama.setmore.com/">
            <button className="btn btn-outline w-full mt-3">Book Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
