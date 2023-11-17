import React from 'react';
import Headersec from './Headersec';
import SubNavbar from './HomeShares/SubNavbar/SubNavbar';
import FeaturedItems from './HomeShares/FeaturedItems/FeaturedItems';

const Home = () => {
    return (
        <div className=' min-h-screen'>
           <div className=' max-w-[1240px] mx-auto'>
           <div className=''>
                <div className=''>
                    <Headersec></Headersec>
                </div>
            </div>
            <div className="divider my-[100px]"><span className='mx-[12px] text-2xl text-thin text-gray-600'>FEATURED ITEMS</span></div>
           <FeaturedItems/>
            {/* <div className='py-[15px] mx-auto max-w-[1240px]'>
                <SubNavbar></SubNavbar>
            </div> */}
           </div>
        </div>
    );
};

export default Home;