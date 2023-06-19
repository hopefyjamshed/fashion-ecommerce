import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../Shares/Header/AdminNavbar';

const Admin = () => {
    return (
        <div className=''>
            <AdminNavbar />
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;