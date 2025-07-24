import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "USER", // default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/api/users/register", formData);
      alert("✅ Registered successfully! You can now log in.");
      // optionally redirect to login page
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      alert("❌ Registration failed. Try another email.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1115] via-[#1a1d23] to-[#0f1115] flex justify-center items-center px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-600"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Register on <span className="text-blue-400">AutoSpare</span>
        </h2>

        <label className="block mb-2 text-gray-300 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-gray-300 font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="block mb-2 text-gray-300 font-medium">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mb-6 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
