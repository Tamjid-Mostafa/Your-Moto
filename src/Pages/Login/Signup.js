import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsGoogle } from "react-icons/bs";
import PrimaryButton from "../../Component/Button/PrimaryButton";
import axios from "axios";
import useToken from "../../hook/useToken";

const Signup = () => {
  const { providerGoogleSignIn, providerCreateUser, updateUserProfile } =
    useContext(AuthContext);

  const [signupError, setSignupError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [createdUserEmail, setCreatedUserEmail] = useState("");
    const [token] = useToken(createdUserEmail);

    if (token) {
      navigate("/");
    }

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
        toast.success("Log In Successfully.");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSignUp = (data) => {
    setSignupError("");

    /* ----Upload Image---- */
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=527cb8c6aafc33970b1b5fa05f4bc3ac`
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imageData => {

      /* ----Create USer--- */
      providerCreateUser(data.email, data.password)
      .then((result) => {
        setCreatedUserEmail(data.email)
        const userInfo = {
          displayName: data.name,
          photoURL: imageData.data.display_url
        };
        updateUserProfile(userInfo)
          .then(() => {
            
          })
          .catch((err) => {
            console.error(err);
            setSignupError(err.message);
          });
      

      if(imageData.success){
        const userInfo = {
          name: data.name,
          email: data.email,
          role: data.buyer_or_seller,
          image: imageData.data.url
        }
        // save user information to the database
        axios.post('http://localhost:5000/users', 
          
          userInfo
        )
        .then(res => {
          
          toast.success(`${userInfo.name} is added successfully`);
          
          navigate(from, { replace: true });

        })
        .catch(err => {
          console.error(err);
        })
      }
    })
    .catch((error) => console.error(error));
    })
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
                  <div className="w-max mx-auto flex items-center justify-center space-x-1">
                    <BsGoogle className="text-white" />
                    <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                      oogle
                    </span>
                  </div>
                </button>
              </div>

              <form
                onSubmit={handleSubmit(handleSignUp)}
                action=""
                className="mt-10 space-y-8 dark:text-white"
              >
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
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
                  <div>
                    {signupError && (
                      <p className="text-red-600">
                        {signupError.slice(22, -2)}
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

                <div>
                  <PrimaryButton className="w-11">
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Sign Up
                    </span>
                  </PrimaryButton>
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

export default Signup;
