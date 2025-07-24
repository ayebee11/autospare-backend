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
      <h1 className="text-4xl font-bold mb-10 text-center text-white tracking-wider">
        Our Products
      </h1>

      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="mb-14">
          <h2 className="text-2xl text-white font-bold mb-4 border-b border-gray-700 pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => {
              const qty = getItemQty(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-[#1a1c20] p-5 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="w-full h-52 bg-white flex justify-center items-center mb-4 rounded-lg overflow-hidden">
                    <img
                      src={`/assets/${product.imageUrl}`}
                      alt={product.name}
                      className="max-h-[90%] max-w-[90%] object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-bold tracking-wide">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.category}</p>
                  <p className="text-green-400 font-semibold mb-3 mt-1 transition group-hover:text-amber-400">
                    ₹{product.price.toFixed(0)}
                  </p>

                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg text-sm font-semibold"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQty(product.id)}
                          className="bg-red-600 px-3 py-1 rounded text-white text-lg"
                        >
                          −
                        </button>
                        <span className="text-white font-semibold">{qty}</span>
                        <button
                          onClick={() => increaseQty(product.id)}
                          className="bg-green-600 px-3 py-1 rounded text-white text-lg"
                        >
                          +
                        </button>
                      </div>
                      <Link
                        to="/cart"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-lg text-sm font-semibold text-center"
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
