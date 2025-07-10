import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

// --- IMPORT YOUR LOGO ---
import logo from "../assets/logo/logo.png"; // Make sure this path is correct

export default function Footer() {
  return (
    // Use daisyUI's footer component with a dark theme
    <footer className="footer footer-center lg:footer-start p-10 bg-black text-neutral-content">
      
      {/* Column 1: Logo and Social Links */}
      <aside className="items-center lg:items-start">
        <Image src={logo} alt="Falafel & Fin Logo" width={180} height={90} style={{ objectFit: 'contain' }} />
        <p className="font-bold text-lg">
          Falafel & Fin Food Truck
        </p> 
        <p>Bringing authentic Mediterranean street food to McKinney, TX.</p>
        <div className="mt-4">
            <h3 className="font-bold text-xl mb-2">Follow The Flavor</h3>
            <div className="flex space-x-4">
                {/* Replace '#' with your actual social media links */}
                <Link href="https://www.facebook.com/profile.php?id=61577893570559" className="btn btn-ghost btn-circle"><FaFacebookF size={24} /></Link>
                <Link href="https://www.instagram.com/falafelandfin/" className="btn btn-ghost btn-circle"><FaInstagram size={24} /></Link>
                <Link href="https://www.tiktok.com/@falafelandfin" className="btn btn-ghost btn-circle"><FaTiktok size={24} /></Link>
            </div>
        </div>
      </aside> 
      
      {/* Column 2: Quick Links */}
      <nav>
        <h6 className="footer-title">Quick Links</h6> 
        <Link href="/" className="link link-hover">Home</Link>
        <Link href="/menu" className="link link-hover">Our Menu</Link>
        <Link href="/events" className="link link-hover">Find The Truck</Link>
        <Link href="/gallery" className="link link-hover">Gallery</Link>
      </nav> 
      
      {/* Column 3: About Us */}
      <nav>
        <h6 className="footer-title">About Us</h6> 
        <p className="max-w-xs text-sm">
            We're a family-run passion project, sharing the recipes we grew up with. For us, it's about community, freshness, and serving you a meal we're proud of.
        </p>
      </nav> 
      
      {/* Column 4: Catering/Contact */}
      <nav>
        <h6 className="footer-title">Hire The Truck</h6> 
        <p className="max-w-xs text-sm">
            Planning a party, corporate event, or wedding? Bring the flavor of Falafel & Fin to your guests!
        </p>
        <Link href="/hire" className="mt-2">
            <button className="btn btn-primary">Get a Catering Quote</button>
        </Link>
      </nav>

    </footer>
  );
}
