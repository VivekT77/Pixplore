import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

import Eye from "../components/Eye";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', formData);
      if (response.data.success) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=' min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'> 
        <div className='flex justify-center mb-4'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png" alt="Pinterest" className='h-12'/>
        </div>
        <h2 className='text-2xl font-semibold text-center mb-6'>
        Log in to see more
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-semibold text-gray-700 '>
              Email
            </label>
            <input  aria-invalid ="false" autoComplete="email" placeholder="Email" type='email' id="email" className='common-input  hover:focus:ring-blue-60 focus:ring-2' ></input>
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-semibold text-gray-700 '>
              Password
            </label>
              <Eye  onChange={handleChange}/>

          </div>

          <h1 className="text-sm font-medium hover:underline">Forgot your password?</h1>

          <div className="flex flex-col items-center space-y-4">
          <button type='submit' className=' mt-2 flex items-center justify-center w-full max-w-xs py-2 space-x-2 text-white bg-red-600 rounded-full shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:outline-none"-btn'> Log in
          </button>
          </div>

        </form>

        <p className="my-2 overflow-hidden text-center font-medium text-black">OR</p>

      <div className="flex flex-col items-center space-y-4">
      {/* Facebook Button */}
      <button className="flex items-center justify-center w-full max-w-xs py-2 space-x-2 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.596 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.293H9.692v-3.622h3.128v-2.667c0-3.1 1.892-4.792 4.66-4.792 1.325 0 2.462.097 2.795.143v3.244l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.309h3.587l-.468 3.622h-3.12V24h6.116c.729 0 1.325-.597 1.325-1.334V1.333C24 .597 23.403 0 22.675 0z"/>
        </svg>
        <span>Continue with Facebook</span>
      </button>

      {/* Google Button */}
      <button className="flex items-center justify-center w-full max-w-xs py-2 space-x-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:outline-none">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
        <span>Continue with Google</span>
      </button>
    </div>

          <div className="mt-4 text-center text-sm">
            <span>Not on Pinterest yet?
              <Link to="/register" className="font-medium text-pinterest hover:underline">Register</Link>
            </span>
          </div>

      </div>
    </div>
  )
}

export default Login