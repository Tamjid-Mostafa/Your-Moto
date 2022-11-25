import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Sidebar = () => {
  const { user, providerSignOut } = useContext(AuthContext);

  /* ------------Handle Logout------------ */

  const handleLogout = () => {
    providerSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const [isActive, setActive] = useState("false");
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">Your Moto</Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={` absolute flex flex-col justify-between overflow-x-hidden  border-none bg-white px-6 pb-3 transition duration-300 md:w-3/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700 w-64 space-y-6 py-4 top-14 bottom-0   left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="mt-8 text-center">
            <img
              src={user?.photoURL}
              alt=""
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
              {user?.displayName}
            </h5>
            <span className="hidden text-gray-400 lg:block">{user?.email}</span>
          </div>

          <ul className="mt-8 space-y-2 tracking-wide">
            <li>
              <Link
                to="/dashboard/addproduct"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
                  Add Product
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button onClick={handleLogout} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <FaSignOutAlt className="h-6 w-6"></FaSignOutAlt>

            <span className="group-hover:text-gray-700 dark:group-hover:text-white">
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
