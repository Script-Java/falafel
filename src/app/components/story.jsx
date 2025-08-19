import Image from 'next/image';
import Link from 'next/link';

// You can use react-icons or your own custom SVGs
import { FaHeart, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';

// --- REPLACE WITH YOUR AUTHENTIC PHOTO ---
import ownerImage from "../assets/gallery/4.jpg"; // A photo of you/the truck

export default function OurStorySection() {
  return (
    <div className="bg-base-200 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: The Image */}
          <figure className="w-full h-[30rem] lg:h-[36rem] relative rounded-2xl shadow-xl overflow-hidden">
            <Image
              src={ownerImage}
              alt="The owners of Falafel & Fin food truck"
              fill
              className="object-cover"
            />
          </figure>

          {/* Right Column: The Story & Values */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              Fueled by Passion, <br className="hidden lg:block" />
              <span className="text-primary">Served With a Smile.</span>
            </h2>
            
            <p className="text-lg mt-6 text-base-content/80">
              Welcome to Falafel & Fin! We're not just another food truck; we're a family-run passion project right here in Frisco. It all started with a dream to share the authentic Mediterranean recipes we grew up loving. For us, it's about more than just food—it's about community, freshness, and serving you a meal that we're truly proud of.
            </p>

            {/* Core Values Section */}
            <div className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <FaHeart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Family Recipe</h4>
                  <p className="text-base-content/70">Authentic taste passed down with love.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Locally Owned</h4>
                  <p className="text-base-content/70">Proudly serving our Frisco neighbors.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <FaLeaf size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Always Fresh</h4>
                  <p className="text-base-content/70">High-quality ingredients, prepared daily.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/menu">
                <button className="btn btn-primary btn-lg">
                  See What We're Cooking
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}