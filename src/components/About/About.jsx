import React from "react";
import BikePng from "../../assets/bikrm.webp";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={BikePng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              At Quic rental, we are passionate about providing a hassle-free and affordable bike rental experience. Whether you need a ride for daily commuting, 
              weekend adventures, or long road trips, we’ve got the perfect bike for you
              </p>
              <p data-aos="fade-up">
              ✔️Wide Range of Bikes – From scooters to sports bikes, we have it all.
              <br />
              ✔️ Affordable Pricing – Enjoy budget-friendly rentals with no hidden costs.
              <br />
              ✔️ Fast & Easy Booking – Rent your bike in just a few clicks.
              <br />
              ✔️ Safe & Well-Maintained Rides – Your safety is our priority.
              <br />
              ✔️ 24/7 Customer Support – We’re here to assist you anytime.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started with us!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
