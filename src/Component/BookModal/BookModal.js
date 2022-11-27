import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import PrimaryButton from "../Button/PrimaryButton";

const BookModal = ({
  closeModal,
  openModal,
  isOpen,
  setIsOpen,
  item,
  setItem,
}) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  console.log(item);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleBook = (data) => {
    const bookInfo = {
      bike_name: data.bike_name,
      user_name: data.name,
      user_email: data.email,
      bike_price: data.price,
      user_contact_no: data.url,
      meeting_location: data.location
    };
    axios
      .post("http://localhost:5000/booked-items", bookInfo)
      .then((res) => {
        toast.success(`${bookInfo.name} is booked successfully`);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Book Now !!
                  </Dialog.Title>
                  <form
                    onSubmit={handleSubmit(handleBook)}
                    action=""
                    className="mt-10 space-y-8 dark:text-white"
                  >
                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Bike Name
                      </label>
                      <input
                        disabled
                        id=""
                        type="text"
                        {...register("bike_name", {
                          required: "Please provide your name",
                        })}
                        placeholder={item?.product_name}
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
                      {errors.name && (
                        <p className="text-red-600" role="alert">
                          {errors.name?.message}
                        </p>
                      )}
                    </div>

                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Your Name
                      </label>
                      <input
                        disabled
                        id=""
                        type="text"
                        {...register("name", {
                          required: "Please provide your name",
                        })}
                        placeholder={user?.displayName}
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>

                    <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Email
                      </label>
                      <input
                        disabled
                        id=""
                        type="email"
                        {...register("email", {
                          required: "Email Address is required",
                        })}
                        placeholder={user?.email}
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>

                      <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Bike Price
                        </label>
                        <input
                        disabled
                          id=""
                          type="text"
                          {...register("price", {
                            required: "Password is Required",
                            minLength: {
                              value: 6,
                              message:
                                "Password must be atleast 6 charecters or longer",
                            },
                          })}
                          placeholder={item?.resell_price}
                          className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-400"
                        />
                      </div>
                      <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Contact No.
                        </label>
                        <input
                          id=""
                          type="text"
                          {...register("contact", {
                            required: "Password is Required",
                            minLength: {
                              value: 6,
                              message:
                                "Password must be atleast 6 charecters or longer",
                            },
                          })}
                          placeholder="888-8888-8888"
                          className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-400"
                        />
                      </div>
                      <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Meeting Location
                        </label>
                        <input
                          id=""
                          type="text"
                          {...register("location", {
                            required: "Password is Required",
                            minLength: {
                              value: 6,
                              message:
                                "Password must be atleast 6 charecters or longer",
                            },
                          })}
                          placeholder="123 St. Abc Ave. Dhaka-1120"
                          className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-400"
                        />
                      </div>

                    <PrimaryButton
                      type="button"
                      onClick={closeModal}
                      className="w-11 mt-4"
                    >
                      <span className="text-base font-semibold text-white dark:text-gray-900">
                        Book
                      </span>
                    </PrimaryButton>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookModal;
