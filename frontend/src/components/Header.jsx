import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); // Close signup modal if it's open
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); // Close login modal if it's open
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "login-modal") {
      closeLoginModal();
    }
    if (event.target.id === "signup-modal") {
      closeSignupModal();
    }
  };

  return (
    <>
      <header className={`flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50 ${(isLoginOpen || isSignupOpen) ? 'blur-sm' : ''}`}>
        <div className="flex items-center font-medium space-x-7">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
            alt="Pinterest"
            className="h-11"
          />
          <h1 className="text-rose-700 font-bold text-xl">Pinterest</h1>
          <Link to="/today" className="hover:text-rose-700">
            Today
          </Link>
          <Link to="/watch" className="hover:text-rose-700">
            Watch
          </Link>
          <Link to="/explore" className="hover:text-rose-700">
            Explore
          </Link>
        </div>

        <div className="flex items-center ml-auto font-medium space-x-7">
          <Link to="/about" className="hover:text-rose-700">
            About
          </Link>
          <Link to="/business" className="hover:text-rose-700">
            Business
          </Link>
          <Link to="/blog" className="hover:text-rose-700">
            Blog
          </Link>
          <button onClick={handleLoginClick} className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700 font-medium">
            Login
          </button>
          <button onClick={handleSignupClick} className="bg-gray-300 rounded-full px-4 py-2 hover:bg-gray-400 font-medium">
            Signup
          </button>
        </div> 
      </header>

      {isLoginOpen && (
        <div
          id="login-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
           <Login/>
            <button onClick={closeLoginModal} className="mt-4 text-red-600 hover:underline">Close</button>
          </div>
        </div>
      )}
  
      {isSignupOpen && (
        <div
          id="signup-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
          <Register/>
            <button onClick={closeSignupModal} className="mt-4 text-red-600 hover:underline">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
