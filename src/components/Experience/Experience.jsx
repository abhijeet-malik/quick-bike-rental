import React from "react";

const Experience = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* first col */}
          <div className="bg-dark/80 p-4 grid place-items-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">09</h1>
              <p className="text-xl font-semibold">Years of Experience</p>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-rows-2 gap-3">
            <div className="text-center p-6 bg-dark/95">
              <h1 className="text-3xl font-bold">20+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="text-center p-6 bg-dark/95">
              <h1 className="text-3xl font-bold">105+</h1>
              <p>Completed Projects</p>
            </div>
          </div>
          {/* Third col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark/95">
              <h1 className="text-3xl font-bold">30+</h1>
              <p>Serving hand to hand service</p>
            </div>
            <div className="text-center p-6 bg-dark/95">
              <h1 className="text-3xl font-bold">100+</h1>
              <p>Partrnership with vender</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
