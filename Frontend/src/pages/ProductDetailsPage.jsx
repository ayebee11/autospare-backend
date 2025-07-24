import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams(); // this will come from the URL

  // Sample product (replace with actual data later)
  const product = {
    id,
    name: "Brake Pads",
    category: "Brakes",
    price: 1200,
    description: "High-quality brake pads to ensure safety.",
    image: "/assets/brakepads.jpg",
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full max-h-96 object-contain mb-6" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-green-600 text-xl font-semibold my-2">₹{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
