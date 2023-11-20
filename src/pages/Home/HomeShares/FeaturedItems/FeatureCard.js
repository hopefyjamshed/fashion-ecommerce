import React from 'react';
import './FeatureCard.css'

const FeatureCard = ({item,refetch}) => {
    const {Name, Image, Price, Discount}=item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:shadow-none group">
  <figure className="">
    {/* card image  */}
    <img src={Image} alt="Product_image" className="rounded-md md:rounded-none h-[400px] w-full md:w-[300px] hover:scale-125 transition duration-500 duration-500"
    />

  </figure>
  <div className="card-body items-center text-center group-hover:shadow-2xl duration-500">
    <h2 className="card-title">{Name}</h2>
    <p>{Price}টাকা</p>
    <div className="point">
      <button className=" fb">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default FeatureCard;
