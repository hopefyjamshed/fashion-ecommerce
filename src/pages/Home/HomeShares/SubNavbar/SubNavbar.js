import React from 'react';
import { Link } from 'react-router-dom';
import './SubNavbar.css'

const SubNavbar = () => {
    return (
        <div className=' px-4'>
            <div className="navbar bg-black h-[5px] min-h-[2rem] max-w-[1200px] ">
                <div className="navbar-start">

                </div>
                <div className="navbar-center nav lg:flex">
                    <ul id='navbar' className="flex gap-12">
                        <li className='list font-extrabold active text-[20px]'><Link to='' className='target' >All</Link></li>
                        <li className='list font-extrabold active text-[20px]'><Link to='' className='target' >Gents</Link></li>
                        <li className='list font-extrabold text-[20px] hover:text-[#2874f0]'><Link to='' className='target' >Ladies</Link></li>
                        <li className='list font-extrabold text-[20px] hover:text-[#2874f0]'><Link to='' className='target' >Kids</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default SubNavbar;