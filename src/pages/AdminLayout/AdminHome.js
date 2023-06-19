import React from 'react';
import { Link } from 'react-router-dom';
import AdminDrawer from './shares/AdminDrawer';
import Overview from './shares/DashboardOverview/Overview';

const AdminHome = () => {
    return (
        <div>

            <div className=' bg-black '>


                <div className='flex'>
                    <div className=' min-w-screen'>
                        <AdminDrawer></AdminDrawer>
                    </div>
                    <div className='max-w-[1040px] mx-auto'>
                        <Overview></Overview>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;