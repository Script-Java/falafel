import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-300 text-black py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm text-black">
            If you want to braid your hair and looking for a reliable hair braiding salon in Garland, TX where you can benefit from professional and affordable services, then your search is over because you have already come to the right place.
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
          <p className="text-sm text-black">Every day. Call or book online</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-sm text-black">117 East Centerville Road, Garland TX 75041</p>
          <p className="text-sm text-black mt-2">Telephone: (214) 682-4270</p>
        </div>
      </div>

      <div className="border-t border-purple-700 max-w-screen-xl mx-auto pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© Copyright 2025 - Braids By Parky | All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://www.facebook.com/Asambraids"><FaFacebookF className="hover:text-pink-300 transition" /></Link>
          <Link href="https://www.instagram.com/explore/locations/1071250532891743/asam-african-hair-braiding-garland-texas/"><FaInstagram className="hover:text-pink-300 transition" /></Link>
        </div>
      </div>
    </footer>
  );
}
