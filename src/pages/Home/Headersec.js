import React from 'react';
import Hero from './HomeShares/Hero';
import Brands from './HomeShares/start-Box/Brands';
import Category from './HomeShares/endBox/Category';

const Headersec = () => {
    return (
        <div className='lg:flex flex-wrap lg:gap-5 mx-auto p-5'>
            <div className='lg:w-[24%] shadow-gray-400 shadow-md'>
                <Brands></Brands>
            </div>
            <div className=' lg:w-[47%] bg-black'>
                <Hero></Hero>
            </div>
            <div className=' lg:w-[24%] shadow-md shadow-gray-400'>
                <Category></Category>
            </div>

        </div>
    );
};

export default Headersec;

