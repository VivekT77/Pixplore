import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Eye = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative ">
      <input
        type={passwordVisible ? 'text' : 'password'}
        aria-invalid ="false" autoComplete="email" placeholder="Password"  id="email" className='common-input  hover:focus:ring-blue-60 focus:ring-2'
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  );
};

export default Eye;
