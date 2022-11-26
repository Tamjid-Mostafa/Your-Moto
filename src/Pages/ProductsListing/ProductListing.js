import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookModal from "../../Component/BookModal/BookModal";
import ProductCard from "../../Component/Card/ProductCard";

const ProductListing = () => {
  const products = useLoaderData();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div>
            <h2 className="my-8 text-center text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Get Your Desire
              <br className="lg:block" hidden />
              Machine
            </h2>
          </div>
          <div
            className={`grid gap-3  md:w-8/12 lg:w-full ${
              products.length <= 2
                ? "lg:grid-cols-2 justify-items-center"
                : "lg:grid-cols-3 justify-items-center"
            }`}
          >
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                closeModal={closeModal}
                openModal={openModal}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              ></ProductCard>
            ))}
          </div>
          <BookModal
            closeModal={closeModal}
            openModal={openModal}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></BookModal>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
