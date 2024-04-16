import React, { useState } from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { TbWorldCheck } from "react-icons/tb";

function Contact() {
  const [quantity, setQuantity] = useState(1);
  const price = 142.0;

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <Layout>
      <div className="w-full justify-center">
        <div className="w-full h-14 bg-[#88C8BC] flex justify-center items-center">
          <div className="w-[90%] md:w-[40%] h-14 bg-[#88C8BC]">
            <BannarSlider />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[80%] flex flex-col">
            <div className="py-3 text-xs">
              <p className="flex gap-1">
                <span className="text-[#88C8BC]">
                  <Link to="/"> HOME </Link>
                </span>
                <span className="">/</span>Contact
              </p>
            </div>

            <div className="w-full mt-10 flex flex-col justify-center items-center">
              <div className="bg-[#a1ddd4] py-10 w-full text-center text-3xl font-medium">
                <p className="">LETS'S MAKE SOMETHING AWESOME TOGETHERE</p>
                <span className="text-white text-xl">
                  CONTACT US FOR MORE INFORMATION PLEASE
                </span>
              </div>
              <div className="w-full flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="bg-red-400 h-[100px] flex gap-3 justify-center items-center px-10">
                    <FaLocationDot className="h-6 md:w-7 w-6 md:h-7 lg:w-9 lg:h-9" />
                    <p>198 West 21th Street Birmingham 10016</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="bg-blue-400 h-[100px] flex gap-3 justify-center items-center">
                    <FaPhoneFlip /> + 1235 2355 98
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="bg-green-400 h-[100px] flex gap-3 justify-center items-center">
                    <FaMessage /> info@yoursite.com
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div className="bg-yellow-500 h-[100px] flex gap-3 justify-center items-center">
                    <TbWorldCheck /> yoursite.com
                  </div>
                </div>
              </div>

              <div className="w-full md:flex flex flex-col md:flex-row justify-between ">
                <div className="w-full md:w-[48%] shadow-2xl  mt-10">
                  <p className="font-semibold text-3xl text-center">
                    CONTACT US{" "}
                  </p>
                  <div className="lg:border-[30px] border-[#a1ddd4]">
                    <div className="flex items-center justify-center p-12">
                      <div className="mx-auto w-full max-w-[550px]">
                        <form
                          action="https://formbold.com/s/FORM_ID"
                          method="POST"
                        >
                          <div className="mb-5">
                            <label
                              for="name"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Full Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              for="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="example@domain.com"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              for="subject"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Enter your subject"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                          <div className="mb-5">
                            <label
                              for="message"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Message
                            </label>
                            <textarea
                              rows="4"
                              name="message"
                              id="message"
                              placeholder="Type your message"
                              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                          </div>
                          <div>
                            <button className="hover:shadow-form rounded-md bg-[#a1ddd4] hover:bg-[#88C8BC] py-3 px-8 text-base font-semibold text-white outline-none">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[48%] mt-24">
                  <img
                    src="public\Contact\c46f986d892538f4b0a15f25692330f7.webp"
                    alt=""
                    className="object-cover"
                  />
                  <p className="text-2xl font-semibold mt-5">
                    Go the extra mile to show customers you appreciate them{" "}
                  </p>
                  <p className="text-lg py-5">
                    With everything we’ve all been through this year, many are
                    looking to this year’s holiday season to bring a much-needed
                    sense of normalcy. So, take a look at your customer support
                    offerings. How will you ensure your customers get the help
                    they need, when they need it this year?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[200px]">
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
    </Layout>
  );
}

export default Contact;
