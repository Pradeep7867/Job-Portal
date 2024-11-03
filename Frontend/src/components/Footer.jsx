import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Import social icons from react-icons
import logo from "./NaukriLogo.png"; // Update the path to your logo

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Logo Section */}
        <div className="flex items-center mb-1">
          <img src={logo} alt="Naukri Logo" className="w-32 h-auto" />
        </div>

        {/* Connect with Us */}
        <div className="mb-4">
          <h4 className="font-bold mb-2">Connect with us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <h4 className="font-bold">About us</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Employer home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Credits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Help</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Summons/Notices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Grievances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Report issue
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Policies</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Fraud alert
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Trust & safety
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Mobile</h4>
            <p>Apply on the go</p>
            <p>Get real-time job updates on our App</p>
            {/* <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600">
                App Store
              </a>
              <a href="#" className="hover:text-blue-600">
                Google Play
              </a>
            </div> */}
          </div>
        </div>

        {/* Trademarks Section */}
        <div className="border-t border-gray-300 mt-4 pt-4 text-center">
          <p className="text-sm">
            All trademarks are the property of their respective owners.
          </p>
          <p className="text-sm">
            All rights reserved © 2024 Info Edge (India) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
