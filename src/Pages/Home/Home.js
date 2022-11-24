import React from "react";
import useTitle from "../../hook/useTitle";
import Categories from "./Categories/Categories";
import BuyMotorcycle from "./BuyMotorcycle/BuyMotorcycle";
import Banner from "./Banner/Banner";
import AdvertisedItems from "./AdvertisedItems/AdvertisedItems";

const Home = () => {
  useTitle("Home");

  return (
    <div className="">
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <Categories></Categories>
      <BuyMotorcycle></BuyMotorcycle>
    </div>
  );
};

export default Home;
