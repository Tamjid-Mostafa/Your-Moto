import React from "react";
import { Link } from "react-router-dom";

import { TbMotorbike, TbAccessible, TbChecklist } from "react-icons/tb";

const SellerMenu = () => {
  return (
    <>
      <ul className="mt-8 space-y-2 tracking-wide">
        <li>
          <Link
            to="/dashboard/addproduct"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <TbMotorbike className="h-5 w-5" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
              Add Product
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/myproduct"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <TbChecklist className="h-5 w-5" />
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
            <TbAccessible className="h-5 w-5" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
              My Buyer
            </span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SellerMenu;
