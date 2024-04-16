/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CustomArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick, backgroundColor} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#EFF2F1",
        fontSize: "50px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: backgroundColor || "#CED6D3",
        // padding: "15px",
        transition: "background-color 0.3s",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={(e) => e.target.style.backgroundColor =  "#3B5D50"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#CED6D3"}
    >
    </div>
  );
}

function CustomArrows({ testimonials,  className }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow/>,
    prevArrow: <CustomArrow  />
  };

  return (
    <div className="w-full flex justify-center">
    <div className={`${className} w-11/12 sm:w-[80%] slider-container`}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="flex flex-col items-center justify-center">        
              <p className="mt-2 text-gray-500 text-xs sm:text-base md:text-xl w-3/4 text-center">
                {testimonial.quote}
              </p>
              <div className="flex flex-col items-center justify-center mt-10">
                <img
                  src={testimonial.image}
                  alt=""
                  className="rounded-full w-20 h-20 mr-4"
                />
                <p className="text-gray-600 font-semibold mt-4">{testimonial.author}</p>
                <p className="text-gray-500 mb-12">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default CustomArrows;
