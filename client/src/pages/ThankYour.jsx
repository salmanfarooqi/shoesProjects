import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <Layout>
    <div className="main_co-section bg-gray-100 justify-center items-center h-screen md:pt-10">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className="max-w-lg w-full px-4">
            <div className="text-center">
              <span className="text-primary text-7xl mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="inline-block w-16 h-16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </span>
              <h2 className="text-4xl text-black font-bold mb-3">
                Thank you!
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                Your order was successfully completed.
              </p>
             

             <Link to="/shop"> <p className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition duration-300"> Back to shop</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ThankYouPage;
