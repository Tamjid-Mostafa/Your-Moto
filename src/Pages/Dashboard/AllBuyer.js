import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";

const AllBuyer = () => {
  const url = `https://yourmoto-server-tamjid-mostafa.vercel.app/buyers`;

  /* Load buyer List  */
  const {
    data: buyers = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["buyers"],
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

//   /* ------Handle Verify buyer----- */
//   const handleVerify = (email) => {
//     const url = `https://yourmoto-server-tamjid-mostafa.vercel.app/buyers/${email}`;
//     fetch(url, {
//       method: "PUT",
//       headers: {
//         authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount > 0) {
//           toast.success("Advertise Successfully");
//           refetch();
//         }
//       });
//   };

  /* -----------Delete buyer------- */
  const handleDeletebuyer = (buyer) => {
    fetch(`https://yourmoto-server-tamjid-mostafa.vercel.app/users/${buyer?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("yourMoto_Token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`${buyer?.name} Deleted Successfully`);
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
                buyer
              </th>
              <th scope="col" className="py-3 px-6">
                buyer Email
              </th>
              {/* <th scope="col" className="py-3 px-6">
                Verified
              </th>
              <th scope="col" className="py-3 px-6">
                Verify
              </th> */}
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer) => (
              <tr
                key={buyer._id}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={buyer?.image}
                    alt={buyer?.bikeName}
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {buyer?.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      Role: {buyer?.role}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{buyer?.email}</td>

                {/* <td className="py-4 px-6">{buyer?.verify ? "verified" : "Not Verified"} </td>
                <td className="py-4 px-6">
                  <Link to={`#`}>
                    <button
                      onClick={() => handleVerify(buyer?.email)}
                      disabled={buyer.verify}
                      type="button"
                      className={`${
                        !buyer.verify
                          ? "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
                          : "text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      } font-medium rounded-lg text-sm px-2 py-0.5`}
                    >
                      {!buyer.role ? "Verify" : "Verified"}
                    </button>
                  </Link>
                </td> */}
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleDeletebuyer(buyer)}
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

export default AllBuyer;
