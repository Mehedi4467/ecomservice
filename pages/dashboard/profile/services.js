import Head from "next/head";
import React from "react";
import Layout from "../../../Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import MidSpinner from "../../../components/Spiner/MidSpinner";

const Services = () => {
  const [services, setServices] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`/api/package/get-package`);

      if (data?.status) {
        setServices(data?.data?.services);
        setLoading(false);
      } else {
        setServices("");
        setLoading(false);
      }
    } catch (err) {
      console.log("get user ");
      setLoading(false);
    }
  };


  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <MidSpinner />;

  return (
    <Layout>
      <div>
        <Head>
          <title>Services - Ecomservice</title>
        </Head>

        <div className="mt-20">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="tracking-wide">Services</span>
            </div>
            <div className="text-gray-700">
              <table className="w-full text-center border border-collapse">
                <thead>
                  <tr>
                    <th className="border">Service Name</th>
                    <th className="border">Package Name</th>
                    <th className="border">API Key</th>
                    <th className="border">Date</th>
                    <th className="border">Price</th>
                    <th className="border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {services &&
                    services?.map((item, index) => (
                      <tr key={index}>
                        <td className="border">{item?.service}</td>
                        <td className="border">{item?.package}</td>
                        <td className="border py-3">{item?.apiKey}</td>
                        <td className="border">{new Date(item?.buyAt).toLocaleString()}</td>
                        <td className="border">{item?.price} &#2547;</td>
                        <td className="border capitalize">{item?.status}</td>
                        
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
