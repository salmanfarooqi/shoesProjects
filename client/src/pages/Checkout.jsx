import Layout from "../components/Layout";
// import HomeBanner from "../components/HomeBannar";
import BillingDetails from "../components/BillingDetails";
import CouponCode from "../components/CouponCode";
import YourOrder from "../components/YourOrder";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Layout>
      {/* <HomeBanner title="Checkout" /> */}

      <div className="w-full flex justify-center items-center bg-[#EFF2F1] py-10 md:py-24 text-[#6A6A6A]">
        <div className="w-full md:w-[80%] mt-10 px-4 md:px-0">
          <div className="border border-gray-300 rounded-sm py-5 px-6 md:px-10">
            <span className="flex text-[#6A6A6A] gap-1">Returning customer? <p className="text-black underline hover:no-underline cursor-pointer"><Link to="/login"> Click here </Link></p> to login</span>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between mt-10 space-y-8 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-[49%]">
              <p className="font-bold text-3xl py-3">Billing Details</p>
              <BillingDetails
        // phoneNumber="1234567890"
        // email="example@example.com"
        // streetAddress="123 Street, City"
        // lastName="Doe"
        // postalZip="23200"
        // firstName="jhon"
      />
            </div>
            <div className="w-full md:w-[49%]">
              <div className="flex flex-col">
                <p className="font-bold text-3xl py-3">Coupon Code</p>
                <CouponCode />
                {/* <p className="font-bold text-3xl py-3 mt-8">Your Order</p> */}
                {/* <YourOrder /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Checkout;
