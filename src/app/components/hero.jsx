import Link from "next/link";
import Image from "next/image";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Hero Background"
        fill
        priority
        placeholder="blur"
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Where Beauty Meets <span className="text-pink-400">Bold Confidence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Your hair is your crown. At our salon, we specialize in styles that elevate your natural beauty — from timeless braids to fresh modern looks.
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
    </section>
  );
}
