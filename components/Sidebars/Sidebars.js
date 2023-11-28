import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
const Sidebars = () => {
  const router = useRouter()
  const logOut = ()=>{
    deleteCookie('ecom_user');
    router.push('/')
  }
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <div className="menu py-6 w-64 bg-base-100 lg:bg-inherit text-base-content">
        <div className=" items-center justify-center hidden md:flex ">
          <Link
            href={"/"}
            className="font-bold cursor-pointer select-none md:text-3xl text-xl no-animation"
          >
            Ecomservice
          </Link>
        </div>
        <li className="mt-5">
          <Link href="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link href="/dashboard/profile/services">Services</Link>
        </li>
        <li>
          <button onClick={()=>logOut()}>Log Out</button>
        </li>
      </div>
    </div>
  );
};
export default Sidebars;
