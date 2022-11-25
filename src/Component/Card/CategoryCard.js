import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const CategoryCard = ({categoryCard}) => {
    const {_id, categoryName, details, image, bgClass} = categoryCard;
  return (
    <div>
      <div className={`group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none ${bgClass}`}>
        <img
          className="mx-auto w-full rounded-lg"
          src={image}
          alt="illustration"
          loading="lazy"
        />
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {categoryName}
        </h3>
        <p>
         {details}
        </p>
        <Link
          to={`/categories/${categoryName}`}
          className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
        >
          <GoArrowRight className="text-primary text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
