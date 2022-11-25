import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductListing = () => {
    const product = useLoaderData();
    console.log(product)
    
    return (
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
            <h2 className='text-white  text-4xl text-center first-letter:text-6xl first-letter:text-primary'>{product?.bike_type}</h2>
            <div className='container my-5 grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4'>
            </div>
        </div>
    );
};

export default ProductListing;