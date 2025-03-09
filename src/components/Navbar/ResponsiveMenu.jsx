import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar"; // Ensure Navlinks is an array

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
      bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black 
      transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      {/* User Info Card */}
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>User Name</h1>
            <h1 className="text-l text-slate-500">user id</h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-12">
          <ul className="space-y-2 text-xl">
            {Navlinks.map((data, index) => (
              <li key={index}>
                <a href={data.link} className="mb-4 inline-block hover:text-primary">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="footer text-center text-sm text-gray-500">
        <h1>
          Made with ❤ by{" "}
          <a href="#/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            Abhijeet Malik
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
