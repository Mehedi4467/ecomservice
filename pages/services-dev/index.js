import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PricingPackage from "../../components/PricingCard/PricingPackage";

const Services = () => {
    const router = useRouter()

    const services = {

        dev: [
            {
                name: "Basic",
                price: 20000,
                time: "Month",
                features: ['Amazon or 1688.com API with full client simple Dashboard',]
            },
            {
                name: "Standard",
                price: 30000,
                time: "month",
                features: ['Amazon or 1688.com API with full client and complete Dashboard']
            },
            {
                name: "Premium",
                price: 50000,
                time: "month",
                features: ['Amazon or 1688.com API with full client and complete Dashboard', 'Server Maintainance', 'Hosting ']
            },
        ],
    };

    const [service, setService] = useState("dev");
    console.log('65', service)
    const [selectService, setSelectService] = useState([]);

    useEffect(() => {
        if (service === "amazon") {
            setSelectService(services.amazon);
        }
        else if (service === "1688") {
            setSelectService(services.one_six);
        }
        else {
            setSelectService(services.dev);
        }
    }, [service]);

    const submitPackage = async (e) => {
        e.preventDefault();
        const tostId = toast.loading("Please Wait...", {
            style: { backgroundColor: "#e77436", color: "#fff" },
        });
        const packages = e.target.package.value;
        const price = e.target.price.value;
        const tnx = e.target.tnx.value;

        const submitBody = {
            service: service,
            package: packages,
            price: price,
            trnx: tnx,
        };

        try {
            const { data } = await axios.post(`/api/package/buy-package`, submitBody);
            if (data?.status) {
                router.push(`/dashboard/profile/services`);
                toast.dismiss()
            } else {
                toast.error("Something went wrong!!", {
                    style: { backgroundColor: '#002c36', color: '#fff' },
                    id: tostId,
                });
            }
        } catch (err) {
            console.log("buy package error");
            toast.error("Something went wrong!!", {
                style: { backgroundColor: '#002c36', color: '#fff' },
                id: tostId,
            });
        }


    };

    return (
        <>
            <Head>
                <title>Services - Ecomservice</title>
            </Head>

            <div className="py-20 grid   mt-10 w-[70%] mx-auto">

                {
                    selectService ? (
                        <PricingPackage data={selectService} />
                    ) : (
                        null
                    )
                }
            </div>
        </>
    );
};

export default Services;
