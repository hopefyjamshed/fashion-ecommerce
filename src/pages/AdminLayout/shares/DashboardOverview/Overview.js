import React from 'react';
import OrderSummery1 from './components/OrderSummery1';

const Overview = () => {
    return (
        <div className=' p-5'>
            <h1 className=' font-bold mb-5 text-white'>Dashboard Overview</h1>
            <OrderSummery1 />
        </div>
    );
};

export default Overview;