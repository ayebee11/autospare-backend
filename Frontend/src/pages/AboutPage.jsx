import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
          About AutoSpare
        </h1>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          <strong>AutoSpare</strong> is a modern, responsive web application built to simulate
          a professional-grade spare parts shopping experience. It includes dynamic product
          listings, category filtering, a sleek cart system, and a premium UI design — all
          optimized for real-world deployment.
        </p>

        <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
          👨‍💻 About the Developer
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I’m <strong>Armaan Deep Singh Bedi</strong>, currently a <strong>B.Tech CSE 4th Year</strong> student at <strong>Manipal University Jaipur</strong>.
          I designed and developed this entire website from scratch as part of my internship
          with <strong>Maruti Suzuki India Limited</strong>.
        </p>
        <p className="text-gray-400 italic mb-6">
          My goal was to deliver a clean, modern user experience that reflects
          professionalism, responsiveness, and real-world UI/UX sensibilities.
        </p>

        <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
          🛠 Tech Stack Used
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>React.js (with React Router)</li>
          <li>Tailwind CSS for UI and responsiveness</li>
          <li>JavaScript & JSX for frontend logic</li>
          <li>Static assets organized via public folder</li>
          <li>Modular component-based architecture</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-300 mt-10 mb-4">
          🚀 Future Scope
        </h2>
        <p className="text-gray-300 mb-6">
          This project can be extended with user authentication, backend APIs for real-time
          product data, admin dashboards, and order tracking. Integration with a database
          and payment gateway would bring it closer to a full production e-commerce platform.
        </p>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">© 2025 Armaan Deep Singh Bedi</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
