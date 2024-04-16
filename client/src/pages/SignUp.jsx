import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) {
        throw new Error("Please fill in all fields correctly.");
      }

      const response = await axios.post("http://localhost:9000/signup", {
        name,
        email,
        password
      });

      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      password: ''
    };

    if (!name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!email || !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <Layout>
      <div className="container mx-auto p-5">
        <h3 className="text-center py-4 text-2xl font-semibold">Register Your Account</h3>
        <div className="flex justify-center mb-2">
          <div className="w-full lg:w-1/2 border rounded-lg p-5 bg-[#EFF2F1]">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="name">Name:</label>
                <input type="text" className={`block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400 ${errors.name && 'border-red-500'}`} id="name" placeholder="Enter name" name="name" value={name} onChange={handleChange} required />
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="email">Email:</label>
                <input type="email" className={`block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400 ${errors.email && 'border-red-500'}`} id="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} required />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} className={`block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400 ${errors.password && 'border-red-500'}`} id="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} required />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.071 4.929A15.909 15.909 0 0112 10c-1.434.517-2.908.879-4.428 1.072A1.988 1.988 0 005 12c0 .741.402 1.429 1.044 1.794C7.187 14.565 9.734 15.5 12 15.5s4.813-.935 5.956-1.706C18.598 13.429 19 12.741 19 12a1.988 1.988 0 00-.572-1.072zM12 13c-1.321 0-2.54-.221-3.637-.55-.286-.094-.563-.2-.828-.312l1.287-1.287a.356.356 0 01.504 0l.495.495a.356.356 0 00.504 0l.495-.495a.356.356 0 01.504 0l1.287 1.287c-.265.113-.543.219-.828.312C14.54 12.779 13.32 13 12 13zM12 9a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </div>
                {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
              </div>
              <button type="submit" className="block w-full bg-blue-500   text-black font-semibold py-2 px-4 rounded  focus:outline-none focus:bg-blue-600">Sign Up</button>
              <div className="text-center mt-3">
                <Link to="/login"><p className="block text-blue-500 hover:text-blue-700">Already have an account? Login</p></Link>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
}

export default SignUp;
