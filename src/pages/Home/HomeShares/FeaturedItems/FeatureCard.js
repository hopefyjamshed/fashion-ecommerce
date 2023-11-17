import React from 'react';

const FeatureCard = ({item,refetch}) => {
    const {Name, Image, Price}=item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl lg:shadow-none group">
  <figure className="">
    {/* card image  */}
    <img src={Image} alt="Product_image" className="rounded-md h-[400px] w-full lg:w-[300px] hover:scale-125 transition duration-500 duration-500"
    />

  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{Name}</h2>
    <p>{Price}টাকা</p>
    <div className="card-actions">
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default FeatureCard;
