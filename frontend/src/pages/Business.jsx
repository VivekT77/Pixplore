import React, { useState } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Business = () => {
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
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b">
        <div className="text-2xl font-semibold flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
            alt="Business Logo"
            className="h-8 w-8 mr-2"
          />
          Business
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-black">Why Pinterest?</a>
          <a href="#" className="hover:text-black">Create content</a>
          <a href="#" className="hover:text-black">Advertise</a>
          <a href="#" className="hover:text-black">News + insights</a>
          <a href="#" className="hover:text-black">Resources</a>
        </nav>
        <div className="space-x-4">
          <button onClick={handleLoginClick} className="py-2 px-4 rounded-full border border-gray-400 hover:bg-gray-100">
            Log in
          </button>
          <button onClick={handleSignupClick} className="py-2 px-4 rounded-full bg-red-600 text-white hover:bg-gray-900">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center p-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Grow your business on Pinterest
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed">
          Pinterest is where people shop, plan, and discover new ideas. With Pinterest ads, you can reach your audience at every stage of the consumer journey. Sign up for a free business account to access ads and other marketing tools.
        </p>
      </main>

      {/* Login Modal */}
      {isLoginOpen && (
        <div
          id="login-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <Login />
            <button onClick={closeLoginModal} className="mt-4 text-red-600 hover:underline">Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div
          id="signup-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <Register />
            <button onClick={closeSignupModal} className="mt-4 text-red-600 hover:underline">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Business;
