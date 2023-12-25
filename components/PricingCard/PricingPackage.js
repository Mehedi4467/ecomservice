import React from 'react';
import PricingCard from './PricingCard';

const PricingPackage = ({ data }) => {

    return (
        <div>
            <p className="font-sans font-extrabold text-3xl mt-8 text-center">Select Your Package</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 justify-items-center my-12">
                {data?.map((pricing, index) => (
                    <PricingCard key={index} {...pricing} />
                ))}
            </div>
        </div>
    );
};

export default PricingPackage;