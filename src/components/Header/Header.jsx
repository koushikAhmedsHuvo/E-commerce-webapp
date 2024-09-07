import React, { useState, useContext } from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import logo from '../../assets/Logo.png';
import dp from '../../assets/Account.png';
import { CartContext } from '../context/CartContext'; // Adjust path if necessary
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const { logout } = useContext(AuthContext); // Get logout function from AuthContext
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle logout and redirect
  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    navigate('/'); // Redirect to login or home page after logout
  };

  return (
    <header className="bg-white shadow-md py-4 px-12 flex items-center justify-between w-[1440px] h-[118px] border-b border-[#F1F1F1]">
      {/* Left part */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[134px] h-[38px] gap-6" />
      </div>

      {/* Center part */}
      <nav className="flex-grow w-[535px] h-[38px]">
        <ul className="flex space-x-8 justify-center">
          <Link to="/dashboard">
            <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
              Home
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
              Products
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
              Categories
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
              Custom
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
              Order
            </li>
          </Link>
        </ul>
      </nav>

      {/* Right part */}
      <div className="flex items-center gap-[56px] opacity-100">
        <Link to="/order" className="relative">
          <LiaShoppingBagSolid className="text-[#323232] text-2xl cursor-pointer w-[33px] h-[34px] top-[2.67px] left-[8.67px]" />
          <span className="absolute bg-[#323232] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center top-[18px] left-[17px]">
            {getCartCount()}
          </span>
        </Link>

        <div className="relative">
          <img
            src={dp}
            alt="Account"
            className="w-[40px] h-[40px] rounded-full border border-gray-300 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul className="list-none p-2">
                <li
                  className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={handleLogout} // Attach the logout handler
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
