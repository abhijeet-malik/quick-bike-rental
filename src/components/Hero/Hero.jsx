import React, { useEffect } from "react";
import bikePng from "../../assets/royal back bike.png";
import yellowBike from "../../assets/bike front.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS once
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? bikePng : yellowBike}
              alt="Bike Rental"
              className="sm:scale-125 relative -z-10 max-h-[280px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Book Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Bike Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Explore the city or embark on an adventurous ride with our hassle-free bike rental service. 
              Whether you need a ride for daily commutes, weekend getaways, or thrilling road trips, we've got a wide 
              range of well-maintained bikes to suit your needs. Book your ride in just a few clicks and enjoy a smooth, 
              affordable, and eco-friendly travel experience.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
