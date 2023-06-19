import React from 'react';
import { BsBellFill } from "react-icons/bs";
import AdminDrawer from '../../pages/AdminLayout/shares/AdminDrawer';

const AdminNavbar = () => {
    return (

        <div className=' bg-[#1c1d22]'>

            <div className="navbar bg-[#1c1d22] max-w-[1240px] mx-auto">
                <div className="flex-1">
                    <a href='/' className=" hidden lg:inline uppercase text-xl text-[#0e9f6e]">Sorashop</a>
                    <label htmlFor="my-drawer-2" className="uppercase text-xl text-[#0e9f6e] drawer-button lg:hidden">Open Menu</label>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <BsBellFill className='text-2xl text-[#0e9f6e]'></BsBellFill>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">you have notifications</span>
                                <span className="text-info">inbox</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View Notification</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AdminNavbar;