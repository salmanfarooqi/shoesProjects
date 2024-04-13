import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BannarSlider = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Remove next and previous arrows
  };

  return (
    <div className="">
      {/* <h2>Carousel Component</h2> */}
      <Slider {...settings}>
        <div className="pt-3 text-center">
         <Link className="text-white text-nowrap text-xs md:text-sm lg:text-lg text-end">25% OFF (ALMOST) EVERYTHING! USE CODE: SUMMER SALE</Link>
        </div>
        <div className="pt-3 text-center">
        <Link className="text-white text-nowrap text-xs md:text-sm lg:text-lg text-end">OUR BIGGEST SALE YET 50% OFF ALL SUMMER SHOES</Link>
        </div>
        <div className="pt-3 text-center">
        <Link className="text-white text-nowrap text-xs md:text-sm lg:text-lg text-end">25% off (Almost) Everything! Use Code: Summer Sale</Link>
        </div>
        <div className="pt-3 text-center">
        <Link className="text-white text-nowrap text-xs md:text-sm lg:text-lg text-end">Our biggest sale yet 50% off all summer shoes</Link>
        </div>
      </Slider>
    </div>
  );
};

export default BannarSlider;
