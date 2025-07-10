import Image from 'next/image';
import Link from 'next/link';

// --- REPLACE WITH YOUR ACTUAL FOOD IMAGES ---
// High-resolution, portrait-orientation images work best for this layout
import falafelImage from "../assets/gallery/9.jpg";
import shawarmaImage from "../assets/gallery/10.jpg";
import fishImage from "../assets/gallery/8.jpg";

const signatureItems = [
  {
    title: 'The Golden Falafel',
    subtitle: 'Crispy. Fluffy. Unforgettable.',
    description: 'Our signature recipe, crafted from fresh chickpeas, hand-picked herbs, and a secret spice blend. It’s the perfect crunch.',
    image: falafelImage,
  },
  {
    title: 'Sizzling Shawarma',
    subtitle: 'Marinated for 24 hours.',
    description: 'Juicy, all-natural chicken, slow-roasted on a vertical spit and shaved thin. A true taste of Mediterranean street food.',
    image: shawarmaImage,
  },
  {
    title: 'Crispy Catfish',
    subtitle: 'A Southern classic, elevated.',
    description: 'Light, flaky catfish fillet, hand-battered in our seasoned flour and fried to golden-brown perfection.',
    image: fishImage,
  },
];

export default function SignatureEatsSection() {
  return (
    // The main section container with a dark theme
    <div className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-6 py-20 sm:py-28 text-center">
        <h2 className="text-5xl md:text-6xl font-bold">
          Straight From The Grill
        </h2>
        <p className="text-lg mt-4 text-neutral-content/70 max-w-2xl mx-auto">
          This is more than just food—it's our passion on a plate. Scroll to explore the flavors that define us.
        </p>
      </div>

      {/* Horizontal Scrolling Container - this is the core of the layout */}
      <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory lg:cursor-grab">
        {/* Spacer to center the first card on large screens */}
        <div className="flex-shrink-0 w-1/12 snap-center"></div>

        {/* Map through the signature items to create the cards */}
        {signatureItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-5/6 md:w-2/3 lg:w-1/2 snap-center mx-4">
            <div className="card h-[70vh] shadow-xl image-full">
              <figure>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body justify-between bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div>
                  {/* Intentionally empty to push content down */}
                </div>
                <div className="text-white">
                  <p className="text-primary font-semibold">{item.subtitle}</p>
                  <h3 className="card-title text-4xl lg:text-5xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-md">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Final CTA Card */}
        <div className="flex-shrink-0 w-5/6 md:w-2/3 lg:w-1/2 snap-center mx-4">
            <div className="card h-[70vh] shadow-xl bg-base-100 text-base-content flex items-center justify-center text-center p-8">
                <div>
                    <h3 className="text-5xl font-bold">Ready to Eat?</h3>
                    <p className="py-6 text-lg">You've seen the stars, now explore the full cast. Our menu is packed with fresh flavors waiting for you.</p>
                    <Link href="/menu">
                        <button className="btn btn-primary btn-lg">View The Full Menu</button>
                    </Link>
                </div>
            </div>
        </div>

        {/* Spacer to center the last card on large screens */}
        <div className="flex-shrink-0 w-1/12 snap-center"></div>
      </div>
    </div>
  );
}