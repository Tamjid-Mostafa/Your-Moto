import { Sidebar } from 'flowbite-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHome from '../Pages/Dashboard/DashboardHome';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen'>
            <Header></Header>
            <DashboardHome></DashboardHome>
        </div>
    );
};

export default DashboardLayout;