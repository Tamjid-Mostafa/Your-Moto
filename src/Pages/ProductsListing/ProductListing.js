import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Component/Card/ProductCard";

const ProductListing = () => {
  const products = useLoaderData();
  console.log(products);

  if(products.length <= 1){
    const className = 'lg:grid-cols-1'
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
          <div className={`grid gap-3  md:w-8/12 lg:w-full ${products.length <= 2  ? "lg:grid-cols-2 justify-items-center" : "lg:grid-cols-3 justify-items-center"}`}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
