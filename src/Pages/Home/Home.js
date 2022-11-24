import React from "react";
import useTitle from "../../hook/useTitle";
import image from "../../assets/images/men&motorcycle.jpg";

const Home = () => {
  useTitle("Home");

  const myStyle = {
    minHeight: "400px",
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="">
      {/* <div className="relative min-h-screen">
        <img
          className="absolute inset-0 w-screen  min-h-screen"
          src={image}
          alt="hero background"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full min-h-screen bg-accent bg-opacity-30 backdrop-blur-sm"
        ></div> */}
      <div
        className="relative bg-cover bg-no-repeat bg-center h-screen"
        style={myStyle}
      >
        <div className="flex flex-col justify-center items-center absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-center text-white p-10"></div>
        <div className="relative container m-auto px-6 md:px-12 lg:px-6">
          <div className="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
            <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
              Don't look again for your next motorbike, you got them.
            </h1>

            <form action="" className="w-full">
              <div className="flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                <input
                  placeholder="Your favorite Motorcycle"
                  className="w-full p-4 border-none  text-gray-600"
                  type="text"
                />
                <button
                  type="button"
                  title="Start buying"
                  className="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-yellow-500 to-orange-400 hover:to-yellow-600 md:px-12"
                >
                  <span className="hidden text-white font-semibold md:block">
                    Search
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 mx-auto text-white md:hidden bi bi-search"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
