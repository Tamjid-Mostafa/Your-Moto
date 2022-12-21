import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useContext } from "react";
import toast from "react-hot-toast";
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
  const { user, loading, setloading } = useContext(AuthContext);

  const handleBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const bikeName = form.bikeName.value;
    const user_name = user?.displayName;
    const user_email = user?.email;
    const bike_price = form.price.value;
    const user_contact_no = form.contact.value;
    const meeting_location = form.location.value;
    const product_name = item.product_name;
    const bike_type = item.bike_type;
    const condition = item.condition;
    const resell_price = item.resell_price;
    const original_price = item.original_price;
    const mileage = item.mileage;
    const description = item.description;
    const location = item.location;
    const image = item.image;
    const postedTime = item.postedTime;
    const years_of_use = item.years_of_use;
    const purchase_year = item.purchase_year;
    const sellerName = item.sellerName;
    const sellerEmail = item.sellerEmail;

    const bookInfo = {
      bikeName: bikeName,
      user_name: user_name,
      user_email: user_email,
      bike_price: bike_price,
      user_contact_no: user_contact_no,
      meeting_location: meeting_location,
      bike_type,
      condition,
      resell_price,
      original_price,
      mileage,
      description,
      location,
      image,
      postedTime,
      years_of_use,
      purchase_year,
      sellerName,
      sellerEmail,
    };
    axios
      .post("https://yourmoto-server-tamjid-mostafa.vercel.app/booked-items", bookInfo)
      .then((res) => {
        if (res.statusText === "OK") {
          toast.success(`${bookInfo?.bikeName} is booked successfully`);
        }
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
                    onSubmit={handleBook}
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
                        name="bikeName"
                        value={item?.product_name}
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
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
                        name="name"
                        value={user?.displayName}
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
                        name="email"
                        value={user?.email}
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
                        name="price"
                        value={item?.resell_price}
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
                        name="contact"
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
                        name="location"
                        placeholder="123 St. Abc Ave. Dhaka-1120"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-400 mb-5"
                      />
                    </div>

                    <label htmlFor="" onClick={closeModal}>
                      <PrimaryButton type="button">
                        <span className="text-base font-semibold text-white dark:text-gray-900">
                          Book
                        </span>
                      </PrimaryButton>
                    </label>
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
