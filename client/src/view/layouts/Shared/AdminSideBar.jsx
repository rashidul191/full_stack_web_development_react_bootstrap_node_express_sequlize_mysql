import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard, MdSettings } from "react-icons/md";

const navClass = ({ isActive }) =>
  `flex items-center gap-2 hover:bg-gray-600 hover:text-white ${
    isActive ? "bg-gray-600 text-white" : ""
  }`;

const AdminSidebar = () => {
  const location = useLocation();

  // Sidebar Menu Config
  const sidebarMenus = [
    {
      title: "Dashboard",
      path: "dashboard",
      icon: MdDashboard,
    },
    {
      title: "Settings",
      basePath: "/admin/setting",
      icon: MdSettings,
      children: [
        {
          title: "General Setting",
          path: "/general",
        },
        {
          title: "Social Links",
          path: "/social-links",
        },
        {
          title: "Profile Setting",
          path: "/profile",
        },
      ],
    },
  ];

  return (
    <ul className="menu w-full grow">
      {sidebarMenus.map((menu, index) => {
        const Icon = menu.icon;

        const isActive = menu.basePath
          ? location.pathname.startsWith(menu.basePath)
          : false;

        // Normal Menu
        if (!menu.children) {
          return (
            <li key={index}>
              <NavLink to={menu.path} className={navClass}>
                {Icon && <Icon className="text-lg" />}
                <span>{menu.title}</span>
              </NavLink>
            </li>
          );
        }

        // Dropdown Menu
        return (
          <li key={index}>
            <details open={isActive}>
              <summary className="flex items-center justify-between gap-2">
                <span className="flex space-x-2">
                  {Icon && <Icon className="text-lg" />}
                  <span>{menu.title}</span>
                </span>
              </summary>

              <ul>
                {menu.children.map((child, i) => {
                  const ChildIcon = child.icon;
                  return (
                    <li key={i}>
                      <NavLink
                        to={menu.basePath + "" + child.path}
                        className={navClass}
                      >
                        {ChildIcon && <ChildIcon className="text-lg" />}
                        <span>{child.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        );
      })}
    </ul>
  );
};

export default AdminSidebar;
