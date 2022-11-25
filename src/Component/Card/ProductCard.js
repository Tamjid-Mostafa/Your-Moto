import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const {
    product_name,
    bike_type,
    condition,
    resell_price,
    original_price,
    mileage,
    description,
    location,
    image,
    postedTime,
  } = product;
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        <img className="p-8 rounded-t-lg" src={image} alt="product" />
      </Link>
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product_name}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <Link
            to="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Booked
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
