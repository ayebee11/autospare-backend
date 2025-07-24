import React from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // For demo: assume single product order (first item only)
    const orderData = {
      userId: 1, // Replace this with dynamic logged-in user ID when available
      productId: cartItems[0].id,
      quantity: cartItems[0].quantity,
      totalPrice: cartItems[0].price * cartItems[0].quantity
    };

    try {
      const response = await axios.post(
        "http://localhost:8083/api/orders",
        orderData
      );
      alert("✅ Order placed successfully!");
      clearCart();
    } catch (error) {
      console.error("Error placing order:", error);
      alert("❌ Failed to place order.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6 max-w-4xl mx-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-[#1a1d23] rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.imageUrl || item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded mr-6"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400 text-sm">{item.category}</p>
                  <p className="text-green-400 font-semibold mt-1">
                    ₹{item.price}
                  </p>
                  <p className="mt-1 text-sm">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 text-right">
            <h2 className="text-2xl font-semibold">
              Total: ₹{calculateTotal()}
            </h2>
            <button
              onClick={handleCheckout}
              className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
