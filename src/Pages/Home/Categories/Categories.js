import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoriesCard = [
    {
      id: 1,
      categoryName: "Sports",
      image: "https://i.ibb.co/6NnHnJg/bmw1000rr.jpg",
      details:
        "Here we have listed out the top-ranked sports motorcycles holding different engine sizes. These are currently available in the market from the various brands ...",
      bgClass: "",
    },
    {
      id: 2,
      categoryName: "Naked Sports",
      image: "https://i.ibb.co/F8smXKw/2022-Kawasaki-Z400.jpg",
      details:
        "Here we have listed out the top-ranked Naked Sports motorcycles holding different engine sizes. These are currently available in the market from the various brands ...",
      bgClass: "",
    },
    {
      id: 3,
      categoryName: "Adventure",
      image: "https://i.ibb.co/ScYbHBn/KTM-1290-SUPER-ADVENTURE-R.jpg",
      details:
        "Here we have listed out the top-ranked Adventure motorcycles holding different engine sizes. These are currently available in the market from the various brands ...",
      bgClass: "",
    },
  ];

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
            {categoriesCard.map((categoryCard) => (
              <CategoryCard
                key={categoryCard.id}
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
