import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard, MdSettings } from "react-icons/md";
import {
  BadgeDollarSign,
  Globe2,
  Home,
  MessageCircleMore,
  PenIcon,
  User2,
  Users,
} from "lucide-react";

const navClass = ({ isActive }) =>
  `flex items-center gap-2 hover:bg-gray-600 hover:text-white ${
    isActive ? "bg-gray-600 text-white" : ""
  }`;

const AdminSidebar = () => {
  const location = useLocation();

  const sidebarMenus = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: MdDashboard,
    },

    {
      title: "Menu Manage",
      icon: MdSettings,
      children: [
        {
          title: "Menu List",
          path: "/admin/menu",
        },
        {
          title: "Sub Menu List",
          path: "/admin/sub-menu",
        },
      ],
    },
    {
      title: "Content Manage",
      path: "/admin/content-manage",
      icon: PenIcon,
    },
    {
      title: "Home",
      icon: Home,
      children: [
        {
          title: "Slider",
          path: "/admin/slider",
        },
        {
          title: "Our Service",
          path: "/admin/service",
        },
        {
          title: "Video Section",
          path: "/admin/setting/video-section",
        },
        {
          title: "Client Review",
          path: "/admin/review",
        },

        {
          title: "Actvity",
          path: "/admin/activity",
        },

        {
          title: "Client Brand",
          path: "/admin/client-brand",
        },

        {
          title: "FAQ List",
          path: "/admin/faq",
        },
      ],
    },

    {
      title: "Price",
      path: "/admin/price",
      icon: BadgeDollarSign,
    },
    {
      title: "About Page",
      path: "/admin/about-us",
      icon: User2,
    },

    {
      title: "Team",
      path: "/admin/team",
      icon: Users,
    },
    {
      title: "Blog",
      icon: Globe2,
      children: [
        {
          title: "Blog List",
          path: "/admin/blog",
        },
        {
          title: "Categories",
          path: "/admin/category",
        },
      ],
    },

    {
      title: "Storie",
      path: "/admin/storie",
      icon: Globe2,
    },
    {
      title: "Contact Message",
      path: "/admin/contact-message",
      icon: MessageCircleMore,
    },
    {
      title: "Settings",
      icon: MdSettings,
      children: [
        {
          title: "General Setting",
          path: "/admin/setting/general",
        },
        {
          title: "Social Links",
          path: "/admin/setting/social-links",
        },
        {
          title: "Profile Setting",
          path: "/admin/setting/profile",
        },
      ],
    },
  ];

  return (
    <ul className="menu p-2 w-full text-base-content">
      {sidebarMenus.map((menu, index) => {
        const Icon = menu.icon;

        // Menu without dropdown
        if (!menu.children) {
          return (
            <li key={index}>
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `${navClass({ isActive })} is-drawer-close:tooltip is-drawer-close:tooltip-right`
                }
              >
                <Icon size={20} />
                <span className="is-drawer-close:hidden">{menu.title}</span>
              </NavLink>
            </li>
          );
        }

        // Menu with dropdown
        return (
          <li key={index}>
            <details
              open={menu.children.some((child) =>
                location.pathname.startsWith(child.path),
              )}
            >
              <summary className="flex items-center justify-between w-full gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right">
                <div className="flex">
                  <Icon size={20} />
                  <span className="is-drawer-close:hidden ms-2">
                    {menu.title}
                  </span>
                </div>
              </summary>

              <ul className="is-drawer-close:hidden">
                {menu.children.map((child, i) => (
                  <li key={i}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) =>
                        `ms-2 ${navClass({ isActive })}`
                      }
                    >
                      {child.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        );
      })}
    </ul>
  );
};

export default AdminSidebar;
