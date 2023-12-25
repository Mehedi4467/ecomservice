import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const index = () => {
    const router = useRouter()
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

    const submitPackage = async (e) => {

        console.log(e)
    }
    return (
        <div className='lg:h-screen'>
            <div className="shadow-xl p-6 rounded-md w-[50%] mx-auto mt-10 ">
                <form onSubmit={submitPackage}>
                    <div className="mb-3">
                        <label className="font-bold">Selecte your package</label>
                        <select
                            name="package"
                            className="w-full mt-2 cursor-pointer p-2 rounded-md outline-none border"
                            required
                        >
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
                        <h2 className="font-bold">Send Amount</h2>
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
                            Bkash send money to this{" "}
                            <span className="text-orange-500 text-xl">01331579703</span>{" "}
                            number and enter the transaction id here
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
                        <button className=" bg-blue-500 px-4 text-white py-2 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;