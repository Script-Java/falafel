import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

// --- IMPORT YOUR LOGO ---
import logo from "../assets/logo/logo.png"; // Make sure this path is correct

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-content px-6 py-12">
      {/* Grid: single column on mobile, 2 on md, 4 on lg */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        
        {/* Column 1: Logo + Social */}
        <aside className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image 
            src={logo} 
            alt="Falafel & Fin Logo" 
            width={160} 
            height={80} 
            className="object-contain mb-3"
          />
          <p className="font-bold text-lg">Falafel & Fin Food Truck</p> 
          <p className="text-sm">Bringing authentic Mediterranean street food to Frisco, TX.</p>

          <div className="mt-6 w-full">
            <h3 className="font-bold text-base mb-3">Follow The Flavor</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link 
                href="https://www.facebook.com/profile.php?id=61577893570559" 
                className="btn btn-ghost btn-circle"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link 
                href="https://www.instagram.com/falafelandfin/" 
                className="btn btn-ghost btn-circle"
              >
                <FaInstagram size={20} />
              </Link>
              <Link 
                href="https://www.tiktok.com/@falafelandfin" 
                className="btn btn-ghost btn-circle"
              >
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>
        </aside>

        {/* Column 2: Quick Links */}
        <nav className="flex flex-col space-y-2 text-center md:text-left">
          <h6 className="footer-title">Quick Links</h6> 
          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/menu" className="link link-hover">Our Menu</Link>
          <Link href="/events" className="link link-hover">Find The Truck</Link>
          <Link href="/gallery" className="link link-hover">Gallery</Link>
        </nav> 

        {/* Column 3: About Us */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title">About Us</h6> 
          <p className="max-w-xs mx-auto md:mx-0 text-sm leading-relaxed">
            We're a family-run passion project, sharing the recipes we grew up with. For us, it's about community, freshness, and serving you a meal we're proud of.
          </p>
        </nav> 

        {/* Column 4: Catering/Contact */}
        <nav className="text-center md:text-left">
          <h6 className="footer-title">Hire The Truck</h6> 
          <p className="max-w-xs mx-auto md:mx-0 text-sm leading-relaxed">
            Planning a party, corporate event, or wedding? Bring the flavor of Falafel & Fin to your guests!
          </p>
          <Link href="/hire">
            <button className="btn btn-primary mt-3">Get a Catering Quote</button>
          </Link>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-neutral-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Falafel & Fin — All Rights Reserved
      </div>
    </footer>
  );
}
