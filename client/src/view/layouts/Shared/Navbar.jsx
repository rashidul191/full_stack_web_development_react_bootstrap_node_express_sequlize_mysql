import React from "react";
import defaultAvatar from "../../../../src/assets/avatar.png";
import { getRoleName } from "../../../enum/Roles";
import { NavLink } from "react-router-dom";
import { Globe2 } from "lucide-react";

export default function Navbar({ userInfo, toggleDrawer }) {
  const { auth, logoutUser } = userInfo;
  const user = auth?.auth;

  return (
    <>
      <nav className="navbar w-full bg-base-300">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
          onClick={toggleDrawer}
        >
          {/* Sidebar toggle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            className="my-1.5 inline-block size-4"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 4v16"></path>
            <path d="M14 10l2 2l-2 2"></path>
          </svg>
        </label>
        {/* Right side */}
        <div className="flex w-full justify-end items-center">
          <NavLink to={"/"} >
            <Globe2></Globe2>
          </NavLink>

          <div className="dropdown dropdown-end mx-3">
            {/* Profile Button */}
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.avatar ?? defaultAvatar} alt="profile" />
                </div>
              </div>

              <div className="hidden md:block text-left">
                <p className="font-semibold leading-none">{user?.name}</p>
                <span className="text-xs opacity-70">
                  {getRoleName[user?.role]}
                </span>
              </div>
            </div>

            {/* Dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 shadow"
            >
              <li>
                <button className="bg-red-500 text-white" onClick={logoutUser}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
