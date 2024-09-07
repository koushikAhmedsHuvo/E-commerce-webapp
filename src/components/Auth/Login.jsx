import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Chair from '../../assets/chair.png';
import Frame from '../../assets/Frame.png';
import Google from '../../assets/google.png';
import Apple from '../../assets/apple.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));

        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-[1440px] h-[1024px] flex items-center justify-center bg-white">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full h-full">
        {/* Left section */}
        <div className="w-[752px]">
          <div className="w-[500px] h-[618px] mt-[203px] ml-[126px] gap-[14px] bg-[#FAFAFA] border border-[#F5F5F5] opacity-100 p-[24px]">
            <div className="w-[452px] h-[116px] flex items-center justify-center">
              <div className="mr-24">
                <h1 className="text-[24px] font-semibold font-Barlow text-gray-800">
                  Welcome Back!
                </h1>
                <p className="text-gray-600 text-[16px] font-medium font-Barlow">
                  Enter your credentials to access your account
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
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

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

              <div className="flex justify-end">
                <p className="text-right text-gray-600 text-sm">
                  <a
                    href="#"
                    className="text-[#BF2879] hover:underline font-Barlow"
                  >
                    Forgot password?
                  </a>
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label
                  htmlFor="terms"
                  className="text-gray-600 text-[16px] font-medium font-Barlow"
                >
                  Agree to the terms and policy
                </label>
              </div>

              <button
                type="submit"
                className="w-[452px] h-[56px] bg-black text-white font-medium rounded-md"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="flex items-center justify-center space-x-4 mt-4">
                <hr className="w-[200px] border-t border-gray-300" />
                <span className="text-gray-500">or</span>
                <hr className="w-[200px] border-t border-gray-300" />
              </div>

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
                Don’t have an account?{' '}
                <Link to="/signup" className="text-[#0F3DDE] underline">
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

export default Login;
