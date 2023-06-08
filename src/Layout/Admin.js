import React from 'react';
import Navbars from '../Shares/Header/Navbars';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className=''>
            <Navbars></Navbars>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;