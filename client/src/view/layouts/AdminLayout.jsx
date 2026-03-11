import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ApplicationLogo from "../Components/ApplicationLogo";
import Navbar from "./Shared/Navbar";
import AdminSideBar from "./Shared/AdminSideBar";
import { AuthContext } from "../../context/AuthContext";

const AdminLayout = () => {
  const userInfo = useContext(AuthContext);

  // default open on large screen
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setDrawerOpen(true);
    }
  }, []);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-4"
          type="checkbox"
          checked={drawerOpen}
          onChange={() => setDrawerOpen(!drawerOpen)}
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Navbar */}
          <Navbar userInfo={userInfo}></Navbar>
          {/* Page content here */}
          <div className="p-4">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
           <ApplicationLogo className={"h-24"}></ApplicationLogo>
            {/* Sidebar content here */}
            <AdminSideBar></AdminSideBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
