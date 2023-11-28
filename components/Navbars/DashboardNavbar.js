
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DashboardNavbar = () => {
  const route = useRouter();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const { data } = await axios.get(`/api/user/get-user`);
    setUser(data?.data);
  };

  useEffect(()=>{
    getUser()
  },[])
  return (
    <div>
      <div className="navbar container mx-auto bg-base-100 ">
        <div className="flex-1">
          <a className="lg:ml-28 w-full text-center normal-case text-xl font-semibold">
            Hello , {user?.name}
          </a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div> */}
          {/* <div className="flex-none">
            <div className="dropdown dropdown-end flex">
              {
                route.pathname === "/dashboard/notification/shownotification"
                  ? undefined :
                  <label htmlFor="notification" className="drawer-button btn btn-primary">  <GrNotification size="20px" /></label>
              }
              <div className="flex justify-center items-center px-4">
                <Link href='/dashboard/message'> <BiMessageAltDetail size='30px' /></Link>
              </div>
              <div
                tabIndex={0}
                className="mt-8 card card-compact border w-96  dropdown-content bg-base-100 shadow"
              >
                <div className="card-body w-84 border max-h-[70vh] overflow-scroll z-50 ">
                  <div>
                  </div>
                  <ShowNotification
                    noticeData={noticeData} />
                </div>
              </div>
              <div>
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default DashboardNavbar;
