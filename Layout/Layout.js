import React, { useState } from "react";
import DashboardNavbar from "../components/Navbars/DashboardNavbar";
import ShowNotification from "../components/ShowNotification/ShowNotification";
import Sidebars from "../components/Sidebars/Sidebars";

const Layout = ({ children }) => {
  const [noticeForModal, setNoticeForModal] = useState({});
  return (
    <> 
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <DashboardNavbar />
          <div className="drawer drawer-end">
            <input
              id="notification"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">{children}</div>
          </div>
        </div>
        <Sidebars />
      </div>
    </>
  );
};

export default Layout;
