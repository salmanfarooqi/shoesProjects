import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function YourOrder({ className, phoneNumber, postalZip, streetAddress }) {
  const [cartData, setCartData] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:9000/getCartData');
        const data = response.data;
        const userIdFromLocalStorage = localStorage.getItem('userId');
        const filteredCartItems = data.filter(item => item.userId === userIdFromLocalStorage);
        setCartData(filteredCartItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const subtotal = cartData.reduce((total, item) => {
      const price = parseFloat(item.productId.price);
      const quantity = parseInt(item.quantity);
      return total + (price * quantity);
    }, 0);
    setCartSubtotal(subtotal);
  }, [cartData]);
  const createOrder = async () => {
    try {
      const userIdFromLocalStorage = localStorage.getItem('userId');
      const orderData = {
        userId: userIdFromLocalStorage,
        products: cartData.map(item => ({
          productId: item.productId._id,
          quantity: item.quantity
        })),
        totalAmount: cartSubtotal,
        zipCode: postalZip,
        address: streetAddress,
        phone: phoneNumber
      };

      if (cartData.length === 0) {
        orderData.products = [];
      }

      const response = await axios.post('http://localhost:9000/orders', orderData);
        toast.success(response.data.message)
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error(response.data.message)
    }
  };

  return (
    <div className={`${className} w-full border border-gray-300  py-10 text-[#6A6A6A]`}>
    
        <div className='w-full flex lg:px-0'>
          <div className='w-1/2 text-center '>
            <p className='font-semibold'>Product</p>
          </div>
          <div className='w-1/2  text-center'>
            <p className='font-semibold'>Price</p>
          </div>
        </div>
      
      <div className='w-full flex justify-center'>
        <div className='w-full py-[1px] bg-black' />
      </div>
      <div className='w-full flex flex-col '>
        {cartData.map((item, index) => (
          <div key={index} className='w-full '>
            <div className='w-full flex text-center'>
              <div className='w-1/2 '>
                <p>{item.productId.name}</p>
              </div>
              <div className='w-1/2 flex justify-center'>
                <p>£{(parseFloat(item.productId.price) * parseInt(item.quantity)).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex '>
      <div className='w-full flex justify-between   border-b-[1px] border-gray-300'>
      <div className='w-1/2'>
        <p className='mr-6 font-bold text-center'>Cart Subtotal:</p>
        </div>
        <div className='w-1/2 text-center'>
        <p className=' font-bold'>£{cartSubtotal.toFixed(2)}</p>
        </div>
        </div>
      </div>
      <div className='flex w-full justify-center'>
      <button onClick={createOrder} className='bg-[#d9f4f0] hover:bg-[#88C8BC]  text-black px-4 py-2 rounded-md mt-4'>Place Order</button>
      {/* <button onClick={createOrder} className='bg-[#3B5D50] text-white px-4 py-2 rounded-md mt-4'>Place Order</button> */}
      <ToastContainer/>
      </div>
    </div>
  );
}

export default YourOrder;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function YourOrder({ className, phoneNumber, postalZip, streetAddress }) {
//   const [cartData, setCartData] = useState([]);
//   const [cartSubtotal, setCartSubtotal] = useState(0);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:9000');
//         const data = response.data;
//         const userIdFromLocalStorage = localStorage.getItem('userId');
//         const filteredCartItems = data.filter(item => item.userId === userIdFromLocalStorage);
//         setCartData(filteredCartItems);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   useEffect(() => {
//     // Calculate cart subtotal whenever cartData changes
//     const subtotal = cartData.reduce((total, item) => {
//       const price = parseFloat(item.productId.price);
//       const quantity = parseInt(item.quantity);
//       return total + (price * quantity);
//     }, 0);
//     setCartSubtotal(subtotal);
//   }, [cartData]);

//   const createOrder = async () => {
//     try {
//       const userIdFromLocalStorage = localStorage.getItem('userId');
//       const orderData = {
//         userId: userIdFromLocalStorage,
//         products: cartData.map(item => ({
//           productId: item.productId._id,
//           quantity: item.quantity
//         })),
//         totalAmount: cartSubtotal,
//         zipCode: postalZip,
//         address: streetAddress,
//         phone: phoneNumber
//       };

//       if (cartData.length === 0) {
//         orderData.products = [];
//       }

//       const response = await axios.post('http://localhost:9000/orders', orderData);
//       console.log("Order created:", response.data);
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   return (
//     <div className={`${className} w-full border border-gray-300 justify-center items-center py-10 text-[#6A6A6A]`}>
//       <div className='w-full flex justify-center'>
//         <div className='w-full flex justify-between'>
//           <div className='w-1/2 flex justify-center'>
//             <p className='font-semibold'>Product</p>
//           </div>
//           <div className='w-1/2 flex justify-center'>
//             <p className='font-semibold'>Price</p>
//           </div>
//         </div>
//       </div>
//       <div className='w-full flex justify-center'>
//         <div className='w-[90%] py-[1px] bg-black' />
//       </div>
//       <div className='w-full flex flex-col justify-center items-center'>
//         {cartData.map((item, index) => (
//           <div key={index} className='w-full flex justify-center'>
//             <div className='w-full flex justify-between py-2'>
//               <div className='w-1/2 flex justify-center'>
//                 <p>{item.productId.name}</p>
//               </div>
//               <div className='w-1/2 flex justify-center'>
//                 <p>£{(parseFloat(item.productId.price) * parseInt(item.quantity)).toFixed(2)}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='w-full flex justify-between py-2 border-b-[1px] border-gray-300'>
//         <p className='mr-6 font-bold'>Cart Subtotal:</p>
//         <p className='mr-6 font-bold'>£{cartSubtotal.toFixed(2)}</p>
//       </div>
//       <button onClick={createOrder} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Place Order</button>
//     </div>
//   );
// }

// export default YourOrder;

