import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  // Define footer data
  const footerData = [
    {
      title: "ABOUT FOOTWEAR",
      content:
        "Footwear give you the good quality and new designs with time and money saving items",
      socialIcons: [
        { icon: <TiSocialFacebook />, link: "#" },
        { icon: <TiSocialTwitter />, link: "#" },
        { icon: <CiInstagram />, link: "#" },
        { icon: <RiLinkedinBoxFill />, link: "#" },
      ],
    },
    {
      title: "CUSTOMER CARE",
      links: [
        "CONTACT",
        "EXCHANGE",
        "GIFT VOUCHER",
        "WISHLIST",
        "SPECIAL",
        "CUSTOMER SERVICES",
        "SITE MAPS",
      ],
    },
    {
      title: "INFORMATION",
      links: [
        "ABOUT US",
        "DELIVERY",
        "PRIVACY POLICY",
        "SUPPORT",
        "ORDER TRACKING",
      ],
    },
    {
      title: "CONTACT INFORMATION",
      content: "291 SOUTH 21TH STREET, SUITE 721 BIRMINGHAM NY 10016",
      links: ["+ 1235 2355 98"],
    },
  ];

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[90%] sm:w-[70%] flex justify-between ">
        {footerData.map((section, index) => (
          <div key={index} className="w-[15%] h-full">
            <p className="text-[8px] sm:text-xs">{section.title}</p>
            {section.content && <p className="mt-10 text-[10px] text-[#6A6A6A]">{section.content}</p>}
            {section.links && (
              <div className="mt-10 flex flex-col">
                {section.links.map((link, index) => (
                  <Link key={index} className=" text-[10px] mt-2 ">
                    {link}
                  </Link>
                ))}
              </div>
            )}
            {section.socialIcons && (
              <div className="flex gap-1.5 mt-10">
                {section.socialIcons.map((social, index) => (
                  <div
                    key={index}
                    className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-full text-2xl"
                  >
                    <a href={social.link}>{social.icon}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
