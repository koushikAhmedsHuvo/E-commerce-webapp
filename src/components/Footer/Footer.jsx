import React from 'react';
import logo from '../../assets/Logo1.png';
import us from '../../assets/us.png';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-[1440px] h-[590px] bg-[#0E0E0E] py-[120px] px-[120px] font-Barlow">
      <div className="flex flex-row justify-between gap-10 mb-24">
        {/* First part */}
        <div className="flex flex-col gap-6">
          <img src={logo} alt="Logo" className="w-[134px] h-[38px]" />
        </div>

        {/* Second part */}
        <div>
          <h1 className="text-white text-lg font-semibold leading-[21.6px]">
            About us
          </h1>
          <ul className="text-white text-lg font-semibold leading-[21.6px] space-y-2 mt-4">
            <li className="cursor-pointer">Master plan</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="cursor-pointer">Invest</li>
            <li className="cursor-pointer">Pressroom</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Content</li>
          </ul>
        </div>

        {/* Third part */}
        <div>
          <h1 className="text-white text-lg font-semibold leading-[21.6px]">
            Explore EEVE
          </h1>
          <ul className="text-white text-lg font-semibold leading-[21.6px] space-y-2 mt-4">
            <li className="cursor-pointer">Unlock my robot power</li>
            <li className="cursor-pointer">Starlight</li>
            <li className="cursor-pointer">Robot Platform</li>
            <li className="cursor-pointer">EEVE Roadmap</li>
          </ul>
        </div>

        {/* Fourth part */}
        <div>
          <h1 className="text-white text-lg font-semibold leading-[21.6px]">
            Community and support
          </h1>
          <ul className="text-white text-lg font-semibold leading-[21.6px] space-y-2 mt-4">
            <li className="cursor-pointer">Willow X Community</li>
            <li className="cursor-pointer">Developer and Maker access</li>
            <li className="cursor-pointer">Special Cases</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-500 my-6" />

      <div className="flex flex-row justify-between">
        {/* icons */}
        <div className="flex flex-row gap-[11.43px]">
          <FaFacebookF className="text-white w-[11.67px] h-[16.67px]" />
          <IoLogoInstagram className="text-white w-[11.67px] h-[16.67px]" />
          <FaXTwitter className="text-white w-[11.67px] h-[16.67px]" />
          <FaLinkedinIn className="text-white w-[11.67px] h-[16.67px]" />
        </div>

        {/* middle part */}
        <div className="flex flex-row gap-[24px]">
          <ul className="flex flex-row gap-[24px] text-[#81859F] text-lg font-semibold leading-[21.6px]">
            <li className="cursor-pointer">March22 Recap</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">General Terms</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* last part */}
        <div className="flex flex-row gap-8 mb-5">
          <img src={us} alt="US Flag" className="w-[18px] h-[18px]" />
          <h1 className="text-white text-lg font-semibold leading-[21.6px]">
            United States (English)
          </h1>
        </div>
      </div>

      <div className="mt-6 w-full h-[22px] flex justify-center items-center">
        <h1 className="text-white text-lg font-semibold leading-[21.6px]">
          EEVE © 2024. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
