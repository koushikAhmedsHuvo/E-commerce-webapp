import React, { useState } from 'react';
import Chair from '../../assets/chair.png';
import Frame from '../../assets/Frame.png';
import Visibility from '../../assets/visibility.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <div className="w-[1440px] h-[1024px] flex items-center justify-center bg-white">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full h-full">
        {/* Left section */}
        <div className="w-[752px]">
          {/* Form section */}
          <div className="w-[500px] h-[618px] mt-[203px] ml-[126px] gap-[14px] bg-[#FAFAFA] border border-[#F5F5F5] opacity-100 p-[24px]">
            {/* This div contains the signup form and its elements */}
            <div className="text-center w-[452px] h-[116px] gap-6">
              <h1 className="text-[24px] font-semibold text-gray-800">
                Welcome To
              </h1>
              <h1 className="text-[40px] font-bold text-black">
                Furni<span className="font-bold text-[#4977EE]">Flex</span>
              </h1>
              <p className="text-gray-600 text-[16px] font-medium">
                Sign up to purchase your desired products
              </p>
            </div>

            <form action="" className="space-y-4 mt-6">
              {/* First and Last Name */}
              <div className="flex space-x-4">
                <div className="relative w-[219px]">
                  <input
                    type="text"
                    id="firstName"
                    onFocus={() => setFirstNameFocused(true)}
                    onBlur={() => setFirstNameFocused(false)}
                    placeholder=" "
                    className="w-full h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                  />
                  <label
                    htmlFor="firstName"
                    className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                      firstNameFocused ? '-translate-y-6 text-xs' : ''
                    }`}
                  >
                    First name (optional)
                  </label>
                </div>
                <div className="relative w-[219px]">
                  <input
                    type="text"
                    id="lastName"
                    onFocus={() => setLastNameFocused(true)}
                    onBlur={() => setLastNameFocused(false)}
                    placeholder=" "
                    className="w-full h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                  />
                  <label
                    htmlFor="lastName"
                    className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                      lastNameFocused ? '-translate-y-6 text-xs' : ''
                    }`}
                  >
                    Last name (optional)
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder=" "
                  className="w-[452px] h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                    emailFocused ? '-translate-y-6 text-xs' : ''
                  }`}
                >
                  Email
                </label>
              </div>

              {/* Password with visibility icon */}
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  placeholder=" "
                  className="w-[452px] h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                />
                <img
                  src={Visibility}
                  alt="Show password"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                />
                <label
                  htmlFor="password"
                  className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                    passwordFocused ? '-translate-y-6 text-xs' : ''
                  }`}
                >
                  Password
                </label>
              </div>

              {/* Terms and conditions */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label
                  htmlFor="terms"
                  className="text-gray-600 text-[16px] font-medium"
                >
                  Agree to the terms and policy
                </label>
              </div>

              {/* Signup Button */}
              <button className="w-[452px] h-[56px] bg-black text-white font-medium rounded-md">
                Sign Up
              </button>

              {/* Horizontal lines and "or" text */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <hr className="w-[200px] border-t border-gray-300" />
                <span className="text-gray-500">or</span>
                <hr className="w-[200px] border-t border-gray-300" />
              </div>

              {/* Social Sign-ins */}
              <div className="flex space-x-4 mt-4">
                <button className="w-[218px] h-[52px] bg-white border border-[#DEDEDE] rounded-md">
                  Sign in with Google
                </button>
                <button className="w-[218px] h-[52px] bg-white border border-[#DEDEDE] rounded-md">
                  Sign in with Apple
                </button>
              </div>

              {/* Login link */}
              <p className="text-center text-gray-600 mt-4">
                Have an account?{' '}
                <Link to="/" className="text-[#BF2879] hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right section */}
        <div className="relative w-[688px] h-[1024px] bg-[#0000008C]">
          <img src={Chair} alt="Chair" className="w-full h-full object-cover" />
          <img
            src={Frame}
            alt="Frame"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[445px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
