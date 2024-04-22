// Import necessary dependencies
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../context/AuthContext.jsx';
import HashLoader from 'react-spinners/HashLoader';

// Define the base URL for API requests
export const BASE_URL = "http://localhost:5000/api/v1";

const Login = () => {
  // State for form data and loading indicator
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Authentication context
  const { dispatch } = useContext(authContext);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Make a POST request to the login endpoint
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Parse the response JSON
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // Dispatch a login success action
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role
        }
      });

      // Output login data to console for debugging
      console.log(result, 'login data');

      // Reset loading state, show success toast, and navigate to home
      setLoading(false);
      toast.success(result.message);
      navigate('./home');
    } catch (error) {
      // Handle errors, show error toast, and reset loading state
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Hello!<span className='text-primaryColor'> Welcome</span> Back🎉🎊
        </h3>

        <form action="" className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input
              type="email"
              placeholder='Enter your Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange} // Changed from onClick to onChange
              className='w-full py-3 border-b gap-[10px] border-solid border-[#0066ff61] focus:outline-none
          focus:border-b-primaryColor text-[20px] leading-7 text-headingColor
          placeholder:text-textColor cursor-pointer'
              required
            />
          </div>
          <div className='mb-5'>
            <input
              type="password"
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange} // Changed from onClick to onChange
              className='w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
          focus:border-b-primaryColor text-[20px] leading-7 text-headingColor
          placeholder:text-textColor cursor-pointer'
              required
            />
          </div>

          <div className='mt-7'>
            <button
              type='submit'
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
            >
              Login
              {loading ? <HashLoader size={25} color='#fff' /> : null} {/* Corrected from Login */}
            </button>
          </div>
          <p className='mt-5 text-textColor text-center'>
            Don&apos;t have an account? <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
