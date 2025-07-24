import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">AutoSpare</div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/register" className="hover:text-yellow-400">Register</Link></li>
        <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
        <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
        <li><Link to="/cart" className="hover:text-yellow-400">Cart</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/admin" className="hover:text-yellow-400">Admin</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;