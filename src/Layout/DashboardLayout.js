import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import NavBar from '../Pages/Shared/Header/NavBar';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen'>
            <NavBar/>
            <DashboardHome></DashboardHome>
        </div>
    );
};

export default DashboardLayout;