import { useState } from 'react';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Eye from "../components/Eye";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    console.log('FormData being sent:', formData);
    try {
      const response = await axios.post('http://localhost:4000/api/v1/auth/signup', formData, { withCredentials: true });

      if (response.data.success) {
        toast.success('Registered successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Wait 3 seconds for toast to finish before navigating
      }
    } catch (error) {
      console.log('Error details:', error);
      toast.error('Registration failed!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'>
        <div className='flex justify-center mb-4'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png" alt="Pinterest" className='h-12'/>
        </div>
        <h2 className='text-2xl font-semibold text-center mb-2'>Welcome to Pinterest</h2>
        <h3 className='flex justify-center mb-3 mt-0'>Find new ideas to try</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='email' id="email" value={formData.email} onChange={handleChange} placeholder="Email" className='common-input' required />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-semibold text-gray-700'>Password</label>
            <Eye id="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-sm font-semibold text-gray-700'>Confirm Password</label>
            <Eye id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <button type='submit' className='common-btn flex items-center justify-center w-full border border-gray-300 rounded-full py-2 text-sm font-medium text-white bg-red-600'>
            Continue
          </button>
          <div className="flex items-center justify-center mt-6 mb-4">
            <span className="text-black font-semibold">OR</span>
          </div>
          <button type="button" className="flex items-center justify-center w-full border border-gray-300 rounded-full py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <FcGoogle />
            <span className="ml-2">Continue with Google</span>
          </button>
          <p className="flex items-center justify-center mt-6 mb-4">Already a member? <Link to="/login" className="text-blue-500">Login</Link></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
