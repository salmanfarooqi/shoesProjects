import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate();

  const navbardata = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "MEN",
      path: "/Men",
    },

    {
      title: "WOMEN",
      path: "/Women",
    },

    {
      title: "ABOUT",
      path: "/About",
    },
    {
      title: "CONTACT",
      path: "/contact",
    },
  ];

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setshowMenu(false); // Close the menu if it's open
  };
  const handleCheckout = () => {
    navigate('/');
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#FEFEFE] h-20 sticky top-0 z-50">
      <div className="flex w-[70%]">
        {/* Left section */}
        <div className="w-1/2 hidden md:flex justify-start items-center text-center gap-4 lg:gap-10 ">
          {navbardata?.map((item, index) => (
            <Link
              key={index}
              to={item?.path}
              onClick={handleMenuClick}
              className=""
            >
              {item?.title}
            </Link>
          ))}
        </div>

        {/* Right section */}
        <div className="w-1/2 justify-end items-center text-2xl gap-7 hidden md:flex">
        <Link to="/cart" className=" ">
          <p className="flex justify-center items-center gap-2 text-sm">  <CiShoppingCart  className="w-4 h-4"/> cart [0]</p>
          </Link>
          {/* <Link to="/login" className="hover:text-[#6A6A6A]">
            <BsFillPersonFill />
          </Link> */}
          <button className="text-xs  bg-[#88C8BC] px-5 rounded-full py-2 border border-[#306259] hover:bg-[#23923D]">SIGN UP</button>
          
        </div>

        {/* Hamburger menu for mobile */}
        <div className="text-black md:hidden f">
          <RxHamburgerMenu
            className="text-3xl "
            onClick={() => setshowMenu(!showMenu)}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`w-full menu-container  ${showMenu ? "show-menu" : ""}`}>
        <div className="flex justify-end ">
          <RxCross2
            className="text-3xl m-4 text-white"
            onClick={() => setshowMenu(false)}
          />
        </div>
        <div className="flex flex-col items-center text-gray-400 font-semibold">
          <div className="flex items-center flex-col text-white text-2xl text-center gap-8">
            {navbardata?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                onClick={handleMenuClick}
                className={
                  "hover:border-b-4 hover:border-yellow-600 hover:text-white"
                }
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center text-2xl gap-7 md:hidden">
            <Link to="/login" className="hover:text-white">
              <BsFillPersonFill />
            </Link>
            <Link to="/cart" className="hover:text-white">
              <CiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
