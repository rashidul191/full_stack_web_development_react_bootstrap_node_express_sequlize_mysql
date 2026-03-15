import React from "react";
import { useBusinessSettings } from "../../../../utility/businessSetting";
import HtmlContent from "../../../Components/HtmlContent";
import { Link, useMatch } from "react-router-dom";
import { imageUrl } from "../../../../utility/imageUrl";

export default function AboutUsSection() {
  const { businessSetting } = useBusinessSettings();
  return (
    <>
      <div
        className="support-company-area pt-100 pb-100 section-bg fix"
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg02.webp')",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img
                  src={imageUrl(businessSetting?.about_left_image)}
                  alt=""
                  width="538"
                  height="572"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2 mb-50">
                  {/* <span className="section-label">Our Top Services</span> */}
                  <h2>{businessSetting?.about_title}</h2>
                </div>
                <div className="support-caption">
                  <HtmlContent
                    content={businessSetting?.about_content}
                  ></HtmlContent>

                  {useMatch("/") ? (
                    <Link to={"/about-us"} className="btn post-btn">
                      More About Us
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
