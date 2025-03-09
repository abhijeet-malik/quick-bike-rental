import React from "react";

const testimonialData = [
  {
    name: "Rahul Sundar",
    image: "",
    description: "Amazing experience! The booking process was super easy, and the bike was in perfect condition. Highly recommend!",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Affordable prices and excellent service. The ride was smooth, and the team was very helpful.",
    aosDelay: "300",
  },
  {
    name: "Arjun R",
    image: "",
    description: "Loved the variety of bikes available. Rented a sports bike for a weekend trip, and it was an unforgettable ride!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif">
              What Our Clients Say 💬
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Join our happy riders—book your bike today! 🚴‍♂️🏍️
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
