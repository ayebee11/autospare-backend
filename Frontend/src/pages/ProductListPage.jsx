import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const { addToCart, increaseQty, decreaseQty, getItemQty } = useCart();
  const [groupedProducts, setGroupedProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8082/api/products")
      .then((res) => res.json())
      .then((data) => {
        const grouped = data.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {});
        setGroupedProducts(grouped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-20">Loading products...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
        Product Catalog
      </h1>

      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl text-teal-400 mb-4 border-b border-gray-600 pb-1">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const qty = getItemQty(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-[#1a1c20] p-4 rounded-lg shadow-md hover:shadow-lg"
                >
                  <img
                    src={`/assets/${product.imageUrl}`}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-3"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    ₹{product.price.toFixed(2)}
                  </p>

                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="bg-red-600 px-2 rounded"
                      >
                        −
                      </button>
                      <span className="text-white">{qty}</span>
                      <button
                        onClick={() => increaseQty(product.id)}
                        className="bg-green-600 px-2 rounded"
                      >
                        +
                      </button>
                      <Link
                        to="/cart"
                        className="text-sm text-yellow-400 underline ml-2"
                      >
                        Go to Cart
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
