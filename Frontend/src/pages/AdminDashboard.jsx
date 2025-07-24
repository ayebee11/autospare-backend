import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    totalProducts: 0,
    topProducts: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await axios.get(`${window._env_.ORDER_SERVICE_URL}/admin/weekly-orders`);
        const users = await axios.get(`${window._env_.USER_SERVICE_URL}/admin/total-users`);
        const revenue = await axios.get(`${window._env_.ORDER_SERVICE_URL}/admin/total-revenue`);
        const products = await axios.get(`${window._env_.PRODUCT_SERVICE_URL}/admin/total-products`);
        const top = await axios.get(`${window._env_.ORDER_SERVICE_URL}/admin/top-products`);

        setMetrics({
          totalOrders: orders.data.totalOrders,
          totalUsers: users.data.totalUsers,
          totalRevenue: revenue.data.totalRevenue,
          totalProducts: products.data.totalProducts,
          topProducts: top.data // expects [ [productId, quantity], ... ]
        });
      } catch (err) {
        console.error("Error fetching admin metrics:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="text-white">Admin </span>
        <span className="text-yellow-400">Dashboard</span>
      </h1>

      <div className="flex justify-center mb-8">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300">
          Overview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Orders (This Week)</h2>
          <p className="text-3xl font-bold text-green-400">{metrics.totalOrders}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-blue-400">{metrics.totalUsers}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold text-yellow-400">₹ {metrics.totalRevenue}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Top-Selling Products</h2>
          {metrics.topProducts && metrics.topProducts.length > 0 ? (
            <ul className="text-left space-y-1">
              {metrics.topProducts.map(([productId, qty], index) => (
                <li key={index} className="text-gray-300">
                  Product ID #{productId} — {qty} sold
                </li>
              ))}
            </ul>
          ) : (
            <p className="italic text-gray-500">No data</p>
          )}
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Products</h2>
          <p className="text-3xl font-bold text-pink-400">{metrics.totalProducts}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
