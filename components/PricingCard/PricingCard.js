// components/PricingCard.js

import Link from 'next/link';
import React from 'react';

const PricingCard = ({ title, price, features }) => {
    return (
        <div className="grid grid-cols-1 justify-items-center w-3/4 bg-purple-50 p-12 my-2 border border-neutral-400 rounded-xl ">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-base"><span className='text-4xl'>${price}</span> per month</p>
            </div>
            <div>
                <p className='text-xl px-2 p-2 rounded-md border border-cyan-50 bg-blue-500 hover:bg-blue-700 w-full text-white'>Services Included:</p>
            </div>
            <div className="px-6 py-4 self-start">
                <ul className="list-disc">
                    {features?.map((feature, index) => (
                        <li key={index} className="text-gray-700 text-base">{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2 ">
                <Link href='/checkout'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PricingCard;
