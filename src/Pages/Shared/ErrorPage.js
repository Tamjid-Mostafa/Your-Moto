import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Component/Button/PrimaryButton';
import { AuthContext } from '../../contexts/AuthProvider';

const ErrorPage = () => {
 
    return (
        <div>
            <section className="dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col items-center">
          <img className="max-w-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="" />
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-rose-500 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold text-gray-400 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <PrimaryButton
          >
                <Link to="/">Go Back to Home</Link>
          </PrimaryButton>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;