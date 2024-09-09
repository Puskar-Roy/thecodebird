
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-100 py-2  fixed top-0 w-full z-50 backdrop:blur ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-1 mx-auto">
        <Link to="#" className="flex items-center">
          <img
            src={logo}
            className="h-8 mr-3 sm:h-12"
            alt="Landwind Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            The CodeBird
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <Link
            to="/"
            className="text-white bg-gradient-to-r from-blue-600 to-blue-300 hover:bg-orange-300 focus:ring-2 focus:ring-blue-600 font-medium rounded-2xl text-sm px-2 lg:px-3 py-1 lg:py-1.5 sm:mr-2 lg:mr-0  focus:outline-none"
          >
            Join Us
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="#"
                className="block text-lg py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block text-lg py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 "
              >
                Event
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block text-lg py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0"
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block text-lg py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 ">
                Team
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block text-lg py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

