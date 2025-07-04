"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo/logo.png"; // Adjust the path as necessary

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white p-12 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left: Navigation Links */}
        <div className="hidden uppercase lg:flex gap-6 text-sm">
          <Link href="/">HOME</Link>
          <Link href="/about">About</Link>
          <Link href="/style">Style</Link>
          <Link href="https://www.google.com/maps/place/Asam+African+Hair+Braiding/@32.8722266,-96.6329331,16z/data=!4m8!3m7!1s0x864ea70fc16c128b:0x8e76cf8f47012c2f!8m2!3d32.8722221!4d-96.6303582!9m1!1b1!16s%2Fg%2F11b6jk77qf?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D">Google Reviews</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
            ☰
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-2xl font-bold tracking-wide">
          <Image src={logo} alt="Logo" width={200} height={100} />
        </div>

        {/* Right: Book Now */}
        <div className="hidden sm:flex">
          <Link href="/booking">
            <button className="btn btn-primary px-8 transition">
              BOOK NOW
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-2 text-sm flex flex-col px-4">
          <Link href="/">HOME</Link>
          <Link href="/shop">SHOP</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/page1">PAGE 1</Link>
          <Link href="/page2">PAGE 2</Link>
          <Link href="/about">ABOUT US</Link>
          <Link href="/contact">CONTACT US</Link>
          <Link href="/booking">
            <button className="btn btn-sm btn-outline w-full mt-2">BOOK NOW</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
