import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Services = () => {
  const services = {
    amazon: [
      {
        name: "K1",
        price: 5000,
        time: "Month",
      },
      {
        name: "K2",
        price: 55000,
        time: "Year",
      },
    ],
    one_six: [
      {
        name: "K1",
        price: 10000,
        time: "Month",
      },
      {
        name: "K2",
        price: 110000,
        time: "Year",
      },
    ],
  };

  const [service, setService] = useState("amazon");
  const [selectService, setSelectService] = useState([]);

  useEffect(() => {
    if (service === "amazon") {
      setSelectService(services?.amazon);
    } else {
      setSelectService(services?.one_six);
    }
  }, [service]);

  const submitPackage = (e)=>{
    e.preventDefault();
    const tostId = toast.loading('Please Wait...', {
        style: { backgroundColor: '#e77436', color: '#fff' },
      });
    const packages = e.target.package.value;
    const price = e.target.price.value;
    const tnx = e.target.tnx.value;

    const submitBody = {
        service:service,
        package:packages,
        price:price,
        trnx:tnx
    }

    console.log(submitBody)
  }



  return (
    <>
      <Head>
        <title>Services - Ecomservice</title>
      </Head>

      <div className="py-20 grid   mt-10 w-[70%] mx-auto">
        <div className="flex gap-4 justify-center ">
          <div className="flex shadow-lg p-4 ring rounded-md items-center gap-3">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                checked={service === "amazon"}
                onChange={() => setService("amazon")}
                name="flexRadioDefault"
                id="radioDefault01"
              />
            </div>
            <Image
              src="/service/amazon.png"
              width={100}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="flex shadow-lg p-4 ring rounded-md items-center gap-3">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                checked={service === "1688"}
                onChange={() => setService("1688")}
                name="flexRadioDefault"
                id="radioDefault01"
              />
            </div>
            <Image
              src="/service/1688.png"
              width={100}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className=" shadow-xl p-6 rounded-md w-[50%] mx-auto mt-10">
          <form onSubmit={submitPackage}>
            <div className="mb-3">
              <label className="font-bold">Selecte your package</label>
              <select name="package" className="w-full mt-2 cursor-pointer p-2 rounded-md outline-none border" required>
                {selectService?.map((item, index) => (
                  <option key={index}>
                    <div className="flex justify-between w-full">
                      <p>{`${item?.name} ${item?.price}/${item?.time}`}</p>
                    </div>
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <h2 className="font-bold">
               Send Amount
              </h2>
              <input
                type="text"
                name="price"
                placeholder="  Send Amount"
                className="w-full mt-2 cursor-pointer p-2 rounded-md outline-none border"
                required
              ></input>
            </div>

            <div>
              <h2 className="font-bold">
                Bkash send money to this <span className="text-orange-500 text-xl">01331579703</span> number and enter the
                transaction id here
              </h2>
              <input
                type="text"
                name="tnx"
                placeholder="Transaction ID"
                className="w-full mt-2 cursor-pointer p-2 rounded-md outline-none border"
                required
              ></input>
            </div>

            <div className="mt-3 flex justify-center">
              <button className=" bg-blue-500 px-4 text-white py-2 rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;
