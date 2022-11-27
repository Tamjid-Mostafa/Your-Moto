import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import AdminMenu from "./AdminMenu";
import SellerMenu from "./SellerMenu";
import BuyerMenu from "./BuyerMenu";

const Sidebar = ({ role, loading }) => {
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
        className={` absolute flex flex-col justify-between overflow-x-hidden  border-none bg-white px-6 pb-3 transition duration-300 md:w-3/12 lg:ml-0 lg:w-[20%] xl:w-[20%] 2xl:w-[20%] dark:bg-gray-800 dark:border-gray-700 w-64 space-y-6 py-4 top-14 bottom-0   left-0 transform ${
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
            <span className="hidden text-gray-400 lg:block capitalize first-letter:font-semibold first-letter:text-primary">{role}</span>
          </div>

          {role && role === "buyer"? 
             <BuyerMenu /> : <>{role === "seller" ? <SellerMenu /> : <AdminMenu />} </> }
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
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
