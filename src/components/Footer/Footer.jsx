import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the year

  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3 font-serif">
              Quick Rental 🚴‍♂️ – Ride Anywhere, Anytime!
            </h1>
            <p className="text-sm">
              Ride Easy, Ride Anywhere!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Bhubaneswar, Odisha</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 8018019372</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/_a.b.h.i__9/?igsh=NHE4dWhoZ2lqODE%3D" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/people/Abhijeet-Malik/pfbid0yrFNrGah8qVKpm4kVJs45jQ7Gae7N6fdBkFRNFnyyjdNGYJkSxJ7xa7GRhXZdcKxl/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/abhijeet-malik-ba7822205/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Important Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                    <a href={link.link} className="flex items-center space-x-1">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Support</h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                  <a href="/#faq" className="flex items-center space-x-1">
                    <span>&#11162;</span>
                    <span>FAQs</span>
                  </a>
                </li>
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                  <a href="/#terms" className="flex items-center space-x-1">
                    <span>&#11162;</span>
                    <span>Terms & Conditions</span>
                  </a>
                </li>
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                  <a href="/#privacy" className="flex items-center space-x-1">
                    <span>&#11162;</span>
                    <span>Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Contact Us</h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                  <a href="mailto:contact@quickrental.com" className="flex items-center space-x-1">
                    <span>&#11162;</span>
                    <span>Email: contact@quickrental.com</span>
                  </a>
                </li>
                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500 dark:text-gray-200">
                  <a href="tel:+918018019372" className="flex items-center space-x-1">
                    <span>&#11162;</span>
                    <span>Phone: +91 8018019372</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 py-4 text-center text-gray-500 dark:text-gray-200">
          © {currentYear} Quick Rental - Made up with Abhijeet malik.
        </div>
      </section>
    </div>
  );
};

export default Footer;