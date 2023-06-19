import React from 'react';
import { Link } from 'react-router-dom';

const AdminDrawer = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[256px] h-full bg-[#1c1d22] text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/other/upload'><button className=' uppercase font-bold'>Upload a product</button></Link></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminDrawer;