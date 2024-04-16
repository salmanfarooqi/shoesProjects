import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import HomeSlider from "../components/HomeSilder";
import { Link } from "react-router-dom";
import axios from 'axios'

function Home() {

  // const itemsData = [
  //   {
  //     id: 1,
  //     image: "public/Home/item-1.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 2,
  //     image: "public/Home/item-2.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 1,
  //     image: "public/Home/item-3.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 2,
  //     image: "public/Home/item-4.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 1,
  //     image: "public/Home/item-5.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 2,
  //     image: "public/Home/item-6.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 1,
  //     image: "public/Home/item-7.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 2,
  //     image: "public/Home/item-8.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 1,
  //     image: "public/Home/item-9.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 2,
  //     image: "public/Home/item-10.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 1,
  //     image: "public/Home/item-11.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
  //   {
  //     id: 2,
  //     image: "public/Home/item-12.jpg",
  //     title: "WOMEN'S BOOTS SHOES MACA",
  //     price: "£123.00"
  //   },
 
  //   // Add more items data here
  // ];
  const [itemsData,setitemsData]=useState([{}
  
  ])

  useEffect(()=>{
    let fetchData=async()=>{
      let data=await axios.get("http://localhost:9000")
      console.log("data",data)
  setitemsData(data.data)

    }
    fetchData()
    console.log("fetch data",itemsData)
  },[itemsData])
  
  return (
    <Layout>
      <div className="w-full justify-center ">
        <div className="w-full  h-14 bg-[#88C8BC] flex justify-center items-center">
        <div className="w-full flex justify-center">
          <div className=" w-[95%] md:w-[40%] h-14 bg-[#88C8BC]">
            <BannarSlider />
          </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
        <div className="w-[95%] ">          <HomeSlider />
       
        </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[65%] h-[250px] flex justify-center items-center">
            <p className="text-[20px] md:text-[30px] lg:text-[44px] font-bold">
              Best quality of shoes with new design
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between px-5">
          <div className="w-[49%]">
            <Link to="/Men">
              <img src="/public/Home/img_bg_1.jpg" alt=" " />
              <p className="text-center mt-4 text-[20px] md:text-[24px] lg:text-4xl ">
                Shop Men's Collection
              </p>
            </Link>
          </div>
          <div className="w-[49%]">
            <Link to="/Women">
              <img src="/public/Home/women.jpg" alt=" " />
              <p className="text-center mt-4  text-[20px] md:text-[24px] lg:text-4xl">
                Shop Women's Collection
              </p>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[65%] h-[200px] lg:h-[350px] flex justify-center items-center">
            <p className=" text-[20px] md:text-[24px] lg:text-[44px] font-bold">
            BEST SELLERS
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
      <div className="w-[70%] flex justify-center items-center flex-wrap gap-4">
        {itemsData.map((item) => (
          <Link key={item._id}
           to={`/ProductDetails/${item.id}`}
           className="flex flex-col border mt-4 w-full sm:w-[220px]  lg:w-[220px] justify-center items-center">
            <img src={item.imageUrl} alt="" className="object-cover" />
            <p className="text-center px-2 py-2">{item.name}</p>
            <p className="py-3">{ " £"+item.price}</p>
            <Link to="/cart" className="px-2 py-1 bg-[#d9f4f0] hover:bg-[#88C8BC]">Add To Cart</Link>
            </Link>
        
        ))}
      </div>
    </div>


    <div className="w-full flex justify-center">
          <div className="w-[65%] h-[200px] flex justify-center items-center">
           <button className="px-6 py-4 bg-[#d9f4f0] text-xs rounded-full text-black font-medium hover:bg-[#88C8BC]">Shop All Products</button>
          </div>
        </div>

        
    <div className="w-full flex justify-center">
          <div className="w-[65%] lg:h-[200px] flex justify-center items-center">
          <p className="text-base text-gray-400 font-bold">TRUSTED PARTNERS</p>
          </div>
        </div>



        <div className="w-full flex justify-center lg:mt-[200px]">
        <div className="w-[70%] h-[100px] md:h-[250px] flex justify-between flex-wrap">
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

    
      </div>
    </Layout>
  );
}

export default Home;
