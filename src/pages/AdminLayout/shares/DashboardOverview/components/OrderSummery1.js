import React from 'react';
import { FiLayers, FiShoppingCart, IconName } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";

const OrderSummery1 = () => {
    // const cardData=[
    //     {
    //         logo: FiLayers,
    //         header: "Todays Orders",
    //         amount: 0.00
    //     }
    // ]
    return (
        <div className='flex gap-4'>

            {/* box 1 */}
            <div className='bg-[rgb(33,150,134)] p-6 w-[270px] h-[200px] mx-auto text-center rounded-lg'>
                <FiLayers className='text-white mx-auto text-3xl'></FiLayers>
                <h3 className='text-white text-[21px] mt-1'>Today Orders</h3>
                <h1 className='text-white text-[25px] font-semibold mb-2 mt-2'>$0.00</h1>

                <div className='flex mx-7 mb-6 text-white gap-9'>
                    <div className=''>
                        <p className='text-[12px]'>Cash:</p>
                        <h1 className='text-[12px]'>$0:00</h1>
                    </div>
                    <div>
                        <p className='text-[12px]'>Card:</p>
                        <h1 className='text-[12px]'>$0:00</h1>
                    </div>
                    <div>
                        <p className='text-[12px]'> Credit:</p>
                        <h1 className='text-[12px]'>$0:00</h1>
                    </div>
                </div>
            </div>

            {/* box 2 */}
            <div className=' bg-orange-400 p-6 w-[270px] h-[200px] mx-auto text-center rounded-lg'>
                <FiLayers className='text-white mx-auto text-3xl'></FiLayers>
                <h3 className='text-white text-[21px] mt-1'>Today Orders</h3>
                <h1 className='text-white text-[25px] font-semibold mb-2 mt-2'>$0.00</h1>

                <div className='flex mx-7 mb-6 text-white gap-9'>
                    <div className=''>
                        <p className='text-[12px]'>Cash:</p>
                        <h1 className='text-[12px]'>$0:00</h1>
                    </div>
                    <div>
                        <p className='text-[12px]'>Card:</p>
                        <h1 className='text-[12px]'>$0:00</h1>
                    </div>
                    <div>
                        <p className='text-[12px]'> Credit:</p>
                        <h1 className='text-[12px]'>$0:00</h1>
                    </div>
                </div>
            </div>

            {/* box 3 */}
            <div className='bg-[#3498db] p-6 w-[270px] h-[200px] mx-auto text-center rounded-lg'>
                <FiShoppingCart className='text-white mx-auto text-3xl'></FiShoppingCart>
                <h3 className='text-white text-[21px] mt-1'>This Month</h3>
                <h1 className='text-white text-[25px] font-semibold mb-2 mt-2'>$0.00</h1>
            </div>

            {/* box 4 */}
            <div className='bg-[#619b6bde] p-6 w-[270px] h-[200px] mx-auto text-center rounded-lg'>
                <BiNotepad className='text-white mx-auto text-3xl'></BiNotepad>
                <h3 className='text-white text-[21px] mt-1'>All Time Sales</h3>
                <h1 className='text-white text-[25px] font-semibold mb-2 mt-2'>$0.00</h1>
            </div>
        </div>
        // <div>

        // </div>
    );
};

export default OrderSummery1;