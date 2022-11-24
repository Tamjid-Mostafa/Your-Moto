import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/men&motorcycle.jpg";

const BuyMotorcycle = () => {
  const myStyle = {
    minHeight: "400px",
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="relative bg-cover bg-no-repeat bg-center" style={myStyle}>
      <div className="flex flex-col justify-center items-center absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-center text-white"></div>
      <div>
        <div className=" relative py-16">
          <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
            <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
              <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                  Sell Your Motorcycle for
                  <span className="text-primary dark:text-sky-300">
                    {" "}
                    $14.95
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Millions of buyers are looking for their next motorcycle on
                  Cycle Trader this month.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="#"
                    className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-white dark:text-dark">
                      Buy now
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-primary dark:text-white">
                      Get Listed
                    </span>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                <div className="col-span-2 row-span-4">
                  <img
                    src="https://i.ibb.co/ScYbHBn/KTM-1290-SUPER-ADVENTURE-R.jpg"
                    className="rounded-full"
                    width="640"
                    height="960"
                    alt="bike"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-2 row-span-2">
                  <img
                    src="https://i.ibb.co/F8smXKw/2022-Kawasaki-Z400.jpg"
                    className="h-full w-full rounded-xl object-cover object-top"
                    width="640"
                    height="640"
                    alt="bike"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-3 row-span-3">
                  <img
                    src="https://i.ibb.co/6NnHnJg/bmw1000rr.jpg"
                    className="h-full w-48 rounded-xl object-cover object-top"
                    width="640"
                    height="427"
                    alt="bike"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyMotorcycle;
