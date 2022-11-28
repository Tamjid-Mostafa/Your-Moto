import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getPaymentIntent } from "../../api/PaymentIntent";
import PrimaryButton from "../../Component/Button/PrimaryButton";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const { bike_price, user_name, user_email, _id } = booking;
  const price = parseInt(bike_price);

  /* API Call */
  useEffect(() => {
    getPaymentIntent(price).then((data) => {
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user_name,
            email: user_email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const time = new Date().toLocaleString();
      const payment = {
        price,
        time,
        transactionId: paymentIntent.id,
        user_email,
        bookingId: _id,
      };
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("yourMoto-Token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed");
            toast.success("Congrats! your payment completed");
            navigate("/dashboard/orders")
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>





<div className="flex flex-col justify-center mt-6">
        <div className="w-full max-w-lg p-8 space-y-3 text-gray-800 rounded-xl bg-gray-100 dark:bg-gray-900">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-first-name"
                >
                  Your Name
                </label>
                <input
                  disabled
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder={user_name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-last-name"
                >
                  Payment Time
                </label>
                <input
                 disabled
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder={new Date()}
                />
                
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                   htmlFor="grid-password"
                >
                  Your Email
                </label>
                <input
                 disabled
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  placeholder={user_email}
                />
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
                <CardElement
                 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div>
              <PrimaryButton className="w-11"
              disabled={!stripe || !clientSecret || processing}>
                <span className="text-base font-semibold text-white dark:text-gray-900">
                  Submit
                </span>
              </PrimaryButton>
            </div>
          </form>
          <div className="">
        <p className="text-red-500">{cardError}</p>
        {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p className="text-gray-800 md:ml-2 dark:text-gray-400">
            Your transactionId:{" "}
            <span className="text-gray-500 md:ml-2 font-bold dark:text-gray-400">{transactionId}</span>
          </p>
        </div>
      )} 
        </div>
        </div>
        
      </div>



























      {/* <form onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )} */}
    </>
  );
};

export default CheckoutForm;
