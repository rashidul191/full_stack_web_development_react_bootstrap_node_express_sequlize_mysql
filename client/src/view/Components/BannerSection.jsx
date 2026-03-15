import React from "react";
import { useLocation } from "react-router-dom";

export default function BannerSection() {
  const { pathname } = useLocation();

  const pageName = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return (
    <>
      {" "}
      <div class="slider-area2">
        <div class="slider-height2 hero-overly2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap hero-cap2 text-center">
                  <h2>{pageName}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
