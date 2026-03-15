import React from "react";

import HeroSection from "./HomePageSection/HeroSection";
import ClientReviewSection from "./HomePageSection/ClientReviewSection";
import { useApiHook } from "../../../hook/customHook";
import Blog from "./BlogPageSection/Blog";
import TeamSection from "./HomePageSection/TeamSection";
import ClientBrandSection from "./HomePageSection/ClientBrandSection";
import FAQSection from "./HomePageSection/FAQSection";
import ServiceSection from "./HomePageSection/ServiceSection";
import { useBusinessSettings } from "../../../utility/businessSetting";
import { imageUrl } from "../../../utility/imageUrl";
import { CheckCircle, PlayCircle } from "lucide-react";
import ActivitySection from "./HomePageSection/ActivitySection";
import StorieSection from "./HomePageSection/StorieSection";
import AboutUsSection from "./AboutPageSectiono/AboutUsSection";
import PriceSection from "./HomePageSection/PriceSection";

const Home = () => {
  const { data: blogs } = useApiHook("/blog");
  const { businessSetting } = useBusinessSettings();
  return (
    <>
      <main>
        <HeroSection></HeroSection>

        <ServiceSection></ServiceSection>

        <AboutUsSection></AboutUsSection>

        <div className="video-intro-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="video-wrapper"
                  // data-aos="fade-right"
                  // data-aos-delay="100"
                >
                  {businessSetting?.video_thumbnal ? (
                    <div className="video-thumbnail">
                      <img
                        src={imageUrl(businessSetting?.video_thumbnal)}
                        alt="Video thumbnail"
                        width="555"
                        height="394"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="video-overlay">
                        <a
                          // target="_blank"
                          href={businessSetting?.video_youtube_link ?? "#"}
                          className="play-btn glightbox"
                        >
                          <PlayCircle></PlayCircle>
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="video-content"
                  // data-aos="fade-left"
                  // data-aos-delay="200"
                >
                  <h2>{businessSetting?.video_title}</h2>
                  <p>{businessSetting?.video_content}</p>
                  <ul className="video-features">
                    {[1, 2, 3, 4, 5].map((num) => {
                      const point = businessSetting?.[`video_point_${num}`];

                      return point ? (
                        <li key={num}>
                          <CheckCircle /> {point}
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="services-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle mb-70">
                  <span className="section-label">Our Portfolios of cases</span>
                  <h2>Featured Case Study</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-10">
                <div
                  className="single-services mb-100"
                  // data-aos="fade-up"
                  // data-aos-delay="100"
                >
                  <div className="services-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.webp"
                      alt="Strategy planning case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="services-caption">
                    <span className="case-category">Strategy planing</span>
                    <p>
                      <a href="#">
                        Within the construction industry as their overdraft
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-10">
                <div
                  className="single-services mb-100"
                  // data-aos="fade-up"
                  // data-aos-delay="200"
                >
                  <div className="services-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services2.webp"
                      alt="Strategy planning case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="services-caption">
                    <span className="case-category">Strategy planing</span>
                    <p>
                      <a href="#">
                        Within the construction industry as their overdraft
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-10">
                <div
                  className="single-services mb-100"
                  // data-aos="fade-up"
                  // data-aos-delay="100"
                >
                  <div className="services-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services3.webp"
                      alt="Strategy planning case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="services-caption">
                    <span className="case-category">Strategy planing</span>
                    <p>
                      <a href="#">
                        Within the construction industry as their overdraft
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-10">
                <div
                  className="single-services mb-100"
                  // data-aos="fade-up"
                  // data-aos-delay="200"
                >
                  <div className="services-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services4.webp"
                      alt="Strategy planning case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="services-caption">
                    <span className="case-category">Strategy planing</span>
                    <p>
                      <a href="#">
                        Within the construction industry as their overdraft
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <StorieSection></StorieSection>

        {/* <div className="cta-banner-area">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Schedule a free consultation with our experts and discover how
                we can help you achieve your goals.
              </p>
              <div className="cta-buttons">
                <a
                  href="https://preview.colorlib.com/theme/consultingbiz/contact.html"
                  className="btn-cta-primary"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://preview.colorlib.com/theme/consultingbiz/services.html"
                  className="btn-cta-secondary"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <ClientReviewSection></ClientReviewSection>

        <ActivitySection></ActivitySection>

        <TeamSection></TeamSection>

        <PriceSection></PriceSection>

        <FAQSection></FAQSection>

        {/* <section
          className="wantToWork-area w-padding2 section-bg"
          data-background="assets/img/gallery/section_bg03.webp"
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-9 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>
                    Are you Searching
                    <br /> For a First-Class Consultant?
                  </h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <a href="#" className="btn btn-black float-end">
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </section> */}

        <div className="home-blog-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-100">
                  <span className="section-label">Recent News of us</span>
                  <h2>Our Recent Blog</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {blogs?.data
                ?.sort((a, b) => b?.id - a?.id)
                ?.slice(0, 2)
                ?.map((blog, index) => (
                  <Blog key={index} blog={blog}></Blog>
                ))}
            </div>
          </div>
        </div>

        <ClientBrandSection></ClientBrandSection>
      </main>
    </>
  );
};

export default Home;
