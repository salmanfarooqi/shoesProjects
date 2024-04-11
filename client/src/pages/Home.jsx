import React from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import HomeSlider from "../components/HomeSilder";
import { Link } from "react-router-dom";

function Home() {

  const itemsData = [
    {
      id: 1,
      image: "public/Home/item-1.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 2,
      image: "public/Home/item-2.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 1,
      image: "public/Home/item-3.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 2,
      image: "public/Home/item-4.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 1,
      image: "public/Home/item-5.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 2,
      image: "public/Home/item-6.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 1,
      image: "public/Home/item-7.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 2,
      image: "public/Home/item-8.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 1,
      image: "public/Home/item-9.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 2,
      image: "public/Home/item-10.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 1,
      image: "public/Home/item-11.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
    {
      id: 2,
      image: "public/Home/item-12.jpg",
      title: "WOMEN'S BOOTS SHOES MACA",
      price: "£123.00"
    },
 
    // Add more items data here
  ];
  
  return (
    <Layout>
      <div className="w-full justify-center ">
        <div className="w-full  h-14 bg-[#88C8BC] flex justify-center items-center">
          <div className="w-[40%] h-14 bg-[#88C8BC]">
            <BannarSlider />
          </div>
        </div>
        <div>
          <HomeSlider />
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[65%] h-[250px] flex justify-center items-center">
            <p className="text-[44px] font-bold">
              Best quality of shoes with new design
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between px-5">
          <div className="w-[49%]">
            <Link>
              <img src="/public/Home/img_bg_1.jpg" alt=" " />
              <p className="text-center mt-4 text-4xl ">
                Shop Men's Collection
              </p>
            </Link>
          </div>
          <div className="w-[49%]">
            <Link>
              <img src="/public/Home/women.jpg" alt=" " />
              <p className="text-center mt-4 text-4xl ">
                Shop Women's Collection
              </p>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[65%] h-[350px] flex justify-center items-center">
            <p className="text-[44px] font-bold">
            BEST SELLERS
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
      <div className="w-[70%] flex justify-between flex-wrap">
        {itemsData.map((item) => (
          <div key={item.id} className="flex flex-col border mt-4 w-[220px] justify-center items-center">
            <img src={item.image} alt="" className="object-cover" />
            <p className="text-center px-2 py-2">{item.title}</p>
            <p className="py-3">{item.price}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="w-full flex justify-center">
          <div className="w-[65%] h-[200px] flex justify-center items-center">
           <button className="px-6 py-4 bg-[#616161] text-xs rounded-full text-white font-medium hover:bg-black">Shop All Products</button>
          </div>
        </div>

        
    <div className="w-full flex justify-center">
          <div className="w-[65%] h-[200px] flex justify-center items-center">
          <p className="text-base text-gray-400 font-bold">TRUSTED PARTNERS</p>
          </div>
        </div>



        <div className="w-full flex justify-center">
      <div className="w-[70%] h-[250px] flex justify-between flex-wrap">
      <div className="w-[150px]">
      <img src="public\Home\brand-1.jpg" alt=""/>

      </div>
      <div className="w-[150px]">
      <img src="public\Home\brand-2.jpg" alt=""/>

      </div>
      <div className="w-[150px]">
      <img src="public\Home\brand-3.jpg" alt=""/>

      </div>
      <div className="w-[150px]">
      <img src="public\Home\brand-4.jpg" alt=""/>

      </div>
      <div className="w-[150px]">
      <img src="public\Home\brand-5.jpg" alt=""/>

      </div>
     
     
      </div>
    </div>

    
      </div>
    </Layout>
  );
}

export default Home;
