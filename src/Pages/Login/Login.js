import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsGoogle } from "react-icons/bs";
import PrimaryButton from "../../Component/Button/PrimaryButton";
import { setAuthToken } from "../../api/auth";
import axios from "axios";
const Login = () => {
  const {
    signIn,
    user,
    loading,
    setLoading,
    providerGoogleSignIn,
    providerForgotPassword,
  } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  /* -----------------Google Signin------------------ */
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerGoogleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            role: "buyer",
          };
          /* ================ User Info Save To DataBase =========== */
          axios
            .post(
              "https://yourmoto-server-tamjid-mostafa.vercel.app/users",

              userInfo
            )
            .then((res) => {
              const firstname = userInfo.name.split(" ")[0];
              toast.success(`Hello! ${firstname}
              Thank you for interest in Your Moto. `);
              setAuthToken(userInfo);
              navigate(from, { replace: true });
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((error) => console.error(error));
  };

  /* -----------------Login Handle------------------ */
  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        setAuthToken(result.user);
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <>
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                Login to your account
              </h3>
              <div className="mt-12">
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
                >
                  <div className="w-max mx-auto flex items-center justify-center space-x-4">
                    <BsGoogle />
                    <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      With Google
                    </span>
                  </div>
                </button>
              </div>

              <form
                onSubmit={handleSubmit(handleLogin)}
                action=""
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
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
                  <div>
                    {loginError && <p className="text-red-600">{loginError}</p>}
                  </div>
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button>
                </div>

                <div>
                  <div>
                    <PrimaryButton className="w-11">
                      <span className="text-base font-semibold text-white dark:text-gray-900">
                        Log In
                      </span>
                    </PrimaryButton>
                  </div>
                  <button href="#" type="reset" className="-ml-3 w-max p-3">
                    <Link
                      to="/signup"
                      className="text-sm tracking-wide text-sky-600 dark:text-sky-400"
                    >
                      Create new account
                    </Link>
                  </button>
                </div>
              </form>
            </div>
            <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
              <div className="space-x-4 text-center">
                <span>Your Moto</span>
                <Link
                  href="#"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Privacy & Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
