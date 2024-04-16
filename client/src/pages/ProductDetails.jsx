import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
       let { id } = useParams(); 
      try {
        const response = await axios.get(`http://localhost:9000/ProductDetails/${id}`)
         
    
        // setProduct(response.data); // Assuming response contains product data
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const totalPrice = product ? (product.price * quantity).toFixed(2) : 0;

  return (
    <Layout>
      <div className="w-full justify-center">
        {/* Banner Slider */}
        <div className="w-full h-14 bg-[#88C8BC] flex justify-center items-center">
          <div className="w-[90%] md:w-[40%] h-14 bg-[#88C8BC]">
            <BannarSlider />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full flex justify-center">
          <div className="w-[80%] h-[250px] flex flex-col">
            {/* Breadcrumb */}
            <div className="py-3 text-xs">
              <p className="flex gap-1">
                <span className="text-[#88C8BC]">
                  <Link to="/"> HOME </Link>
                </span>
                <span className="">/</span>ProductDetails
              </p>
            </div>

            {/* Product Info */}
            <div className="w-full md:flex md:flex-row flex flex-col justify-between ">
              {/* Product Image */}
              <div className="w-full md:w-[60%]">
                <img src={product?.image} alt="" className="border" />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-[37%] ">
                <p className="text-xl font-bold">{product?.name}</p>
                <p className="text-xl font-bold">£{totalPrice}</p>
                <p className="mt-[20px]">{product?.description}</p>
                <button className="w-full bg-[#88C8BC] mt-4 py-2 border font-medium">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Images */}
        <div className="w-full flex justify-center mt-[650px] xs:mt-[600px] sm:mt-[750px] md:mt-[400px] lg:mt-[500px]">
          <div className="w-[70%] h-[100px] md:h-[250px] flex justify-between flex-wrap">
            {/* Brand images */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
