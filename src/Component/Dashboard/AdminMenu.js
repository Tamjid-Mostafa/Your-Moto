import React from "react";
import { Link } from "react-router-dom";
import { MdReport } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <ul className="mt-8 space-y-2 tracking-wide">
        <li>
          <Link
            to="/dashboard/addproduct"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <FaUserFriends className="h-5 w-5" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
              Add Product
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addproduct"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <FaUserFriends className="h-5 w-5" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
              My Product
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addproduct"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <MdReport className="h-5 w-5" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
              Reported Items
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminMenu;