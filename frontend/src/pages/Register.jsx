/* eslint-disable no-unused-vars */
import React from 'react'
import { Link} from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className=' min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md'> 
        <div className='flex justify-center mb-4'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png" alt="Pinterest" className='h-12'/>
        </div>
        <h2 className='text-2xl font-semibold text-center mb-2'>
        Welcome to Pinterest
        </h2>
        <h3 className='flex justify-center mb-3 mt-0'>Find new ideas to try</h3>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 '>
              Email
            </label>
            <input type='email' id="email" placeholder="Email" className='common-input' ></input>
          </div>

          <div className='mb-4'>
            <label htmlFor='password'   className='block text-sm font-medium text-gray-700 '>
              Password
            </label>
           
            <div className="relative">
            <input type='password' id="password" placeholder=" Create a Password"    className="common-input pl-10" required/>
            <FaEye className="absolute right-5 top-1/2 transform -translate-y-1/2" />
            </div>
            </div>
            <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
              Birthdate
            </label>
            <div className="relative">
              <input
                type="text"
                id="birthdate"
                placeholder="dd-mm-yyyy"
                className="common-input pl-10"
                required
              />
              <CiCalendarDate className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <button type='submit' className='common-btn'>
            Continue
          </button>
          <div className="flex items-center justify-center mt-6 mb-4">
            <span className="text-gray-400">OR</span>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full border border-gray-300 rounded-full py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle />
<span className="ml-2">Continue with Google</span>
      

           
          </button>

     <p className="flex items-center justify-center mt-6 mb-4">Already a member?<Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register