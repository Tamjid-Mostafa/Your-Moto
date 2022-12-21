import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Component/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProduct = () => {
    const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  /* ===Category=== */
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get("https://yourmoto-server-tamjid-mostafa.vercel.app/categories");
      return res.data;
    },
  });

  /* ===Add Product Data to Database=== */
  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${"527cb8c6aafc33970b1b5fa05f4bc3ac"}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const time = new Date().toLocaleString();
          const product = {
            product_name: data.motorcycle_name,
            bike_type: data.category,
            condition: data.condition,
            resell_price: data.resell_price,
            original_price: data.original_price,
            mileage: data.mileage,
            description: data.description,
            location: data.location,
            image: imageData.data.url,
            postedTime: time,
            years_of_use: data.years_of_use,
            purchase_year: data.purchase_year,
            sellerName: user.displayName,
            sellerEmail: user.email
            

          };
          /* -----Save product to the----- */
          axios
            .post("https://yourmoto-server-tamjid-mostafa.vercel.app/products", product)
            .then((res) => {
              toast.success(`${product.product_name} is added successfully by ${user.displayName}`);
              navigate("/dashboard/myproduct");
            })
            .catch((err) => {
              console.error(err);
            });
        }
      });
  };

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-100 dark:bg-gray-900">
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="w-full max-w-lg"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-first-name"
                >
                  Bike Type
                </label>
                <select
                  {...register("category", {
                    required: "Category is Required",
                  })}
                  className="select select-bordered 
                appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  {categories?.length &&
                    categories.map((category) => (
                      <option key={category._id} value={category.categoryName}>
                        {category.categoryName}
                      </option>
                    ))}
                </select>
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-first-name"
                >
                  Condition
                </label>
                <select
                  {...register("condition", {
                    required: "Condition is Required",
                  })}
                  className="select select-bordered 
                appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
                {errors.condition && (
                  <p className="text-red-500">{errors.condition.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-first-name"
                >
                  Motorcycle Name
                </label>
                <input
                  {...register("motorcycle_name", {
                    required: "Motorcycle name is required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Ducati"
                />
                {errors.motorcycle_name && (
                  <p className="text-red-500">
                    {errors.motorcycle_name.message}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-last-name"
                >
                  Resell Price
                </label>
                <input
                  {...register("resell_price", {
                    required: "Please provide resell_price",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="0000"
                />
                {errors.resell_price && (
                  <p className="text-red-500">{errors.resell_price.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password"
                >
                  Original Price
                </label>
                <input
                  {...register("original_price", {
                    required: "Please provide Original Price",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  placeholder="0000"
                />
                {errors.original_price && (
                  <p className="text-red-500">
                    {errors.original_price.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password"
                >
                  Years of Purchase
                </label>
                <input
                  {...register("purchase_year", {
                    required: "Please provide Years of Purchase",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  placeholder="2022"
                />
                {errors.purchase_year && (
                  <p className="text-red-500">{errors.purchase_year.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password"
                >
                  Years of Use
                </label>
                <input
                  {...register("years_of_use", {
                    required: "Please provide Years of Use",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  placeholder="00"
                />
                {errors.years_of_use && (
                  <p className="text-red-500">{errors.years_of_use.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password"
                >
                  Mileage
                </label>
                <input
                  {...register("mileage", {
                    required: "Please provide  Total Mileage",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  placeholder="0000"
                />
                {errors.mileage && (
                  <p className="text-red-500">{errors.mileage.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="description"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Write about your Motorcycle
                </label>

                <textarea
                  {...register("description", {
                    required: "Please add Description",
                  })}
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="I have been using..."
                ></textarea>
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-city"
                >
                  Location
                </label>
                <input
                  {...register("location", {
                    required: "Please provide your location",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Dhaka"
                />
                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-zip"
                >
                  Upload Picture
                </label>
                <input
                  {...register("image", {
                    required: "Image is Required",
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="file"
                  id="image"
                  accept="image/*"
                  hidden
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
            </div>
            <div>
              <PrimaryButton className="w-11">
                <span className="text-base font-semibold text-white dark:text-gray-900">
                  Submit
                </span>
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
