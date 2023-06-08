import React from 'react';
import { GiShoppingCart, IconName } from "react-icons/gi";

const Navbar1 = () => {
    return (
        <div className='lg:hidden'>
            <div className="navbar bg-[#2874f0]">
                <a href='/' className=" mx-auto normal-case text-4xl text-white font-mono ">SORASHOP <GiShoppingCart></GiShoppingCart></a>
            </div>
        </div>
    );
};

export default Navbar1;