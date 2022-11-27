import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Component/Loader/Loader';
import { AuthContext } from '../../contexts/AuthProvider';

const BuyerOrders = () => {
    const { user } = useContext(AuthContext);
  /* const [deleteProduct, setDeleteProduct ] = useState(null); */

  /* Action Button Toggler */
  const [isOpen, setIsOpen] = useState("false");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  /* Order Load */
  const url = `http://localhost:5000/bookedItems?email=${user?.email}`;

  const {
    data: bookedItems,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookedItems", user?.email],
    queryFn: async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
          },
        });
        return res.data;
      } catch (error) {}
    },
  });

  const handleAdvertise = (id) => {
    const url = `http://localhost:5000/bookedItems/${id}`;
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
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`${product?.product_name} Deleted Successfully`);
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
            {bookedItems?.map((bookedItem) => (
              <tr
                key={bookedItem._id}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={bookedItem?.image}
                    alt={bookedItem?.product_name}
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {bookedItem?.product_name}
                    </div>
                    <div className="font-normal text-gray-500">
                      Posted: {bookedItem?.postedTime}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{bookedItem?.bike_type}</td>

                <td className="py-4 px-6">{bookedItem?.mileage} Kms</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    ${bookedItem?.resell_price}
                  </div>
                </td>
                <td className="py-4 px-6">{bookedItem?.bike_type}</td>
                <td className="py-4 px-6">
                  {bookedItem?.advertise !== true && (
                    <button
                      onClick={() => handleAdvertise(bookedItem?._id)}
                      type="button"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-0.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Advertise
                    </button>
                  )}
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleDeleteProduct(bookedItem)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-0.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

export default BuyerOrders;