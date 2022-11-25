import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Component/Card/ProductCard';

const ProductListing = () => {
    const {_id, categoryName,details} = useLoaderData();
    return (
        <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
            <h2 className='text-white  text-4xl text-center first-letter:text-6xl first-letter:text-primary'>{categoryName}</h2>
            <div className='container my-5 grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-4'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default ProductListing;