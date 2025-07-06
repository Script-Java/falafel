import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Appointment from "../components/appointment";
import MapSection from "../components/maps";
import SetmoreCalendar from "../components/setmoreWidget";

export default function Style() {
  const styles = [
    {
      name: "Cornrows",
      description: "Classic tight braids close to the scalp, arranged in straight or intricate patterns.",
      time: "2-4 hours",
      price: "$80-$150"
    },
    {
      name: "Box Braids",
      description: "Individual plaits sectioned into square or triangular parts.",
      time: "4-8 hours",
      price: "$160-$300"
    },
    {
      name: "Senegalese Twists",
      description: "Two-strand twists created with synthetic hair extensions for a smooth, rope-like appearance.",
      time: "4-8 hours",
      price: "$150-$350"
    },
    {
      name: "Kinky Twists",
      description: "Two-strand twists with a more textured, coiled appearance, using Marley or Afro-kinky hair extensions.",
      time: "4-6 hours",
      price: "$100-$250"
    },
    {
      name: "Passion Twists",
      description: "Twists created with wavy, passion twist hair extensions for a natural, curly appearance.",
      time: "4-6 hours",
      price: "$180-$300"
    },
    {
      name: "Micro Braids",
      description: "Tiny, delicate braids that offer versatility and can be styled in various ways.",
      time: "6-12 hours",
      price: "$180-$500"
    },
    {
      name: "Lemonade Braids",
      description: "Side-swept cornrows popularized by Beyoncé, often featuring intricate patterns and designs.",
      time: "4-6 hours",
      price: "$150-$250"
    },
    {
      name: "Fulani Braids",
      description: "A combination of cornrows and single braids, often adorned with beads and inspired by the Fulani people of West Africa.",
      time: "4-6 hours",
      price: "$180-$250"
    },
    {
  name: "Crochet Braids",
  description: "A versatile and protective style where pre-looped extensions are crocheted into your natural hair. Quick to install, low-maintenance, and perfect for switching up your look with minimal tension.",
  time: "2–4 hours",
  price: "$100–$180"
},
{
  name: "Sew-In Weave",
  description: "A timeless method where hair extensions are sewn into neatly braided tracks, giving you a full, natural look with plenty of styling options. Ideal for adding volume, length, or trying something bold.",
  time: "3–5 hours",
  price: "$150–$300"
},

    {
      name: "Knotless Braids",
      description: "A variation of box braids that starts with your natural hair, gradually incorporating extensions for a seamless, knotless appearance.",
      time: "5-8 hours",
      price: "$180-$350"
    },
    {
      name: "Bohemian Knotless Braids",
      description: "Effortlessly chic and lightweight, these knotless braids blend natural hair with extensions for a smooth, tension-free finish. Perfect for a carefree, boho vibe with long-lasting style and comfort.",
      time: "5–8 hours",
      price: "$180–$350"
    },
    {
      name: "Tree Braids",
      description: "A protective style that combines cornrows and individual braids, leaving the majority of the hair extensions free and unbraided.",
      time: "4-6 hours",
      price: "$180-$300"
    },
    {
      name: "Nubian Twists",
      description: "Short, tight twists created with Nubian hair extensions for a textured, coiled appearance.",
      time: "4-6 hours",
      price: "$180-$250"
    }
  ];

  return (
    <>
    <Navbar></Navbar>
    <section className="bg-base-100 py-20 px-6 text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-10 text-center">Our Styles</h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-10">
          At Asam African Hair Braiding, we offer a wide variety of styles to suit your individual needs and preferences. Prices may vary depending on factors such as hair length, thickness, and complexity. If you don't see your desired style here, please call us at (469) 297-9930 and we'll be happy to help.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {styles.map((style, index) => (
            <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-md bg-white">
              <h2 className="text-2xl font-semibold text-primary mb-2">{style.name}</h2>
              <p className="mb-2">{style.description}</p>
              <p className="text-sm text-gray-600"><strong>Time:</strong> {style.time}</p>
              <p className="text-sm text-gray-600"><strong>Price:</strong> {style.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg mb-4">
            We look forward to assisting you in your hair journey and providing exceptional African hair braiding services that leave you feeling confident and beautiful.
          </p>
          <p className="text-lg mb-6">
            Don't hesitate to reach out with any questions or concerns—we're here to help!
          </p>
        </div>
      </div>
    </section>
    <Appointment></Appointment>
    <MapSection></MapSection>
    <SetmoreCalendar></SetmoreCalendar>
    <Footer></Footer>
    </>
  );
}