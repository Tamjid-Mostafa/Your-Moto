import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { HiChevronDown } from "react-icons/hi";
import toast from "react-hot-toast";
import Loader from "../../Component/Loader/Loader";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  /* const [deleteProduct, setDeleteProduct ] = useState(null); */

  /* Action Button Toggler */
  const [isOpen, setIsOpen] = useState("false");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  /* Product Load */
  const url = `http://localhost:5000/myproducts?email=${user?.email}`;

  const {
    data: myproducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
          },
        });
        const myproducts = res.data;
        return res.data;
      } catch (error) {}
    },
  });

  const handleAdvertise = (id) => {
    const url = `http://localhost:5000/myproduct/advertise/${id}`;
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
          toast.success("Advertise Successfully");
          refetch();
        }
      });
  };

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/delete_product/${product?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${product?.product_name} Deleted Successfully`);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative flex justify-center mt-6">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-lg">
              <th scope="col" className="py-3 px-6 ">
                Bike
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Mileage
              </th>
              <th scope="col" className="py-3 px-6">
                Resell Price
              </th>
              <th scope="col" className="py-3 px-6">
                Original Price
              </th>
              <th scope="col" className="py-3 px-6">
                Advertise
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {myproducts?.map((product) => (
              <tr
                key={product._id}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={product?.image}
                    alt={product?.product_name}
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {product?.product_name}
                    </div>
                    <div className="font-normal text-gray-500">
                      Posted: {product?.postedTime}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{product?.bike_type}</td>

                <td className="py-4 px-6">{product?.mileage} Kms</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    ${product?.resell_price}
                  </div>
                </td>
                <td className="py-4 px-6">{product?.bike_type}</td>
                <td className="py-4 px-6">
                  {product?.advertise !== true && (
                    <button
                      onClick={() => handleAdvertise(product?._id)}
                      type="button"
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-2 py-0.5"
                    >
                      Advertise
                    </button>
                  )}
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleDeleteProduct(product)}
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-sm px-2 py-0.5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
