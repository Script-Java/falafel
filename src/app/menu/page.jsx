"use client"
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// --- REPLACE WITH YOUR ACTUAL FOOD IMAGES ---
import menuHeroImage from "../assets/gallery/3.jpg"; // A great wide shot of your food
import falafelWrapImg from "../assets/gallery/13.jpg";
import falafelPlateImg from "../assets/gallery/9.jpg";
import grilledFishImg from "../assets/gallery/7.jpg";
import friedFishImg from "../assets/gallery/8.jpg";
import fishSandwichImg from "../assets/gallery/6.jpg";
import shawarmaWrapImg from "../assets/gallery/10.jpg";
import shawarmaPlateImg from "../assets/gallery/14.jpg";
import friesImg from "../assets/gallery/5.jpg";
import onionRingsImg from "../assets/gallery/12.jpg";


// --- MENU DATA ---
// Using a data structure like this makes your menu easy to update.
const menuData = {
  Falafel: [
    {
      name: "Falafel Wrap",
      price: "$6.99",
      description: "Crispy chickpea balls with tahini, assorted veggies & pickles all wrapped in a warm pita bread.",
      image: falafelWrapImg,
      isFavorite: true,
    },
    {
      name: "Falafel Plate",
      price: "$8.99",
      description: "5 falafel balls served with creamy hummus, fresh salad, pita bread, and a side of crispy fries.",
      image: falafelPlateImg,
    },
  ],
  Fish: [
    {
      name: "Grilled Fish Fillet",
      price: "$11.99",
      description: "Seasoned catfish grilled to perfection, served with lemon & tartar sauce and a side of fries.",
      image: grilledFishImg,
    },
    {
      name: "Fried Fish Fillet",
      price: "$11.99",
      description: "Golden-crispy catfish, served with our house tartar sauce, lemon, and a side of fries.",
      image: friedFishImg,
      isFavorite: true,
    },
    {
        name: "Fish Sandwich",
        price: "$8.99",
        description: "Your choice of grilled or fried catfish served with mayo, crisp lettuce, lemon, and fries.",
        image: fishSandwichImg,
    }
  ],
  Shawarma: [
    {
      name: "Chicken Shawarma Sandwich",
      price: "$7.99",
      description: "Thinly sliced marinated chicken in a pita bread with garlic sauce, onion, parsley, and pickles.",
      image: shawarmaWrapImg,
      isFavorite: true,
    },
    {
      name: "Chicken Shawarma Plate",
      price: "$10.99",
      description: "A generous serving of shawarma chicken with fries, garlic sauce, lettuce, tomato, and pita bread.",
      image: shawarmaPlateImg,
    },
  ],
  "Sides & Drinks": [
    {
      name: "French Fries",
      price: "$3.49",
      description: "Crispy, golden fries with salt. Add garlic sauce or ketchup for +$0.50.",
      image: friesImg,
    },
    {
      name: "Onion Rings",
      price: "$3.49",
      description: "Sliced onions that are dipped in batter and deep-fried until golden brown and crispy.",
      image: onionRingsImg,
    },
     {
      name: "Bottled Water",
      price: "$1.50",
      description: "Stay hydrated!",
      image: null, // No image needed for simple items
    },
    {
      name: "Soft Drink",
      price: "$2.00",
      description: "Coke, Diet Coke, Sprite.",
      image: null,
    },
  ],
};

const menuCategories = Object.keys(menuData);

export default function MenuPage() {
    // No longer need activeTab state for this layout

    return (
        <>
        <Navbar />
        <main>
            {/* --- Hero Section --- */}
            <div className="hero h-[50vh]" style={{ backgroundImage: `url(${menuHeroImage.src})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Our Menu</h1>
                        <p className="mb-5 text-lg text-gray-200">Artfully crafted, deliciously served. Explore our selection of authentic Mediterranean street food, made fresh daily.</p>
                    </div>
                </div>
            </div>

            {/* --- Menu Section --- */}
            <div className="bg-base-200 py-20 sm:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Sticky Sidebar Navigation (Desktop) */}
                        <aside className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-28">
                                <h3 className="text-xl font-bold mb-4">Categories</h3>
                                <ul className="menu bg-base-100 rounded-box p-2">
                                    {menuCategories.map(category => (
                                        <li key={category}>
                                            <a href={`#${category.replace(/\s+/g, '-')}`}>{category}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Main Menu Content */}
                        <div className="lg:col-span-3 space-y-16">
                            {menuCategories.map(category => (
                                <section key={category} id={category.replace(/\s+/g, '-')} className="scroll-mt-24">
                                    <h2 className="text-4xl font-bold mb-8 border-b-2 border-primary pb-2">{category}</h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {menuData[category].map((item, index) => (
                                            <div key={index} className="card bg-base-100 shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                                                {item.image && (
                                                    <figure className="h-56">
                                                        <Image src={item.image} alt={item.name} width={400} height={300} className="w-full h-full object-cover"/>
                                                    </figure>
                                                )}
                                                <div className="card-body">
                                                    <div className="flex justify-between items-start gap-4">
                                                        <h3 className="card-title text-2xl">{item.name}</h3>
                                                        <span className="text-2xl font-bold text-primary whitespace-nowrap">{item.price}</span>
                                                    </div>
                                                    <p className="mt-2 text-base-content/80">{item.description}</p>
                                                    {item.isFavorite && (
                                                        <div className="card-actions justify-start mt-4">
                                                            <div className="badge badge-secondary">Fan Favorite</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}
