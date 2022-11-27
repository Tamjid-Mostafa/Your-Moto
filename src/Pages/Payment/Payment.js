import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const navigation = useNavigation();
  const { treatment, price, slot, appointmentDate } = booking;
  if (navigation.state === "loading") {
    return <Loader/>;
  }
  return (
    <div className="relative flex justify-center mt-6">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <h2 className="text-3xl">Payment for {booking?.treatment}</h2>
      <p className="text-3xl">
        Please pay <strong>${price}</strong> for you appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
    </div>
    </div>
  );
};

export default Payment;
