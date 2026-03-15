import React from "react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Outlet } from "react-router-dom";
import Navbar from "../FrontEnd/Common/Navbar";
import Footer from "../FrontEnd/Common/Footer";
import { useCss, useScript } from "../../hook/customHook";

const FrontendLayout = () => {
  let cssAssets = [
    "/flaticon.css",
    "/all.min.css",
    "/themify-icons.css",
    "/animate.min.css",
    "/style.css",
    // "/swiper-bundle.min.css",
    "/glightbox.min.css",
    "/aos.css",
  ];
  cssAssets?.map((value) => useCss(`/front-end/assets/css${value}`));

  let jsAssets = [
    "/bootstrap.bundle.min.js",
    // "/swiper-bundle.min.js",
    "/glightbox.min.js",
    "/aos.js",
    // "/main.js",
  ];

  jsAssets?.map((value) => useScript(`/front-end/assets/js${value}`));

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default FrontendLayout;
