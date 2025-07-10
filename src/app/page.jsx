import Navbar from "./components/navbar";
import Hero from "./components/hero";
import LocationSection from "./components/location";
import SignatureEatsSection from "./components/signature";
import OurStorySection from "./components/story";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="font-serif">
      <Navbar />
      <Hero />
      <LocationSection />
      <SignatureEatsSection />
      <OurStorySection />
      <Footer />
    </main>
  );
}
