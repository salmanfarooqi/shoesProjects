
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
// import LoginForm from './pages/Login';
// // import RegisterForm from './components/Register';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Women from './pages/Women';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginForm from './pages/Login';
import SignUp from './pages/SignUp';
import ThankYouPage from './pages/ThankYour';
import Checkout from './pages/Checkout';
// import AboutUs from './pages/AboutUs';
// import Cart from './pages/Cart'
// import SignUp from './pages/SignUp'
// import Shop from './pages/Shop';
// import Blogs from './pages/Blogs';
// import ContactForm from './pages/ContactUs';
// import Checkout from './pages/Checkout';
// import ThankYouPage from './pages/ThankYour';
import ProtectedRoute from './components/ProtectRoute';

function App() {


  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>} />
   <Route path='/Men' element={ <Men/>} />
   <Route path='/cart' element={<ProtectedRoute component={Cart} />}/>
   <Route path='/ProductDetails/:id' element={<ProductDetails/>} />
   <Route path='/Women' element={<Women/>} />
   <Route  path='/About' element={<About/>} />
   <Route path='/Contact' element={<Contact/>} />
   <Route  path='/login' element={<LoginForm/>} />
   <Route path='/Register' element={<SignUp/>} />
   <Route path='/ThankYou' element={<ThankYouPage/>} /> 
   <Route path='/checkout' element={<Checkout/>} /> 
      {/* 
      <Route  path='/login' element={<LoginForm/>} />
     
      <Route path='/Shop' element={< Shop />} />
      <Route path='/Blogs' element={<Blogs/>} />
      <Route path='/contact' element={<ProtectRoute component={ContactForm} />} />
     
      <Route path='/ThankYou' element={<ThankYouPage/>} /> */}
      
    
    </Routes>
  </div>
  )
}

export default App
