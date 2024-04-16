import React from "react";
import Layout from "../components/Layout";
import BannarSlider from "../components/BannarSlider";
import HomeSlider from "../components/HomeSilder";
import { Link } from "react-router-dom";
import SimpleSlider from "../components/SimpleSlider";

function About() {

    const dummyTestimonials = [
        {
          quote:
            "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
          image: "/public/About/WhatsApp_Image_2022-07-18_at_2.28.08_PM_180x.avif",
          author: "Maria Jones",
          position: "CEO, Co-Founder, XYZ Inc.",
        },
        {
          quote:
            "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
          image: "/public/About/Unze-London-Logo-without-1989.webp",
          author: "Maria Jones",
          position: "CEO, Co-Founder, XYZ Inc.",
        },
        {
          quote:
            "Impeccable product quality! Every piece of furniture I've purchased from Furni Website has exceeded my expectations in terms of both style and durability. The attention to detail and craftsmanship are truly outstanding.",
          image: "/public/About/logo-one_100x100_2x_0a40412b-8001-4857-86be-2f149a0aebf5.webp",
          author: "Maria Jones",
          position: "CEO, Co-Founder, XYZ Inc.",
        },
        {
          quote: "Bata",
          image: "/public/About/Bata-logo_1.avif",
          author: "John Doe",
          position: "CTO, ABC Inc.",
        },
        // Add more dummy testimonial objects as needed
      ];
  return (
    <Layout>
      <div className="w-full justify-center ">
        <div className="w-full  h-14 bg-[#88C8BC] flex justify-center items-center">
          <div className=" w-[90%] md:w-[40%] h-14 bg-[#88C8BC]">
            <BannarSlider />
          </div>
        </div>
        <div className="w-full justify-center flex items-center">
          <div className="w-[80%] flex flex-col">
          <div className="py-3 text-xs">
              <p className="flex gap-1">
                <span className="text-[#88C8BC]">
                  <Link to="/"> HOME </Link>
                </span>
                <span className="">/</span>About
              </p>
            </div>
            <p className="text-center mt-4 text-2xl md:text-4xl lg:text-6xl font-medium">
              SHOES COLLECTION
            </p>
            <p className="text-center mt-4 text-2xl md:text-4xl lg:text-6xl font-medium">
              STAY HERE FOR THE BEST SHOES
            </p>
            <div className="flex justify-between w-full mt-16">
              <div className="w-[48%]">
                <Link to="/Men">
                  <button className="w-full py-4 text-center text-white font-semibold bg-black">
                    MEN'S
                  </button>
                </Link>
              </div>
              <div className="w-[48%]">
                <Link to="/Women">
                  <button className="w-full py-4 text-center text-white font-semibold bg-black">
                    WOMEN'S
                  </button>
                </Link>
              </div>
            </div>

            <div className="md:flex md:flex-row flex flex-col justify-between w-full mt-16">
              <div className="w-full md:w-[48%]">
                <img src="public\Men\men.jpg" alt="" />
              </div>
              <div className="w-full md:w-[48%]">
                <p className="text-2xl font-medium">Footwear the Quality eCommerce Store around the World</p>
                <p>
                  Footwear brand quality is defined by craftsmanship, materials,
                  and innovation. Trusted brands prioritize comfort, durability,
                  and style, using premium materials and advanced technology in
                  their designs. They offer reliable support, cushioning, and
                  traction, catering to diverse preferences and needs. Superior
                  quality brands prioritize customer satisfaction, earning trust
                  and loyalty. Footwear brand quality varies widely, ranging
                  from budget-friendly to luxury options. Reputable brands
                  prioritize craftsmanship, using premium materials and
                  innovative technologies to create durable, comfortable shoes.
                  They maintain stringent quality control standards, ensuring
                  consistency and reliability across their product lines,
                  earning trust and loyalty from customers worldwide.
                </p>
              </div>
            </div>
            <div className="mt-10">
            <SimpleSlider testimonials={dummyTestimonials} />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
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

export default About;
