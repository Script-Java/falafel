import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Work from "./components/work";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import Appointment from "./components/appointment";
import SetmoreWidget from "./components/setmoreWidget";
import MapSection from "./components/maps";

export default function Home() {
  return (
    <main className="font-serif">
      <Navbar />
      <Hero />
      <Work />
      <Reviews />
      <Appointment />
      <MapSection />
      <SetmoreWidget />
      <Footer />
    </main>
  );
}
