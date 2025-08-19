import Image from 'next/image';
import Link from 'next/link';

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
    <div className="bg-neutral text-neutral-content">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Straight From The Grill
        </h2>
        <p className="text-base sm:text-lg mt-4 text-neutral-content/70 max-w-2xl mx-auto px-2">
          This is more than just food—it's our passion on a plate. Swipe to explore the flavors that define us.
        </p>
      </div>

      {/* Horizontal Snap Carousel */}
      <div
        className="w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide pb-8 sm:pb-12"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Spacer (desktop centering) */}
        <div className="hidden lg:block flex-shrink-0 w-1/12"></div>

        {signatureItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-2/3 lg:w-1/2 snap-center mx-3 sm:mx-4"
          >
            <div className="card h-[60vh] sm:h-[70vh] shadow-xl image-full">
              <figure>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
                />
              </figure>
              <div className="card-body justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 sm:p-6">
                <p className="text-primary font-semibold text-sm sm:text-base">{item.subtitle}</p>
                <h3 className="card-title text-2xl sm:text-4xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base max-w-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Final CTA Card */}
        <div className="flex-shrink-0 w-[85%] sm:w-2/3 lg:w-1/2 snap-center mx-3 sm:mx-4">
          <div className="card h-[60vh] sm:h-[70vh] shadow-xl bg-base-100 text-base-content flex items-center justify-center text-center p-6 sm:p-8">
            <div>
              <h3 className="text-3xl sm:text-5xl font-bold">Ready to Eat?</h3>
              <p className="py-4 sm:py-6 text-base sm:text-lg">
                You've seen the stars, now explore the full cast. Our menu is packed with fresh flavors waiting for you.
              </p>
              <Link href="/menu">
                <button className="btn btn-primary btn-md sm:btn-lg">View The Full Menu</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Spacer (desktop centering) */}
        <div className="hidden lg:block flex-shrink-0 w-1/12"></div>
      </div>
    </div>
  );
}
