import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import CategoryCard from "../../../Component/Card/CategoryCard";
import Loader from "../../../Component/Loader/Loader";

const Categories = () => {
  
  const url = `http://localhost:5000/categories`;


  /* Load Categories  */
  const { data: categories = [],
    isLoading,
   } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          'content-type' : 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log(res);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }


  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <div>
            <h2 className="my-8 text-center text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Get Your Desire
              <br className="lg:block" hidden />
              Machine
            </h2>
          </div>
          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            {categories.map((categoryCard) => (
              <CategoryCard
                key={categoryCard._id}
                categoryCard={categoryCard}
              ></CategoryCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
