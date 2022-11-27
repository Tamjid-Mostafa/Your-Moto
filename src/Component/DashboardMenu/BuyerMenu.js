import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const BuyerMenu = () => {
    return (
        <>
      <ul className="mt-8 space-y-2 tracking-wide">
        <li>
          <Link
            to="/dashboard/orders"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <MdShoppingCart className="h-5 w-5" />
            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">
              My Orders
            </span>
          </Link>
        </li>
        
      </ul>
    </>
    );
};

export default BuyerMenu;