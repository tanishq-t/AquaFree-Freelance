import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="text-gray-400 bg-[#0B102C] body-font w-full ">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Adura</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/advertise"
              className={({ isActive }) =>
                `mr-10 hover:text-white ${
                  isActive
                    ? "underline underline-offset-4 decoration-4 text-white"
                    : "no-underline"
                } hover:cursor-pointer`
              }
            >
              Advertise
            </NavLink>
            <NavLink
              to="/distribute"
              className={({ isActive }) =>
                `mr-10 hover:text-white ${
                  isActive
                    ? "underline underline-offset-4 decoration-4 text-white"
                    : "no-underline"
                } hover:cursor-pointer`
              }
            >
              Distribute
            </NavLink>
            <NavLink
              to="/hall-of-fame"
              className={({ isActive }) =>
                `mr-10 hover:text-white ${
                  isActive
                    ? "underline underline-offset-4 decoration-4 text-white"
                    : "no-underline"
                } hover:cursor-pointer`
              }
            >
              Hall Of Fame
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `mr-10 hover:text-white ${
                  isActive
                    ? "underline underline-offset-4 decoration-4 text-white"
                    : "no-underline"
                } hover:cursor-pointer`
              }
            >
              FAQs
            </NavLink>
          </nav>
          <Link to="/contact-us">
            <button className="inline-flex items-center bg-transparent text-white border-2 border-[#FC581C] py-2  px-5 focus:outline-none hover:bg-gray-700 rounded-full text-base mt-4 md:mt-0">
              Contact Us
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="mx-auto border-t border-[#1E253F] border-1"></div>
      </header>
    </div>
  );
}

export default Header;
