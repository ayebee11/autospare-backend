import { Link } from "react-router-dom";
import { FiTruck, FiShield, FiTag } from "react-icons/fi";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
  {
    id: 1,
    name: "Brake Pad Set",
    image: "/assets/brakepads.jpg",
    price: "₹799",
  },
  {
    id: 2,
    name: "Engine Oil",
    image: "/assets/engineoil.jpg",
    price: "₹1,299",
  },
  {
    id: 3,
    name: "Air Filter",
    image: "/assets/airfilter.jpg",
    price: "₹499",
  },
];


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);


  const testimonials = [
    {
      name: "Kushar Bajaj",
      feedback: "Fast delivery and original parts. Loved the service!",
    },
    {
      name: "Ashmit Aggarwal",
      feedback: "Affordable and genuine. Will buy again!",
    },
    {
      name: "Dhruv Menon",
      feedback: "Smooth shopping experience. Highly recommended.",
    },
    {
      name: "Pranav Jha",
      feedback: "Impressive product quality and fast delivery. Found exactly what I needed without any hassle.",
    },
    {
      name: "Purvaansh Sharma",
      feedback: "The interface is smooth and the parts are well-categorized. Great experience overall!",
    },
    {
      name: "Arhaan Malhotra",
      feedback: "Seamless buying experience and top-notch product authenticity. Will definitely return!",
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans">
      {/* Hero Section */}
      <div className="px-6 py-28 text-center bg-gradient-to-r from-[#0f1115] via-[#1a1d23] to-[#0f1115]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Drive Forward with Confidence
        </h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          Discover high-quality, affordable auto spare parts — delivered fast and reliably.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Shop Now
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-6 bg-[#12151b] text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <FiTruck size={36} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-400">We ship across India within 48 hours.</p>
          </div>
          <div>
            <FiShield size={36} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Genuine Quality</h3>
            <p className="text-gray-400">Only original, trusted-brand products.</p>
          </div>
          <div>
            <FiTag size={36} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-400">We beat showroom prices — always.</p>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
<div className="py-16 px-6 bg-[#0f1115]">
  <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
  <div className="flex justify-center">
    <div className="w-80 bg-[#1a1d23] p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:scale-105">
      <img
        src={featuredProducts[currentIndex].image}
        alt={featuredProducts[currentIndex].name}
        className="w-full h-48 object-contain bg-white rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold">
        {featuredProducts[currentIndex].name}
      </h3>
      <p className="text-blue-400 font-bold text-lg mt-1">
        {featuredProducts[currentIndex].price}
      </p>
    </div>
  </div>
</div>



      {/* Testimonials */}
      <div className="py-16 px-6 bg-[#12151b]">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#1a1d23] border border-gray-700 p-6 rounded-lg shadow text-left hover:border-blue-500 transition"
            >
              <p className="text-gray-300 italic">“{t.feedback}”</p>
              <h4 className="mt-4 font-semibold text-white">— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
