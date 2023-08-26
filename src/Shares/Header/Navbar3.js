import React from 'react';
import { Link } from 'react-router-dom';

const Navbar3 = () => {
    return (
        <div className=' bg-black'>
            <div className="navbar h-[20px] min-h-[2rem] max-w-[1240px] mx-auto">
                <div className="navbar-start lg:hidden inline">

                    <details className="dropdown duration-100">
                        <summary className="m-1 text-white">

                        </summary>
                        <ul className="p-2 shadow menu dropdown-content -ml-2 bg-black ease-in duration-100 w-screen">
                            <li><Link to='/' className='text-white text-[14px] font-bold' >home</Link></li> <hr />

                            <li><Link to='/' className='text-white text-[14px] font-bold' >features</Link></li> <hr />

                            <li><Link to='/' className='text-white text-[14px] font-bold' >menu</Link></li><hr />

                            <li><Link to='/' className='text-white text-[14px] font-bold' >documentation</Link></li>
                        </ul>
                    </details>

                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        <li><Link to='/' className='text-white text-[16px] font-semibold -ml-3' >home</Link></li>

                        <li><Link to='/' className='text-white text-[16px] font-semibold' >features</Link></li>

                        <li><Link to='/' className='text-white text-[16px] font-semibold' >menu</Link></li>

                        <li><Link to='/' className='text-white text-[16px] font-semibold' >documentation</Link></li>


                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Navbar3;