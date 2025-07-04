import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/gallery/2.jpg"; // Replace with your actual image
import SetmoreCalendar from "../components/setmoreWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapSection from "../components/maps";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-base-100 text-gray-800 py-20">
        <section className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={heroImg}
              alt="Braiding at Asam African Hair Braiding"
              fill
              className="object-cover"
            />
          </div>

          {/* Intro Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Discover the Art of African Braiding
            </h1>
            <p className="text-lg mb-4">
              Since 2002, Asam African Hair Braiding has been a trusted name in our community. As a family-owned salon, we combine cultural heritage, expert technique, and creative expression to deliver truly exceptional styles.
            </p>
            <p className="text-lg mb-4">
              From timeless cornrows and box braids to trendy goddess locs and passion twists, our braiders specialize in styles that celebrate your individuality. Every appointment is tailored to your preferences, ensuring you leave feeling confident and beautiful.
            </p>
            <p className="text-lg mb-4">
              Whether you're prepping for a big event or just want to refresh your look, we’re here to make your hair goals a reality. We welcome your ideas and love creating styles that inspire.
            </p>
            <p className="text-lg mb-6">
              We believe in using high-quality products that protect and nourish your natural hair. Your comfort and satisfaction are our top priorities from the moment you walk in.
            </p>

            <Link href="/booking" className="btn btn-primary text-white text-lg">
              Book Your Style
            </Link>
          </div>
        </section>

        {/* Mission Section */}
        <div className="w-full bg-base-200 p-4 mt-24">
        <div className="bg-base-200 max-w-screen-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Why We Braid</h2>
          <p className="text-lg text-gray-700">
            Our mission is to uplift and empower through the timeless craft of African hair braiding. We blend cultural tradition with modern artistry to create styles that honor your roots and reflect your beauty.
          </p>
        </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12">
          <MapSection />
        </div>
        {/* Setmore Calendar */}
        <div className="max-w-7xl mx-auto mt-12">
          <SetmoreCalendar />
        </div>

      </main>
      <Footer />
    </>
  );
}