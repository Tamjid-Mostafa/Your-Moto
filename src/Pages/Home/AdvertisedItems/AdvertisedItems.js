import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import CategoryCard from "../../../Component/Card/CategoryCard";
import ProductCard from "../../../Component/Card/ProductCard";
import Loader from "../../../Component/Loader/Loader";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AdvertisedItems = () => {
  const url = `https://yourmoto-server-tamjid-mostafa.vercel.app/advertise`;

  /* Load Advertise Item  */
  const { data: advertiseItems = [], isLoading } = useQuery({
    queryKey: ["advertiseItems"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      {advertiseItems?.length !== 0 && (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12">
              <div>
                <h2 className="my-8 text-center text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
                  Advertised Hot
                  <br className="lg:block" hidden />
                  Machine
                  <br className="lg:block" hidden />
                  is Live Now !!!
                </h2>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className={`mySwiper grid gap-3 w-full"
              `}
              >
                {advertiseItems.map((product) => (
                  <SwiperSlide>
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;
