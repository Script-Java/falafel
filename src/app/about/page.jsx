import Image from "next/image";
import Link from "next/link";
import heroImg from "../assets/gallery/8.jpg";
import SetmoreCalendar from "../components/setmoreWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MapSection from "../components/maps";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-pink-50 to-white">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-2xl" />

          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImg}
                alt="Braiding at Asam African Hair Braiding"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>

            <div className="animate-fade-in-up">
              <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
                Discover the Art of African Braiding
              </h1>
              <div className="space-y-4 text-lg">
                <p>
                  Since 2002, Asam African Hair Braiding has been a trusted name in our community. As a family-owned salon, we blend cultural heritage, expert technique, and creative vision.
                </p>
                <p>
                  From timeless cornrows to trendy goddess locs, we specialize in styles that highlight your uniqueness. Every appointment is custom-tailored for a look that empowers.
                </p>
                <p>
                  Whether you’re prepping for a big moment or refreshing your everyday look, we’re here to help you shine. Your ideas are always welcome—we love co-creating.
                </p>
                <p>
                  We use high-quality, protective products that nourish your natural hair while keeping styles long-lasting and beautiful.
                </p>
              </div>
              <Link
                href="https://salomeamama.setmore.com/"
                className="btn btn-primary mt-6 px-8 py-3"
              >
                Book Your Style
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-base-100">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why We Braid
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to uplift and empower through the timeless craft of African hair braiding. Each style blends tradition and creativity to honor your roots and enhance your natural beauty.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto animate-fade-in">
            <MapSection />
          </div>
        </section>

        {/* Setmore Calendar */}
        <section className="bg-base-200 py-20 px-6">
          <div className="max-w-7xl mx-auto animate-fade-in delay-200">
            <SetmoreCalendar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}