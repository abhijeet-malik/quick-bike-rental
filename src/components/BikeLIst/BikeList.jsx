import React from "react";
import splnder from "../../assets/hero-sp.png";
import bike2 from "../../assets/bajaj pulser.jpg";
import bike3 from "../../assets/tvs-ap.avif";

const BikeList = [
  {
    id: 1,
    name: "Hero Splender NXG",
    price: 299,
    image: splnder,
    aosDelay: "0",
    km: 15,
  },
  {
    id: 2,
    name: "Tvs Apache rtr",
    price: 399,
    image: bike3,
    aosDelay: "1000",
    km: 25,
  },
  {
    id: 3,
    name: "Bajaj Pulsar",
    price: 499,
    image: bike2,
    aosDelay: "500",
    km: 20,
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
        Find Your Perfect Ride!
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-sm pb-10">
        Whether you are looking for a sleek city bike, a powerful sports bike, or a rugged off-road adventure ride, we've got you covered! Browse our collection and pick the bike that suits your journey.
        </p>

        {/* Bike listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {BikeList.map((car) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={car.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  src={car.image}
                  alt={`${car.name}`}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{car.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>${car.price}/Day</p>
                  <a href="#">Details</a>
                </div>
              </div>
              <p className="text-xl font-semibold absolute top-0 left-3"><p>${car.km}/km</p></p>
            </div>
          ))}
        </div>
        {/* End of car listing */}

        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" data-aos-delay="600" className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
