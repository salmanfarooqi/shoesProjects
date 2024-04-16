import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick-theme.css';
// import "./HomeSlider.css"; // Import your custom CSS file

function HomeSlider({ testimonials, className }) {
  const [activeDot, setActiveDot] = useState(0); // State to track active dot index
  const [textVisible, setTextVisible] = useState(true); // State to control text visibility

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    dots: false,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // dots: false,
    // autoplay: true,
    // speed: 500,
    // autoplaySpeed: 3000,
    appendDots: dots => (
      <div className="dots-container">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={activeDot === i ? "active-dot" : "dot"}></div> // Custom dot component with active class
    ),
    beforeChange: (oldIndex, newIndex) => {
      setActiveDot(newIndex);
      setTextVisible(false); // Hide text when slider changes
    },
    afterChange: () => setTextVisible(true) // Show text after slider changes
  };

  return (
    <div className="slider-container relative"> {/* Set the height of the slider container to h-screen */}
      <Slider {...settings}>
        <div>
          {/* slider1: Make the image fill the entire slider container */}
          <div className="relative">
            <img src="/public/Home/img_bg_1.jpg" alt="" className="w-full h-[400px] object-cover" />
            <div className={textVisible ? "text-overlay" : "text-overlay hidden"}>
              <p className="text-5xl text-white font-bold py-1">MENS</p>
              <p className="text-3xl text-white py-1">SHOES</p>
              <p className="text-5xl text-white font-thin py-1">COLLECTION</p>
              <p className="text-2xl py-1">New Trending Shoes</p>
              <Link to="/Men" className="bg-[#d9f4f0] hover:bg-[#88C8BC]  px-10 py-4 mt-10 text-black text-lg rounded-full">    <button className="sm:px-10 py-4 mt-6  text-black text-lg rounded-full">SHOP COLLECTION</button></Link>
            </div>
          </div>
        </div>
        
        <div>
          {/* slider2: Make the image fill the entire slider container */}
          <div className="relative">
            <img src="/public/Home/img_bg_2.jpg" alt="" className="w-full h-[400px] object-cover" />
            <div className={textVisible ? "text-overlay" : "text-overlay hidden"}>
              <p className="text-5xl text-white font-bold">HUGE</p>
              <p className="text-3xl py-1 text-white">SALE</p>
              <p className="text-5xl py-1 text-white font-thin">50% OFF</p>
              <p className="text-2xl py-1">Big sale sandals</p>
             <Link to="/Women" className="bg-[#d9f4f0] hover:bg-[#88C8BC] px-10 py-4 mt-10  text-black text-lg rounded-full"> <button className="sm:px-10 py-4 mt-6  text-black text-lg rounded-full">SHOP COLLECTION</button></Link>
            </div>
          </div>
        </div>
       
        <div>
          {/* slider3: Make the image fill the entire slider container */}
          <div className="relative">
            <img src="/public/Home/img_bg_3.jpg" alt="" className="w-full h-[400px] object-cover" />
            <div className={textVisible ? "text-overlay" : "text-overlay hidden"}>
              <p className="text-5xl text-white font-bold">NEW</p>
              <p className="text-3xl py-1 text-white">ARRIVAL</p>
              <p className="text-5xl py-1 text-white font-thin">UP TO 30% OFF</p>
              <p className="text-2xl py-1">New stylish shoes for men</p>
             <Link to="/Men" className="bg-[#d9f4f0] hover:bg-[#88C8BC]  px-10 py-4 mt-10  text-black text-lg rounded-full"> <button className="sm:px-10 py-4 mt-6  text-black text-lg rounded-full">SHOP COLLECTION</button> </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
