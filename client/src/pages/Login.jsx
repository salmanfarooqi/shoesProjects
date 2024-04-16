
import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import {toast,ToastContainer} from 'react-toastify'

function LoginForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/login", {
        email,
        password
      });
      // if(response){
        console.log(response?.data.token,"res")
      localStorage.setItem("token",response?.data?.token)
      localStorage.setItem("userId",response?.data?.userId)
   
      console.log(response)
      toast.success(response?.data?.message)
    
     setTimeout(() => {
      navigate("/");
    }, 2000); 
    
      
      
    
    } catch (error) {
          toast.error(error.response.data.message)
    
    }
  };

  return (
    <Layout>
      <div className="container mx-auto w-full">
        <h3 className="text-center text-2xl py-4 font-semibold">Sign In To Your Account</h3>
        <div className="flex justify-center mb-2">
          <div className="w-full lg:w-1/2 xl:w-1/3 border rounded-lg p-5 bg-[#EFF2F1]">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="email">Email:</label>
                <input type="email" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input type="password" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} required />
              </div>
              {/* <div className="mb-3">
                <input type="checkbox" className="form-checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className="ml-2">Remember me</label>
              </div> */}
              <button type="submit" className="block w-full bg-blue-500   mt-4 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:bg-blue-600">Login</button>
              <div className="text-center mt-4">
                <Link to={"/register"}><p className="block mt-2 text-blue-500 hover:text-blue-700">New here? Register</p></Link>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </Layout>
  );
}

export default LoginForm;

