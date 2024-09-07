import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-xl sticky z-50 top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Millenials</div>
        <div className="margin-auto w-1/2 space-x-4 mx-40 ">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link to="/menu" className="text-gray-300 hover:text-white">
            Menu
          </Link>
          <Link to="/about-us" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <Link to="/item-selection" className="text-gray-300 hover:text-white">
            Item Selection
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
