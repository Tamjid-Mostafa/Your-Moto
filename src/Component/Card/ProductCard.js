import React from "react";
import { Link, useNavigation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import PrimaryButton from "../Button/PrimaryButton";
import BookModal from "../BookModal/BookModal";
import Loader from "../Loader/Loader";
import { PhotoProvider, PhotoView } from "react-photo-view";

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
    sellerVerify
  } = product;

  // const navigation = useNavigation();

  // if ((navigation.state = "loading")) {
  //   return <Loader />;
  // }

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
                          className="p-8 rounded-t-lg object-cover object-top transition-all duration-500 group-hover:rounded-xl" src={image} alt="product"
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
        </div>
        <div className="flex justify-between items-center mt-2.5 mb-5">
          <div className="flex items-center">
            <div className="mr-3">
              <span>Seller:</span>
              <span className="text-primary uppercase text-xs font-semibold  px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                {sellerName}
              </span>
            </div>
            {
              !sellerVerify ? "Not Verified" 
              : 
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
            }
          </div>
          <label  htmlFor="" onClick={openSetModal}>
            <PrimaryButton>
              <Link to="#" className="">
                Book
              </Link>
            </PrimaryButton>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
