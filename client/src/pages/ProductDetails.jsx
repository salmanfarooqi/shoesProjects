import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductDetails() {
  // State for quantity of the product
  const [quantity, setQuantity] = useState(1);
  
  // Price of the product (example price)
  const price = 142.00;

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  // Calculate total price based on quantity
  const totalPrice = (price * quantity).toFixed(2);

  // Get the product ID from the URL params
  const { id } = useParams();

  // Fetch product details based on the product ID
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Placeholder for fetching product details using the product ID
        // Example: const response = await axios.get(`/api/products/${id}`);
        // Set the product state with the fetched data
        // setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

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
                <img src="public\Men\item-1.jpg" alt="" className="border" />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-[37%] ">
                <p className="text-xl font-bold">BOOTS SHOES MACA</p>
                <p className="text-xl font-bold">£{totalPrice}</p>
                <p className="mt-[20px]">
                  The quality of shoes is paramount for comfort, durability, and
                  style. Quality shoes are crafted from premium materials,
                  featuring precise stitching and superior construction. They
                  offer excellent support, traction, and breathability, ensuring
                  long-lasting wear and foot health. Attention to detail in
                  design and manufacturing distinguishes high-quality shoes,
                  enhancing overall satisfaction and performance.
                </p>
                {/* Size Selector */}
                <div className="w-full flex  items-center gap-4">
                  <div className="w-1/2 relative inline-block text-left mt-5">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="">Select size</option>
                      <option value="small">Small size</option>
                      <option value="medium">Medium size</option>
                      <option value="large">Large size</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Quantity Input */}
                  <div className="w-1/2 mt-5">
                    <input
                      type="number"
                      className="w-1/2 bg-white border border-gray-400 hover:border-gray-500 px-1 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline placeholder:text-black"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div>
                </div>
                {/* Add to Cart Button */}
                <Link to="/cart">
                  <button className="w-full bg-[#88C8BC] mt-4 py-2 border font-medium">Add To Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Images */}
        <div className="w-full flex justify-center mt-[650px] xs:mt-[600px] sm:mt-[750px] md:mt-[400px] lg:mt-[500px]">
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

export default ProductDetails;
