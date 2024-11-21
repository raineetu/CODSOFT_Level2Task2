import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import Login from "../Auth/Login.jsx";
import Signup from "../Auth/Signup.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };
  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full rounded-[2vh] shadow-lg flex items-center py-4 px-4 justify-between">
        {/* Logo */}
        <div className="w-[10%]">
          <img src="/logo.png" alt="Logo" className="w-[10vh] h-[10vh]" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-gray-100">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`w-full space-x-10 md:w-[35%] md:flex items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-[15vh] md:top-auto left-0 md:left-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
        >
          <li className="cursor-pointer hover:text-blue-400 px-[7vh] text-white text-2xl font-bold flex">
            <FaHome className="mr-2" /> Home
          </li>
          <li className="cursor-pointer hover:text-blue-400 px-[7vh] text-white text-2xl font-bold flex">
            <FaHome className="mr-2" /> Home
          </li>
          <li className="cursor-pointer hover:text-blue-400 px-[7vh] text-white text-2xl font-bold flex">
            <FaHome className="mr-2" /> Home
          </li>
        </ul>

        {/* Profile Section */}
        <div className="relative w-[15%] flex justify-end">
          <button
            onClick={handleLoginClick}
            className="w-[10vh] h-[5vh] bg-red-400 text-white font-bold rounded-[1vh] shadow-lg mr-2"
          >
            Login
          </button>
          <button
            className="w-[10vh] h-[5vh] bg-green-400 text-white font-bold rounded-[1vh] shadow-lg"         
            onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>

      {/* Conditional Rendering for Login Box */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Click outside the box to close */}
          <div
            className="absolute inset-0"
            onClick={handleCloseLogin}
          ></div>         
            <Login />
        </div>
      )}

      {/* Conditional Rendering for Signup Box */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Click outside the box to close */}
          <div
            className="absolute inset-0"
            onClick={handleCloseRegister}
          ></div>         
            <Signup />
        </div>
      )}
    </>
  );
}

export default Navbar;
