import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${window.RUNTIME_CONFIG?.USER_SERVICE_URL || "http://localhost:8081/api/users"}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();

      // Save JWT and user info (optional)
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.id); // You can store userId if needed

      // Navigate to home or dashboard
      navigate("/");

    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1115] via-[#1a1d23] to-[#0f1115] flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-600"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login to <span className="text-blue-400">AutoSpare</span>
        </h2>

        {error && (
          <div className="mb-4 text-red-400 text-sm text-center">{error}</div>
        )}

        <label className="block mb-2 text-gray-300 font-medium">Email</label>
        <input
          type="email"
          className="w-full mb-4 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-gray-300 font-medium">Password</label>
        <input
          type="password"
          className="w-full mb-6 p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
