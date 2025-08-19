"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo/logo.png"; // Make sure this path is correct

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { title: "Menu", href: "/menu" },
    { title: "Events", href: "/events" },
    { title: "Gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="navbar max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="navbar-start">
            <Link
              href="/"
              className="btn btn-primary h-auto p-0 hover:bg-transparent"
            >
              <Image
                src={logo}
                alt="Falafel & Fin Logo"
                width={90}
                className="lg:hidden"
                style={{ objectFit: "contain" }}
                priority
              />
              <Image
                src={logo}
                alt="Falafel & Fin Food Truck Logo"
                width={130}
                className="hidden lg:block"
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
          </div>

          {/* Menu Icon and Hire Us Button */}
          <div className="navbar-end">
            <Link href="/hire" className="hidden sm:inline-flex">
              <button className="btn btn-primary bg-yellow-400 text-black hover:bg-yellow-500 border-none normal-case mr-2">
                Hire Us
              </button>
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="btn btn-primary btn-circle"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Full-Screen Overlay Menu --- */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="btn btn-ghost btn-circle absolute top-4 right-4 text-white"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="text-center px-4">
          <ul className="space-y-6 sm:space-y-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl sm:text-4xl font-bold uppercase tracking-widest transition-colors duration-300 hover:text-yellow-400"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <li className="list-none mt-6 sm:mt-10">
            <Link
              href="/hire"
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl sm:text-4xl font-bold uppercase tracking-widest transition-colors duration-300 hover:text-yellow-400"
            >
              Hire Us
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}
