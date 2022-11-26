import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PrimaryButton from '../Button/PrimaryButton'


const BookModal = ({openModal,closeModal, isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [item, setItem] = useState("");

  useEffect(()=>{
    fetch(`http://localhost:5000/products?id=${""}`)
    .then(res => res.json())
    .then(data => {
      setItem(data);
    })
  },[])


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleBook = (data) =>{
  const itemInfo = {
    name: data.name,
    email: data.email,
    role: data.buyer_or_seller,
    image: data.url
  }
  axios.post("http://localhost:5000/booked-items", itemInfo)
  .then(res => {
          
    toast.success(`${itemInfo.name} is booked successfully`);
    
    navigate(from, { replace: true });

  })
  .catch(err => {
    console.error(err);
  })
  
}

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
                    Payment successful
                  </Dialog.Title>
                  <form
                onSubmit={handleSubmit(handleBook)}
                action=""
                className="mt-10 space-y-8 dark:text-white"
              >
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                  disabled
                    id=""
                    type="text"
                    {...register("name", {
                      required: "Please provide your name",
                    })}
                    placeholder="Your Name"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                  {errors.name && (
                    <p className="text-red-600" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    type="file"
                    {...register("image", {
                      required: "Profile Picture is Required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.img && (
                    <p className="text-red-500">{errors.img.message}</p>
                  )}
                </div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <select
                    {...register("buyer_or_seller", {
                      required: "User  is Required",
                    })}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>

                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    placeholder="Email"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                  {errors.email && (
                    <p className="text-red-600" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end">
                  <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                    <input
                      id=""
                      type="Your password"
                      {...register("password", {
                        required: "Password is Required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be atleast 6 charecters or longer",
                        },
                      })}
                      placeholder="Password"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-400"
                    />
                    {errors.password && (
                      <p className="text-red-600" role="alert">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Already have an account?{" "}
                      <Link className="text-secondary" to="/login">
                        Log In
                      </Link>
                    </span>
                  </button>
                </div>

                <div className="mt-4">
                  <PrimaryButton type="button" onClick={closeModal} className="w-11">
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Sign Up
                    </span>
                  </PrimaryButton>
                </div>
              </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default BookModal;
