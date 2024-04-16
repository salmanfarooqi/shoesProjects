import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'

function Men() {
  const [itemsData,setitemsData]=useState([{}
  
  ])

  useEffect(()=>{
    let fetchData=async()=>{
      let data=await axios.get("http://localhost:9000/getmensproducts")
      console.log("data",data)
  setitemsData(data.data)

    }
    fetchData()
    console.log("fetch data",itemsData)
  },[itemsData])


  useEffect(()=>{
    let fetchData=async()=>{
      let data=await axios.get("http://localhost:9000/getwomensproducts")
      console.log("data",data)
  setitemsData(data.data)

    }
    fetchData()
    console.log("fetch data",itemsData)
  },[])
 
  const addToCart = async (productId) => {
    try {
// Cartrouter.post('/add-to-cart', cartController.addToCart);
const response = await axios.post("http://localhost:9000/add-to-cart", {
        productId: productId,
        userId:localStorage.getItem("userId")
        
      });
       toast.success(response.data.message)
      // You can handle the response or any other action after adding to cart
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <Layout>
      <div className="w-full justify-center">
        <div className="w-full h-14 bg-[#88C8BC] flex justify-center items-center">
          <div className="w-[90%] md:w-[40%] h-14 bg-[#88C8BC]">
            <BannarSlider />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[80%] h-[250px] flex flex-col">
            <div className="py-3 text-xs">
              <p className="flex gap-1">
                <span className="text-[#88C8BC]">
                  <Link to="/"> HOME </Link>
                </span>
                <span className="">/</span>MEN
              </p>
            </div>

            <div className="">
              <img
                src="public\Men\cover-img-2.jpg"
                alt=""
                className="relative h-[300px] w-full object-cover"
              />

              <p className="absolute top-[200px]  text-3xl  ml-8 font-medium">
                MEN'S
              </p>
              <div className="w-full flex justify-center py-4 bg-[#88C8BC]">
                <div className="">
                  <ul className=" flex justify-between text-white text-xs sm:text-sm md:text-[14px] gap-6">
                    <li className="">
                      <Link to="">NEW ARRIVALS</Link>
                    </li>
                    <li className="">
                      <Link to="">BEST SELLERS</Link>
                    </li>
                    <li className="">
                      <Link to="">EXTENDED WIDTHS</Link>
                    </li>
                    <li className="">
                      <Link to="">SALE</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

     

         {/* <div className="w-full flex flex-wrap justify-between mt-6">
  <div className="w-full sm:w-[49%] md:w-[32%] bg-red-400 h-[400px]">
    <img src="public\Men\blog-3.jpg" alt="" className="object-cover h-[400px]"/>
  </div>
  <div>
    <p className="text-5xl">CASUALS</p>
    <button></button>
  </div>
  <div className="w-full sm:w-[49%] md:w-[32%] bg-red-400 h-[400px]">
  <img src="public\Men\item-11.jpg" alt="" className="object-cover  h-[400px]"/>
  </div>
  <div className="w-full sm:w-[49%] md:w-[32%] bg-red-400 h-[400px]">
  <img src="public\Men\men.jpg" alt="" className="h-[400px] object-cover"/>
  </div>
</div> */}
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-[50px] md:mt-[150px] lg:mt-[100px]">
          <div className="w-[65%] mt-[200px] mb-[50px] sm:mt-[200px] sm:mb-[100px] md:mt-[200px] md:mb-[50px] lg:mt-[100px] lg:mb-[100px] flex justify-center items-center">
            <p className="text-base text-gray-400 font-bold">
              TRUSTED PARTNERS
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
      <div className="w-[70%] flex justify-center items-center flex-wrap gap-4">
      {itemsData.map((item) => (
        <Link
               to={`/ProductDetails/${item._id}`}
                key={item._id}
                className="flex flex-col border mt-4 w-full sm:w-[220px]  lg:w-[220px] justify-center items-center"
              >
          <img src={item.imageUrl} alt="" className="object-cover" />
          <p className="text-center px-2 py-2">{item.name}</p>
          <p className="py-3">{item.price}</p>
          <Link
            className="px-2 py-1 bg-[#d9f4f0] hover:bg-[#88C8BC]"
            onClick={() => addToCart(item._id)}
          >
            Add To Cart
          </Link>
        </Link>
      ))}
          </div>
        </div>

        <div className="w-full flex justify-center mt-24">
          <div className="w-[70%] h-[250px] flex justify-between flex-wrap">
            <div className="w-[60px] md:w-[150px]">
              <img src="public/Home/brand-1.jpg" alt="Brand 1" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="public/Home/brand-2.jpg" alt="Brand 2" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="public/Home/brand-3.jpg" alt="Brand 3" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="public/Home/brand-4.jpg" alt="Brand 4" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="public/Home/brand-5.jpg" alt="Brand 5" />
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </Layout>
  );
}

export default Men;
