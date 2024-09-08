import { useState } from 'react';
import { Link } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false); 
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false); 
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center font-medium space-x-7">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
            alt="Pinterest"
            className="h-11"
          />
          <h1 className="text-rose-700 font-bold text-xl">Pixplore</h1>
          <nav className="hidden md:flex space-x-7">
           
            <Link to="/home" className="hover:text-rose-700">
              Home
            </Link>
            <Link to="/explore" className="hover:text-rose-700">
              Explore
            </Link>
            <Link to="/about" className="hover:text-rose-700">
              About
            </Link>
            
            <Link to="/generateAi" className="hover:text-rose-700">
              Generate Image
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-7">
          <button
            onClick={handleLoginClick}
            className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700 font-medium"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="bg-gray-300 rounded-full px-4 py-2 hover:bg-gray-400 font-medium"
          >
            Signup
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-rose-700 hover:border-rose-700"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/home" className="hover:text-rose-700">
                Home
              </Link>
             
              <Link to="/explore" className="hover:text-rose-700">
                Explore
              </Link>
              <Link to="/about" className="hover:text-rose-700">
                About
              </Link>
              
              <Link to="/generateAi" className="hover:text-rose-700">
                Generate Image
              </Link>
              <button
                onClick={handleLoginClick}
                className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700 font-medium"
              >
                Login
              </button>
              <button
                onClick={handleSignupClick}
                className="bg-gray-300 rounded-full px-4 py-2 hover:bg-gray-400 font-medium"
              >
                Signup
              </button>
            </nav>
          </div>
        )}
      </header>

      {isLoginOpen && (
        <div
          id="login-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <Login />
            <button
              onClick={closeLoginModal}
              className="mt-4 text-red-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isSignupOpen && (
        <div
          id="signup-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <Register />
            <button
              onClick={closeSignupModal}
              className="mt-4 text-red-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
