import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";

const AllSeller = () => {
  const url = `https://yourmoto-server-tamjid-mostafa.vercel.app/sellers`;

  /* Load Seller List  */
  const {
    data: sellers = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
        },
      });
      return res.data;
    },
  });

  /* ------Handle Verify Seller----- */
  const handleVerify = (email) => {
    const url = `https://yourmoto-server-tamjid-mostafa.vercel.app/sellers/${email}`;
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

  /* -----------Delete Seller------- */
  const handleDeleteSeller = (seller) => {
    fetch(`https://yourmoto-server-tamjid-mostafa.vercel.app/users/${seller?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`${seller?.name} Deleted Successfully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="relative flex justify-center mt-6">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-lg">
              <th scope="col" className="py-3 px-6 ">
                Seller
              </th>
              <th scope="col" className="py-3 px-6">
                Seller Email
              </th>
              <th scope="col" className="py-3 px-6">
                Verified
              </th>
              <th scope="col" className="py-3 px-6">
                Verify
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller) => (
              <tr
                key={seller._id}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={seller?.image}
                    alt={seller?.bikeName}
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {seller?.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      Role: {seller?.role}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{seller?.email}</td>

                <td className="py-4 px-6">{seller?.verify ? "verified" : "Not Verified"} </td>
                <td className="py-4 px-6">
                  <Link to={`#`}>
                    <button
                      onClick={() => handleVerify(seller?.email)}
                      disabled={seller.verify}
                      type="button"
                      className={`${
                        !seller.verify
                          ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
                          : "text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      } font-medium rounded-lg text-sm px-2 py-0.5`}
                    >
                      {!seller.role ? "Verify" : "Verified"}
                    </button>
                  </Link>
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleDeleteSeller(seller)}
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

export default AllSeller;
