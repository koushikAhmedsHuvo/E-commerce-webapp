import React, { useState } from 'react';
import Chair from '../../assets/chair.png';
import Frame from '../../assets/Frame.png';
import Visibility from '../../assets/visibility.png';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../../assets/google.png';
import Apple from '../../assets/apple.png';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Check if email already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = existingUsers.some((user) => user.email === email);

    if (emailExists) {
      setError('Email is already in use. Please use a different email.');
      setIsLoading(false);
      return;
    }

    // Save new user to local storage
    const newUser = { firstName, lastName, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Clear form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setIsLoading(false);

    // Redirect to login page
    navigate('/');
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-[1440px] h-[1024px] flex items-center justify-center bg-white">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full h-full">
        {/* Left section */}
        <div className="w-[752px]">
          {/* Form section */}
          <div className="w-[500px] h-[618px] mt-[203px] ml-[126px] gap-[14px] bg-[#FAFAFA] border border-[#F5F5F5] opacity-100 p-[24px]">
            <div className="text-center w-[452px] h-[116px] gap-6">
              <h1 className="text-[24px] font-semibold text-gray-800 font-Barlow">
                Welcome To
              </h1>
              <h1 className="text-[40px] font-bold text-black font-Barlow">
                Furni<span className="font-bold text-[#4977EE]">Flex</span>
              </h1>
              <p className="text-gray-600 text-[16px] font-medium">
                Sign up to purchase your desired products
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4 mt-6">
              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* First and Last Name */}
              <div className="flex space-x-4">
                <div className="relative w-[219px]">
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setFirstNameFocused(true)}
                    onBlur={() => setFirstNameFocused(false)}
                    placeholder=" "
                    className="w-full h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                  />
                  <label
                    htmlFor="firstName"
                    className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                      firstNameFocused || firstName
                        ? '-translate-y-6 text-xs'
                        : ''
                    }`}
                  >
                    First name (optional)
                  </label>
                </div>
                <div className="relative w-[219px]">
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setLastNameFocused(true)}
                    onBlur={() => setLastNameFocused(false)}
                    placeholder=" "
                    className="w-full h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                  />
                  <label
                    htmlFor="lastName"
                    className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                      lastNameFocused || lastName
                        ? '-translate-y-6 text-xs'
                        : ''
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder=" "
                  className="w-[452px] h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ${
                    emailFocused || email ? '-translate-y-6 text-xs' : ''
                  }`}
                >
                  Email
                </label>
              </div>

              {/* Password with visibility icon */}
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  placeholder=" "
                  className="w-[452px] h-[52px] px-4 py-2 border border-[#DEDEDE] rounded-md bg-white focus:outline-none"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                >
                  {passwordVisible ? (
                    <MdOutlineVisibility className="w-6 h-6" />
                  ) : (
                    <MdOutlineVisibilityOff className="w-6 h-6" />
                  )}
                </span>
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
                <input type="checkbox" id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-gray-600 text-[16px] font-medium font-Barlow"
                >
                  Agree to the terms and policy
                </label>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-[452px] h-[56px] bg-black text-white font-medium rounded-md ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Signing Up...' : 'Sign Up'}
              </button>

              {/* Horizontal lines and "or" text */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <hr className="w-[200px] border-t border-gray-300" />
                <span className="text-gray-500">or</span>
                <hr className="w-[200px] border-t border-gray-300" />
              </div>

              {/* Social Sign-ins */}
              <div className="flex space-x-4 mt-4">
                <button className="w-[218px] h-[52px] bg-white border border-[#DEDEDE] rounded-md flex items-center justify-center font-Barlow">
                  <img
                    src={Google}
                    alt="Google logo"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  Sign in with Google
                </button>

                <button className="w-[218px] h-[52px] bg-white border border-[#DEDEDE] rounded-md flex items-center justify-center font-Barlow">
                  <img
                    src={Apple}
                    alt="Apple logo"
                    className="mr-2 w-[24px] h-[24px]"
                  />
                  Sign in with Apple
                </button>
              </div>
              <p className="text-center text-gray-600 mt-4 font-Barlow">
                Have an account?{' '}
                <Link to="/" className="text-[#0F3DDE] underline font-Barlow">
                  Signin
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
