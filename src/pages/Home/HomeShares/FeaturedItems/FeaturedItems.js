import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FeatureCard from './FeatureCard';


const FeaturedItems = () => {
    
    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/upload`)
            const data = await res.json()
            return data
        }
    })
    console.log(items)
    return (
        <div className='mx-auto px-4'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           {
                items?.map(item=><FeatureCard
                key={item._id}
                item={item}
                refetch={refetch}
                ></FeatureCard>)

            }
           </div>
        </div>
    );
}

export default FeaturedItems;
