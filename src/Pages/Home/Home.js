import React from "react";
import useTitle from "../../hook/useTitle";
import Banner from "../../Component/Banner/Banner";
import Categories from "./Categories/Categories";

const Home = () => {
  useTitle("Home");


  return (
    <div className="">
     <Banner></Banner>
      <Categories></Categories>
      
    </div>
  );
};

export default Home;
