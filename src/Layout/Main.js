import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Header/NavBar";

const Main = () => {
  return (
    <div className="">
      <NavBar/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
