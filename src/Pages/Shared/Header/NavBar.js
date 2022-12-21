import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logoBlack from "../../../logoBlack.png";
import logoLight from "../../../logoLight.png";

import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";
import { Avatar } from "flowbite-react";

const NavBar = () => {
  const { user, providerSignOut } = useContext(AuthContext);
  const [isUserOpen, setIsUserOpen] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModeOpen, setIsModeOpen] = useState(true);

  /* ------------Handle Logout------------ */

  const handleLogout = () => {
    providerSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");

        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const HTML = document.querySelector("html").getAttribute("class");

  return (
    <nav className="relative bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={`${theme === "dark" || "" ? logoLight : logoBlack }`}
            className="h-6 mr-3 sm:h-9"
            alt="Your Moto Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Your Moto
          </span>
        </Link>
        <div className="flex items-center md:order-2">
            
          <button
            onClick={() => setIsUserOpen(!isUserOpen)}
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            {
              user?.uid ? (
                <Avatar
                  alt="User settings"
                  status="online"
                  img={user?.photoURL}
                  rounded={true}
                />
              ) : (
                <></>
              )
            }
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className={`absolute lg:top-16 lg:right-20 top-12 right-1 z-50 ${
              isUserOpen && "hidden"
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
              {user?.displayName}
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
              {user?.email}
              </span>
              {user?.email ? (
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              ) : (
                <span className="block truncate text-sm font-medium">
                  anonymous@anonymous.com
                </span>
              )}
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
           onClick={() => setIsModeOpen(!isModeOpen)}
            className="flex ml-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >{theme === "light" ? <span className={`text-2xl rounded-full m-1
          text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}><FaSun/></span> : <>{theme === "dark" ? <span className={`text-2xl rounded-full m-1 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}><FaMoon/></span> : <span className={`text-2xl rounded-full m-1 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}><FaDesktop/></span>}</>}
          </button>
          
          {/* <!-- Dropdown menu --> */}
          <div
            className={`absolute lg:top-16 lg:right-40 top-12 right-12 z-50 ${
              isModeOpen && "hidden"
            } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
              {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${
                theme === opt.text && "text-sky-600"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        
         

        </div>
        <div
          className={`items-center justify-between ${
            !isNavOpen ? "hidden" : ""
          } w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Categories
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    type="button"
                    onClick={handleLogout}
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Log In
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;
