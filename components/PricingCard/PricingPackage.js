import React from 'react';
import PricingCard from './PricingCard';

const PricingPackage = ({ data }) => {

    return (
        <div>
            <p className="font-sans font-extrabold lg:text-3xl text-xl my-8 text-center">Select Your Package</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 justify-items-center">
                {data?.map((pricing, index) => (
                    <PricingCard key={index} {...pricing} />
                ))}
            </div>
        </div>
    );
};

export default PricingPackage;