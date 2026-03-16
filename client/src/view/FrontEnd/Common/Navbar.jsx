import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ApplicationLogo from "../../Components/ApplicationLogo";
import { useApiHook } from "../../../hook/customHook";
import { CommonStatus } from "../../../enum/commonStatus";
import { Clock, Facebook } from "lucide-react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useBusinessSettings } from "../../../utility/businessSetting";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Navbar = () => {
  const { businessSetting } = useBusinessSettings();
  // const userInfo = useContext(AuthContext);
  // const email = userInfo?.auth?.auth?.email;
  const { data: menus } = useApiHook("/menu");
  const topMenus = menus
    ?.sort((a, b) => a.serial - b.serial)
    ?.filter(
      (item) => item.parent_id === null && item?.status === CommonStatus.Active,
    );
  // const { auth, logoutUser } = userInfo;

  const socialLinks = [
    { key: "fb_link", icon: <FaFacebookF />, label: "Facebook" },
    { key: "twitter_link", icon: <FaTwitter />, label: "Twitter" },
    { key: "linkedin_link", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { key: "youtube_link", icon: <BsYoutube />, label: "Youtube" },
    { key: "instagram_link", icon: <BsInstagram />, label: "Instagram" },
  ];

  const menuLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {topMenus?.map((item) => (
        <li key={item?.id}>
          <NavLink to={item?.slug}>{item?.name}</NavLink>
          {item?.children?.length > 0 ? (
            <ul className="submenu">
              <li key={item?.id}>
                {item?.children
                  ?.sort((x, y) => x.serial - y.serial)
                  ?.map((subMenu) => (
                    <NavLink to={`${item.slug}/${subMenu.slug}`}>
                      {subMenu?.name}
                    </NavLink>
                  ))}
              </li>
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}

      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact</NavLink>
        {/* <ul className="submenu">
          <li>
            <a href="https://preview.colorlib.com/theme/consultingbiz/contact.html">
              Contact
            </a>
          </li>
          <li>
            <a href="https://preview.colorlib.com/theme/consultingbiz/careers.html">
              Careers
            </a>
          </li>
        </ul> */}
      </li>
    </>
  );

  return (
    <>
      {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/loder.webp"
                alt="Loading"
                width="150"
                height="30"
                fetchPriority="high"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </div> */}
      <header>
        <div className="header-area">
          <div className="main-header">
            <div className="header-top d-none d-lg-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="header-info-left">
                      <ul>
                        <li>
                          <span className="d-flex align-items-center">
                            {" "}
                            <Clock></Clock>
                            <span className="ms-2"> {businessSetting?.time_date}</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="header-info-right">
                      <ul className="header-social">
                        {socialLinks.map((social) =>
                          businessSetting?.[social.key] ? (
                            <li key={social.key}>
                              <a
                                href={businessSetting[social.key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                              >
                                {social.icon}
                              </a>
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-bottom  header-sticky">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <NavLink to="/">
                        {/* <img
                          src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.webp"
                          alt=""
                          width="150"
                          height="30"
                          fetchPriority="high"
                          decoding="sync"
                        /> */}
                        <ApplicationLogo className="h-24"></ApplicationLogo>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10">
                    <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                      <div className="main-menu d-none d-lg-block">
                        <nav>
                          <ul id="navigation">{menuLinks}</ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
