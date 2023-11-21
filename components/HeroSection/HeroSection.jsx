import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CountUp from 'react-countup';
import { useFirebase } from '../../context/UserContext';
import BodyTamplate from '../Shared/BodyTamplate';
import ButtonArrow from '../Shared/Buttons/PrimaryButton';

const HeroSection = () => {
  const { user } = useFirebase();
  return (
    <div>
      <Head>
        <title>Home - Ecomservice</title>
      </Head>
      <BodyTamplate>
        <div className="hero h-screen text-white ">
          <div className="md:px-0 flex-col  md:grid md:grid-cols-2 md:w-full  h-full flex  items-center justify-between ">
            <div className="col-span-1 md:mt-0 mt-14">
              <div className="mb-7">
                <span
                  className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800
                            p-2 md:text-sm rounded-3xl text-white  h-10 uppercase"
                >
                 it solutions for ecommerce
                </span>
              </div>
              <h1 className="text-7xl font-bold mt-5">
                {' '}
                <span className="stroke-text md:text-4xl lg:text-7xl">
                  Get Your Ecommerce
                </span>{' '}
                <span className="">Easy Way</span>
              </h1>
              <p className="py-6">
              Our API provides seamless and efficient data serve capabilities, empowering businesses to harness real-time product information, pricing trends, and market insights. 
              </p>
              <div className="flex justify-between mt-5  w-96">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="md:text-4xl text-2xl">
                    + <CountUp start={0} end={50} delay={0} duration={2} />
                  </h1>
                  <p>Services </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="md:text-4xl text-2xl">
                    +<CountUp start={0} end={200} delay={0} duration={2} />
                  </h1>
                  <p>Client </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="md:text-4xl text-2xl">
                    + <CountUp start={0} end={90} delay={0} duration={2} />
                  </h1>
                  <p>Business </p>
                </div>
              </div>
              <div className="mt-12">
                {user?.uid ? (
                  <div className="z-50">
                    <Link href="/dashboard/profile">
                      <ButtonArrow h={'10'}>Go to Your Dashboard</ButtonArrow>{' '}
                    </Link>
                  </div>
                ) : (
                  <div className="z-50">
                    <Link href="/user/login">
                      <ButtonArrow h={'10'}>Go to Login</ButtonArrow>{' '}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className=" hidden md:flex justify-end  lg:w-5/6  ">
              <img
                src="/heroImage.svg"
                alt="hero iamge "
                className="h-96 w-96 md:h-[520px] md:w-auto"
              />
            </div>
          </div>
        </div>
      </BodyTamplate>
    </div>
  );
};

export default HeroSection;
