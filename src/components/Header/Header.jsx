import React from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import logo from '../../assets/Logo.png';
import dp from '../../assets/Account.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-12 flex items-center justify-between w-[1440px] h-[118px] border-b border-[#F1F1F1]">
      {/* Left part */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[134px] h-[38px] gap-6" />
      </div>

      {/* Center part */}
      <nav className="flex-grow w-[535px] h-[38px]">
        <ul className="flex space-x-8 justify-center">
          <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
            Home
          </li>
          <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
            Products
          </li>
          <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
            Categories
          </li>
          <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
            Custom
          </li>
          <li className="text-[#202020] cursor-pointer font-bar-m font-medium text-lg leading-[21.6px] px-4 py-2 rounded-md">
            Blog
          </li>
        </ul>
      </nav>

      {/* Right part */}
      <div className="flex items-center gap-[56px] opacity-100">
        <div className="relative">
          <LiaShoppingBagSolid className="text-[#323232] text-2xl cursor-pointer w-[33px] h-[34px] top-[2.67px] left-[8.67px]" />
          <span className="absolute bg-[#323232] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center top-[18px] left-[17px]">
            3
          </span>
        </div>

        <img
          src={dp}
          alt="Account"
          className="w-[40px] h-[40px] rounded-full border border-gray-300 "
        />
      </div>
    </header>
  );
};

export default Header;
