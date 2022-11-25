import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/Dashboard/Sidebar";

const DashboardHome = () => {
  const [isActive, setActive] = useState("false");
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Sidebar></Sidebar>
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardHome;
