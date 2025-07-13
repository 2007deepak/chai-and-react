import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Hamburger - visible on small screens only */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 focus:outline-none text-2xl"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                    lg:border-0 lg:p-0 lg:hover:bg-transparent hover:bg-gray-50
                     ${
                       isActive
                         ? "text-red-600"
                         : "text-gray-900 hover:text-red-600"
                     }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                    lg:border-0 lg:p-0 lg:hover:bg-transparent hover:bg-gray-50
                    ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-900 hover:text-red-600"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                    lg:border-0 lg:p-0 lg:hover:bg-transparent hover:bg-gray-50
                    ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-900 hover:text-red-600"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                     lg:border-0 lg:p-0 lg:hover:bg-transparent hover:bg-gray-50
                     ${
                       isActive
                         ? "text-red-600"
                         : "text-gray-900 hover:text-red-600"
                     }`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
