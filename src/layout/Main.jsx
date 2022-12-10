import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header';


const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;