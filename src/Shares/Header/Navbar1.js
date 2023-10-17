import React from 'react';
import { GiShoppingCart, IconName } from "react-icons/gi";

const Navbar1 = () => {
    return (
        <div className='lg:hidden'>
            <div className="navbar bg-[]" style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 7%, rgba(0,212,255,1) 100%)"}}>
                <a href='/' className=" mx-auto normal-case text-4xl text-white font-mono ">SORASHOP <GiShoppingCart></GiShoppingCart></a>
            </div>
        </div>
    );
};

export default Navbar1;