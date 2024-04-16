// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaCartShopping } from "react-icons/fa6";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross2 } from "react-icons/rx";
// import { CiShoppingCart } from "react-icons/ci";

// const Navbar = () => {
//   const [showMenu, setshowMenu] = useState(false);
//   const navigate = useNavigate();

//   const navbardata = [
//     {
//       title: "HOME",
//       path: "/",
//     },
//     {
//       title: "MEN",
//       path: "/Men",
//     },

//     {
//       title: "WOMEN",
//       path: "/Women",
//     },

//     {
//       title: "ABOUT",
//       path: "/About",
//     },
//     {
//       title: "CONTACT",
//       path: "/contact",
//     },
//   ];

//   const handleMenuClick = () => {
//     // Scroll to the top of the page
//     window.scrollTo(0, 0);
//     setshowMenu(false); // Close the menu if it's open
//   };
//   const handleCheckout = () => {
//     navigate('/');
//   };

//   return (
//     <div className="w-full flex justify-center items-center bg-[#FEFEFE] h-20 sticky top-0 z-50">
//       <div className="flex w-[70%]">
//         {/* Left section */}
//         <div className="w-1/2 hidden md:flex justify-start items-center text-center gap-4 lg:gap-10 ">
//           {navbardata?.map((item, index) => (
//             <Link
//               key={index}
//               to={item?.path}
//               onClick={handleMenuClick}
//               className=""
//             >
//               {item?.title}
//             </Link>
//           ))}
//         </div>

//         {/* Right section */}
//         <div className="w-1/2 justify-end items-center text-2xl gap-7 hidden md:flex">
//         <Link to="/cart" className=" ">
//           <p className="flex justify-center items-center gap-2 text-sm">  <CiShoppingCart  className="w-4 h-4"/> cart [0]</p>
//           </Link>
//           {/* <Link to="/login" className="hover:text-[#6A6A6A]">
//             <BsFillPersonFill />
//           </Link> */}
//           <button className="text-xs  bg-[#88C8BC] px-5 rounded-full py-2 border border-[#306259] hover:bg-[#23923D]">SIGN UP</button>
          
//         </div>

//         {/* Hamburger menu for mobile */}
//         <div className="text-black md:hidden f">
//           <RxHamburgerMenu
//             className="text-3xl "
//             onClick={() => setshowMenu(!showMenu)}
//           />
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`w-full menu-container  ${showMenu ? "show-menu" : ""}`}>
//         <div className="flex justify-end ">
//           <RxCross2
//             className="text-3xl m-4 text-white"
//             onClick={() => setshowMenu(false)}
//           />
//         </div>
//         <div className="flex flex-col items-center text-gray-400 font-semibold">
//           <div className="flex items-center flex-col text-white text-2xl text-center gap-8">
//             {navbardata?.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item?.path}
//                 onClick={handleMenuClick}
//                 className={
//                   "hover:border-b-4 hover:border-yellow-600 hover:text-white"
//                 }
//               >
//                 {item?.title}
//               </Link>
//             ))}
//           </div>
//           <div className="flex items-center text-2xl gap-7 md:hidden">
//             <Link to="/login" className="hover:text-white">
//               <BsFillPersonFill />
//             </Link>
//             <Link to="/cart" className="hover:text-white">
//               <CiShoppingCart />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownManuallyClosed, setDropdownManuallyClosed] = useState(false); // State to track manual close
  const navigate = useNavigate();
  const [cartLength,setCartLenght]=useState(0)

  const navbardata = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "MEN",
      path: "/Men",
      dropdownOptions: [
        { title: "ProductDetails", path: "/ProductDetails" },
        { title: "Cart", path: "/cart" },
        { title: "CONTACT", path: "/Contact" },
      ],
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
    window.scrollTo(0, 0);
    setShowMenu(false);
  };

  const handleDropdownClick = (option) => {
    setDropdownManuallyClosed(true); // Dropdown manually closed by clicking an option
    navigate(option);
  };

  const handleCheckout = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:9000/getCartData');
        const data = response.data;
        const userIdFromLocalStorage = localStorage.getItem('userId');
        const filteredCartItems = data.filter(item => item.userId === userIdFromLocalStorage);
        setCartLenght(filteredCartItems?.length);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
    console.log("cartLenght",cartLength)
    
  }, []);

  const handleLogout=()=>{
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
  }

  return (
    <div className="w-full flex justify-center items-center bg-[#d9f4f0] h-20 sticky top-0 z-50">
      <div className="flex w-[70%]">
        <div className="w-1/2 hidden md:flex justify-start items-center text-center gap-4 lg:gap-10 ">
          {navbardata?.map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item?.path}
                onClick={handleMenuClick}
                onMouseEnter={() =>
                  item.title === "MEN" &&
                  !dropdownManuallyClosed &&
                  setShowDropdown(true)
                }
              >
                {item?.title}
              </Link>
              {showDropdown && item.title === "MEN" && (
                <div
                  className="absolute top-full px-14 text-left left-0  text-xs   bg-[#030504] shadow-md mt-1 py-2 rounded w-full"
                  onMouseLeave={() =>
                    item.title === "MEN" && setShowDropdown(false)
                  }
                >
                  {item.dropdownOptions.map((option, index) => (
                    <div
                      key={index}
                      className="relative -left-10 py-2 text-gray-500  hover:text-white cursor-pointer hover:bg-gray-100"
                      onClick={() => handleDropdownClick(option.path)}
                    >
                      {option.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-1/2 justify-end items-center text-2xl gap-7 hidden md:flex">
          <Link to="/cart" className=" ">
            <p className="flex justify-center items-center gap-2 text-sm">
              <CiShoppingCart className="w-4 h-4" /> cart [{cartLength}]
            </p>
          </Link>
          <Link to="/login">
          <button className="text-xs  bg-[#d9f4f0] hover:bg-[#88C8BC] px-5 rounded-full py-2 border border-[#306259] "  onClick={handleLogout}>
           {localStorage.getItem('token') != null ? "logout" : "login"}

          </button>
          </Link>
        </div>
        <div className="text-black md:hidden f">
          <RxHamburgerMenu
            className="text-3xl "
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
      <div className={`w-full menu-container  ${showMenu ? "show-menu" : ""}`}>
        <div className="flex justify-end mr-10">
          <RxCross2
            className="text-3xl m-4  text-white"
            onClick={() => setShowMenu(false)}
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
          <div className="flex mt-10 items-end justify-end text-2xl gap-7 md:hidden">
            <Link to="/login" className="text-white">
              <BsFillPersonFill className="w-10 h-10"/>
            </Link>
            <Link to="/cart" className="text-white">
              <CiShoppingCart className="w-10 h-10"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
