



import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify'

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [reload,setReload]=useState(false)
  const navigate = useNavigate();




  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/getCartData");
        const products = response.data; // Assuming the API response contains an array of products
        
        // Fetch userId from localStorage
        const userIdFromLocalStorage = localStorage.getItem('userId');
        
        // Map the products to cart items
        const cartItemsFromApi = products.map(product => ({
          id: product._id,
          name: product.productId.name,
          price: product.productId.price,
          quantity: product.quantity || 1,
          image: product.productId.imageUrl,
          userId: product.userId // Assuming userId is available in the API response
        }));
  
        // Filter cart items based on userId
        const filteredCartItems = cartItemsFromApi.filter(item => item.userId === userIdFromLocalStorage);
        
        setCartItems(filteredCartItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [reload]);
  console.log("apidata",cartItems)

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:9000/");
  //       const products = response.data;
  //       const cartItemsFromApi = products.map(product => ({
  //         id: product._id,
  //         name: product.productId.name,
  //         price: product.productId.price,
  //         quantity: product.quantity || 1,
  //         image: product.productId.imageUrl
  //       }));
  //       setCartItems(cartItemsFromApi);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [reload]);
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


  let handleDelete=async(id,e)=>{
    e.preventDefault();
    try {
      let deleteItem=await axios.post("http://localhost:9000/deleteCartItems",{
        cartItemId:id

      })

      setReload(!reload)
      
    } catch (error) {
        console.log("erro",error)
    }
  }
  useEffect(() => {
    let subtotalAmount = 0;
    cartItems.forEach(item => {
      subtotalAmount += item.price * item.quantity;
    });
    setSubtotal(subtotalAmount);
    setTotal(subtotalAmount);
  }, [cartItems]);

  const updateQuantity = async (id, newQuantity) => {
    try {
      await axios.post("http://localhost:9000/updateCartQuantity", {
        cartItemId: id,
        quantity: newQuantity
      });
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const fetchProduct = async (id) => {
    try {
      await axios.post("http://localhost:9000/deleteCartItems", {
        cartItemId: id
      });
      setCartItems(prevItems =>
        prevItems.filter(item => item.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCheckout = () => {
    navigate('/Checkout');
  };

  
  return (
    <Layout>
      <>
        {/* <HomeBanner
          title="Cart"
          className=""
        /> */}
        <div className="main_co-section before-footer-section">
          <div className="container mx-auto py-5 sm:py-8">
            <div className="mb-5 ">
              <form className="max-w-full">
                <div className="site-blocks-table  ">
                  <table className="table w-full   " >
                    <thead className=''>
                      <tr className='bg-[#a1ddd4] w-full rounded-full'>
                        <th className="text-center py-3 rounded-l-full text-[12px] sm:text-lg">Image</th>
                        <th className="text-center text-[12px] sm:text-lg">Product</th>
                        <th className="text-center text-[12px] sm:text-lg">Price</th>
                        <th className="text-center text-[12px] sm:text-lg">Quantity</th>
                        <th className="text-center text-[12px] sm:text-lg">Total</th>
                        <th className="text-center rounded-r-full text-[12px] sm:text-lg">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td className="text-center ">
                            <img src={item.image} alt="Image" className="w-12 sm:w-24 h-12 sm:h-24 !rounded-full sm:rounded-none object-cover mx-auto" />
                          </td>
                          <td className="text-center">
                            <h2 className="h5 text-[12px] sm:text-lg text-black">{item.name}</h2>
                          </td>
                          <td className="text-center text-[10px] sm:text-lg">&pound;{item.price}</td>
                          <td className="text-center">
                            <div className="flex justify-center items-center space-x-1 sm:space-x-2">
                              <button className="btn btn-outline-black decrease text-[12px] sm:text-lg" type="button" onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>&minus;</button>
                              <input type="text" className="form-input text-center w-8 sm:w-12 text-[12px] sm:text-lg" value={item.quantity} readOnly />
                              <button className="btn btn-outline-black increase text-[12px] sm:text-lg" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
                            </div>
                          </td>
                          <td className="text-center text-[12px] sm:text-lg"> &pound;{(item.price * item.quantity)}</td>
                          <td className="text-center text-[12px] sm:text-lg" onClick={(e) => handleDelete(item.id,e)} ><button className="text-[12px] sm:text-lg">X</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table> 
                   
                </div>
              </form>
            </div>
            <div className="md:flex md:justify-between px-10">
              <div className="md:w-[40%] md:mb-0">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-6/12 mb-3 md:mb-0">
                    <label className="text-black text-lg mb-1" htmlFor="coupon">Coupon</label>
                    <p className="text-black text-sm mb-3">Enter your coupon code if you have one.</p>
                    <input type="text" className="form-input py-4 px-4 rounded-md w-full" id="coupon" placeholder="Coupon Code" />
                  </div>
                  <div className="w-full py-4 justify-end ">
                    <button className="bg-[#a1ddd4] hover:bg-[#88C8BC] text-white py-2 px-4 rounded-md">Apply Coupon</button>
                  </div>
                </div>
              </div>
              <div className="md:w-[40%] md:pl-5 px-5 sm:px-0">
                <div className="flex justify-end">
                  <div className="w-full md:w-9/12">
                    <div className="flex py-1 border-b border-black mb-5">
                      <h3 className="text-black text-lg uppercase">Cart Totals</h3>
                    </div>
                    <div className="flex mb-3">
                      <div className="w-6/12">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="w-6/12 text-right">
                        <strong className="text-black">&pound;{subtotal.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="w-6/12">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="w-6/12 text-right">
                        <strong className="text-black">&pound;{total.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-[#a1ddd4] hover:bg-[#88C8BC] text-white py-2 px-4 rounded-md w-full" onClick={handleCheckout}>Proceed To Checkout</button>
                      </div>
                    {/* <div className="flex justify-center md:justify-end">
                      <button className="bg-black text-white py-2 px-2 md:px-4 rounded-full w-[80] md:w-full" onClick={handleCheckout}>Proceed To Checkout</button>
                    </div> */}
                  </div>
                </div>
              </div>
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
          <div className="w-full flex justify-center mt-10 lg:mt-[200px]">
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
          <ToastContainer/>
        </div>
      </>
    </Layout>
  );
}

export default ShoppingCart;

