import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SetmoreCalendar from "../components/setmoreWidget";
import MapSection from "../components/maps";
import Image from "next/image";
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
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpg";
import img20 from "../assets/gallery/20.jpg";
import img21 from "../assets/gallery/21.jpg";
import img22 from "../assets/gallery/22.jpg";
import img23 from "../assets/gallery/23.jpg";
import img24 from "../assets/gallery/24.jpg";
import img25 from "../assets/gallery/25.jpg";
import img26 from "../assets/gallery/26.jpg";
import img27 from "../assets/gallery/27.jpg";
import img28 from "../assets/gallery/28.jpg";
import img29 from "../assets/gallery/29.jpg";
import img30 from "../assets/gallery/30.jpg";
import img31 from "../assets/gallery/31.jpg";
import img32 from "../assets/gallery/32.jpg";
import img33 from "../assets/gallery/33.jpg";
import img34 from "../assets/gallery/34.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34
];

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-black">Our Hair Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our signature braid styles through a stunning collection of client transformations. Every braid, twist, and part is a work of art crafted with precision, creativity, and passion.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-2 md:px-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={img}
                alt={`Gallery Image ${idx + 1}`}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-32">
          <SetmoreCalendar />
        </div>

        <div className="mt-24">
          <MapSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
