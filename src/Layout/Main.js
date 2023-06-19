import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../Shares/Header/Navbars';
import Footer from '../Shares/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbars />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;