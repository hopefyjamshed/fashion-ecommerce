import React from 'react';
import { Link } from 'react-router-dom';

const Navbar3 = () => {
    return (
        <div className=' bg-black'>
            <div className="navbar h-[10px] min-h-[2rem] max-w-[1240px] mx-auto">
                <div className="navbar-start lg:hidden inline">
                    {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div> */}
                    <details className="dropdown duration-100">
                        <summary className="m-1 text-white">


                            {/* <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg> */}


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