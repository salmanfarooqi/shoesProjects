import React, { useState } from "react";
import YourOrder from "./YourOrder";

function BillingDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalZip, setPostalZip] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
    <div className="w-full py-10 border-gray-300 border px-10 rounded-sm text-[#6A6A6A]">
      <div className="flex flex-col">
        <div className="flex w-full justify-between ">
          <div className="flex flex-col w-[48%]">
            <label>First Name *</label>
            <input
              type="text"
              className="py-2 px-1 border border-gray-400 rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label>Last Name *</label>
            <input
              type="text"
              className="py-2 px-1 border border-gray-400 rounded-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label>Address *</label>
          <input
            type="text"
            className="py-2 px-1 border border-gray-400 rounded-lg"
            placeholder="Street Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Postal / Zip *</label>
          <input
            type="text"
            className="py-2 px-1 border border-gray-400 rounded-lg"
            value={postalZip}
            onChange={(e) => setPostalZip(e.target.value)}
          />
        </div>
        <div className="flex flex-col lg:flex lg:flex-row w-full justify-between ">
          <div className="flex flex-col w-full lg:w-[48%]">
            <label>Email Address *</label>
            <input
              type="text"
              className="py-2 px-1 border border-gray-400 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[48%]">
            <label>Phone *</label>
            <input
              type="text"
              className="py-2 px-1 border border-gray-400 rounded-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
      </div>
      
    </div>


<div className="mt-[30px] w-full ">    
<p className="font-bold text-3xl py-3 mt-8  text-[#6A6A6A]">Your Order</p>
  <YourOrder
        phoneNumber={phoneNumber}
      
        postalZip={postalZip}
    
        streetAddress={streetAddress}
      className="w-full "

      />
      </div>

      </>
  );
}

export default BillingDetails;
