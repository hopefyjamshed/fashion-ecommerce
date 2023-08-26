import React from 'react';
import Headersec from './Headersec';
import SubNavbar from './HomeShares/SubNavbar/SubNavbar';

const Home = () => {
    return (
        <div className=' min-h-screen'>
            <div className=' bg-slate-200 '>
                <div className='max-w-[1240px] mx-auto'>
                    <Headersec></Headersec>
                </div>
            </div>
            <div className='py-[15px] mx-auto max-w-[1240px]'>
                <SubNavbar></SubNavbar>
            </div>
        </div>
    );
};

export default Home;