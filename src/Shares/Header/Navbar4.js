import React from 'react';
import { Link } from 'react-router-dom';

const Navbar4 = () => {
    return (
        <div className='bg-white shadow-lg'>
            <div className="navbar max-w-[1240px] mx-auto max-h-[4rem] min-h-[1rem]">
                <ul className=' flex-wrap'>
                    <li>
                        <Link to='/' className='text-[#656565] text-[12px] lg:text-[14px] ml-[7px] mr-[1em]'>Report</Link>
                    </li>

                    <li>
                        <Link to='/' className='text-[#656565] text-[12px] lg:text-[14px] mx-[1em] '>Policy</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-[#656565] text-[11px] lg:text-[14px] mx-[1em] '>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-[#656565] text-[11px] lg:text-[14px] mx-[1em] '>About Us</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-[#656565] text-[12px] lg:text-[14px] mx-[1em] '>Support</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-[#656565] text-[12px] lg:text-[14px] mx-[1em] '>Offer Zone</Link>
                    </li>
                    <li>
                        <Link to='/' className='text-[#656565] text-[11px] lg:text-[14px] mx-[1em] '>Today's Deals</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar4;