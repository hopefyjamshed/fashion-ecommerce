import React from 'react';
import { Link } from 'react-router-dom';

const SubNavbar = () => {
    return (
        <div className=' px-4'>
            <div className="navbar bg-black h-[5px] min-h-[2rem] max-w-[1200px] ">
                <div className="navbar-start">

                </div>
                <div className="navbar-center lg:flex">
                    <ul className="flex gap-12">
                        <li className=' font-extrabold text-[20px] hover:text-[#2874f0]'><Link to=''>Gents</Link></li>
                        <li className=' font-extrabold text-[20px] hover:text-[#2874f0]'><Link to=''>Ladies</Link></li>
                        <li className=' font-extrabold text-[20px] hover:text-[#2874f0]'><Link to=''>Kids</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default SubNavbar;