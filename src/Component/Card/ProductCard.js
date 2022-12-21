import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import toast from "react-hot-toast";


const ProductCard = ({
  product,
  closeModal,
  openModal,
  isOpen,
  setIsOpen,
  item,
  setItem,
}) => {
  const {
    _id,
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
    years_of_use,
    purchase_year,
    sellerName,
    sellerEmail,
    sellerVerify,
    booked,
    report,
  } = product;

  /* -----------Report Item------ */
  const submitReport = (id) => {
    const url = `https://yourmoto-server-tamjid-mostafa.vercel.app/report/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Reported Successfully");
        }
      });
  };

  function openSetModal() {
    setItem(product);
    openModal();
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <PhotoProvider
        speed={() => 1000}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
        maskOpacity={0.8}
      >
        <PhotoView src={image}>
          <img
            className="p-8 block rounded-t-lg object-cover object-top transition-all duration-500 group-hover:rounded-xl"
            src={image}
            alt="product"
            loading="lazy"
            width="1000"
            height="667"
          />
        </PhotoView>
      </PhotoProvider>
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product_name}
          </h5>
        </Link>
        <div className="flex justify-between mt-2.5 ">
          <div className="flex items-center mt-2.5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Posted: {postedTime}
            </span>
          </div>
          <div className="flex items-center mt-2.5 text-primary">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-2.5 ">
          <div className="flex items-center mt-2.5 mb-5">
            <span className=" text-accent text-xs font-semibold mr-2 px-0.5 py-0.5 dark:text-white">
              Location: {location}
            </span>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="text-sm">Years of Used: </span>
            <span className="text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {years_of_use}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${resell_price}
          </span>
          {!report ? (
            <button
            onClick={() => submitReport(_id)}
              className="text-xs font-thin text-gray-900 dark:text-white"
            >
              Report
            </button>
          ) : (
            <button
              disabled
              className="text-xs font-thin text-gray-900 dark:text-white"
            >
              Reported
            </button>
          )}
        </div>
        <div className="flex justify-between items-center mt-2.5 mb-5">
          <div className="flex items-center">
            <div className="mr-3">
              <span>Seller:</span>
              <span className="text-primary uppercase text-xs font-semibold  px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                {sellerName}
              </span>
            </div>
            {!sellerVerify ? (
              "Not Verified"
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>

                <span className="text-gray-300 text-xs font-semibold mr-2 px-0.5 py-0.5  dark:text-blue-500">
                  verified
                </span>
              </>
            )}
          </div>

          {!booked ? (
            <label htmlFor="" onClick={openSetModal}>
              {" "}
              <button className="py-3 px-3 rounded-lg text-center transition bg-gradient-to-br from-yellow-500 to-orange-400 hover:to-yellow-600 md:px-8 text-white ">
                Book
              </button>
            </label>
          ) : (
            <button
              disabled
              className="text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 py-3 px-3 "
            >
              Booked
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
