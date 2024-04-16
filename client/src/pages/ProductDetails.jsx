import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9000/ProductDetails/${id}`);
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else {
          throw new Error("Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const totalPrice = (product.price * quantity).toFixed(2);
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
                <span className="">/</span>ProductDetails
              </p>
            </div>
            <div className="w-full md:flex md:flex-row flex flex-col justify-between">
              <div className="w-full md:w-[60%]">
                <img src={product.imageUrl} alt="" className="border" />
              </div>
              <div className="w-full md:w-[37%]">
                <p className="text-xl font-bold">{product.name}</p>
                <p className="text-xl font-bold">£{totalPrice}</p>
                <p className="mt-[20px]">{product.description}</p>
                {/* <button className="w-full bg-[#88C8BC] mt-4 py-2 border font-medium">Add To Cart</button> */}
                <Link
            onClick={() => addToCart(product._id)}
          >
            <button className="w-full bg-[#88C8BC] mt-4 py-2 border font-medium">Add To Cart</button>
          </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[650px] xs:mt-[600px] sm:mt-[750px] md:mt-[400px] lg:mt-[500px]">
          <div className="w-[70%] h-[100px] md:h-[250px] flex justify-between flex-wrap">
          <div className="w-[60px] md:w-[150px]">
              <img src="/public/Home/brand-1.jpg" alt="Brand 1" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="/public/Home/brand-2.jpg" alt="Brand 2" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="/public/Home/brand-3.jpg" alt="Brand 3" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="/public/Home/brand-4.jpg" alt="Brand 4" />
            </div>
            <div className="w-[60px] md:w-[150px]">
              <img src="/public/Home/brand-5.jpg" alt="Brand 5" />
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </Layout>
  );
}
export default ProductDetails;