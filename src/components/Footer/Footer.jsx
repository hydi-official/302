import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';

const socialLinks = [
  { path: "", icon: <AiFillYoutube className="group-hover:text-blue-600 w-7 h-7" /> },
  { path: "", icon: <BiLogoFacebook className="group-hover:text-blue-600 w-7 h-7" /> },
  { path: "", icon: <AiFillInstagram className="group-hover:text-pink-600 w-7 h-7" /> },
  { path: "", icon: <RiLinkedinFill className="group-hover:text-blue-600 w-7 h-7" /> },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/services", display: "Services" },
];

const quickLinks02 = [
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/doctors", display: "Request an Appointment" },
  { path: "/about", display: "Find a Location" },
  { path: "/contact", display: "Get an Opinion" },
];

const quickLinks03 = [
  { path: "/donate", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-10 mt-10 border-t border-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-gray-600 mb-4">Copyright © {year} </p>
          <p className="text-gray-600 mb-4">Connect with us:</p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks01.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">I want to:</h2>
          <ul className="space-y-2">
            {quickLinks02.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
          <ul className="space-y-2">
            {quickLinks03.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
