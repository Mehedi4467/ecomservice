import { useEffect, useState } from "react";
import MidSpinner from "../../../components/Spiner/MidSpinner";
import Layout from "../../../Layout/Layout";
import axios from "axios";
import Head from "next/head";
const profile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  const getUser = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`/api/package/get-package`);

      if (data?.status) {
        setUser(data?.data);
        setLoading(false);
      } else {
        setUser("");
        setLoading(false);
      }
    } catch (err) {
      console.log("get user ");
      setUser("");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <MidSpinner />;
  return (
    <Layout>
      <Head>
        <title>Ecomservice - Dashboard</title>
      </Head>
      <div className="">
        <div className="container mx-auto my-5 p-5">
          <div className="w-full mx-2 h-64">
            <div className="flex justify-between">
              <div className="bg-white p-3 text-center lg:flex justify-items-center">
                <div className="image overflow-hidden p-3 lg:border-l-4 text-center border-green-400">
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {user?.businessName || "shopinshop"}
                  </h1>
                </div>
                <div className="ml-lg-5">
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Status:</span>
                      <span className="ml-auto">
                        {user?.verification ? (
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        ) : (
                          <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                            Inactive
                          </span>
                        )}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end img-section */}
            {/* <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="tracking-wide">Billing</span>
              </div>
              <div className="text-gray-700">
                <table className="w-full text-center border border-collapse">
                  <thead>
                    <tr>
                      <th className="border">Service Name</th>
                      <th className="border">Billing ID</th>
                      <th className="border"> Billing Date</th>
                      <th className="border">Total Bill</th>
                      <th className="border">Payment last Date</th>
                      <th className="border">Status</th>
                      <th className="border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">Amazon API</td>
                      <td className="border">125412</td>
                      <td className="border">12-10-2023</td>
                      <td className="border">5000</td>
                      <td className="border">12-15-2023</td>
                      <td className="border">Due</td>
                      <td className="border p-2">
                        <button className="px-4 py-2 bg-orange-400 text-white rounded-md ">Pay Now</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
