import React from 'react';
import Link from 'next/link';

export default function Reviews() {
  const testimonials = [
    {
      quote: "Excellent experience. I was there 5 hours and my hair is short they didn’t hurt me a bit and were affordable. Will definitely go back!",
      author: "Arneisha Bradley",
    },
    {
      quote: "I’ve been coming here for almost 5 years. Fast and neat braiding. Professional and affordable",
      author: "Robin Thomas",
    },
    {
      quote: "Enjoy going to this place! The ladies are welcoming and the bum…. I never leave un satisfied…..thank you ladies. Keep it going I will definitely be back.",
      author: "TedBear Series",
    },
  ];

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We pride ourselves on delivering exceptional service and beautiful results. Here's what our clients have to say about us.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="italic text-gray-700">"{item.quote}"</p>
            <p className="mt-4 font-semibold text-pink-500">- {item.author}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="https://www.google.com/search?gs_ssp=eJwNyDEOgCAMAMC4mvgBJxZnKCGU8AR_USpFNJKIi8_XG2-cdNEAyR8n4i1miIt5g3eZ0AiDZ7Ahxb8yepYgDg1YtrLO9NClSHplamqn2lXqVLfaygfDHxjy&q=asam+african+hair+braiding&oq=ASAm+&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI3NjVqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8">
          <button className="btn btn-outline text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white transition">
            See All Reviews
          </button>
        </Link>
      </div>
    </section>
  );
}
