import React from "react";

import HeroSection from "./HomePageSection/HeroSection";
import ClientReviewSection from "./HomePageSection/ClientReviewSection";
import { useApiHook } from "../../../hook/customHook";
import Blog from "./BlogPageSection/Blog";
import TeamSection from "./HomePageSection/TeamSection";
import ClientBrandSection from "./HomePageSection/ClientBrandSection";
import FAQSection from "./HomePageSection/FAQSection";

const Home = () => {
  const { data: blogs } = useApiHook("/blog");
  return (
    <>
      <main>
        <HeroSection></HeroSection>

        <div className="categories-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-70">
                  <span className="section-label">Our Top Services</span>
                  <h2>Our Best Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div
                  className="single-cat text-center mb-50"
                  // data-aos="fade-up"
                  // data-aos-delay="100"
                >
                  <div className="cat-icon">
                    <span className="flaticon-development"></span>
                  </div>
                  <div className="cat-cap">
                    <h3>
                      <a href="https://preview.colorlib.com/theme/consultingbiz/services.html">
                        Strategy Planning{" "}
                      </a>
                    </h3>
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available but the new majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div
                  className="single-cat text-center mb-50"
                  // data-aos="fade-up"
                  // data-aos-delay="200"
                >
                  <div className="cat-icon">
                    <span className="flaticon-result"></span>
                  </div>
                  <div className="cat-cap">
                    <h3>
                      <a href="https://preview.colorlib.com/theme/consultingbiz/services.html">
                        Insurance Service
                      </a>
                    </h3>
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available but the new majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div
                  className="single-cat text-center mb-50"
                  // data-aos="fade-up"
                  // data-aos-delay="300"
                >
                  <div className="cat-icon">
                    <span className="flaticon-team"></span>
                  </div>
                  <div className="cat-cap">
                    <h3>
                      <a href="https://preview.colorlib.com/theme/consultingbiz/services.html">
                        Audit & Evaluation
                      </a>
                    </h3>
                    <p>
                      There are many variations of passages of lorem Ipsum
                      available but the new majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.webp"
                    alt="Business consultation meeting"
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
                    <span className="section-label">Our Top Services</span>
                    <h2>Our Best Services</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                      ess cillum dolore egru lofrre dsu quality mollit anim
                      laborumuis au dolor in voluptate velit cillu.
                    </p>
                    <p className="mb-65">
                      Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                      indd re voluptate velit esscillumlore eu quife nrulla
                      parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute
                      iruxvfg dhjinulpadeserunt moll.
                    </p>
                    <a
                      href="https://preview.colorlib.com/theme/consultingbiz/about.html"
                      className="btn post-btn"
                    >
                      More About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video-intro-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="video-wrapper"
                  // data-aos="fade-right"
                  // data-aos-delay="100"
                >
                  <div className="video-thumbnail">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.webp"
                      alt="Video thumbnail"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="video-overlay">
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        className="play-btn glightbox"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="video-content"
                  // data-aos="fade-left"
                  // data-aos-delay="200"
                >
                  <h2>See How We Transform Businesses</h2>
                  <p>
                    Watch our brief introduction to understand how ConsultingBiz
                    has helped hundreds of companies achieve their goals through
                    strategic planning and expert guidance.
                  </p>
                  <ul className="video-features">
                    <li>
                      <i className="fas fa-check"></i> 15+ years of industry
                      experience
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Proven methodology and
                      frameworks
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Dedicated team of experts
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Results-driven approach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-area section-padding3">
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
        </div>

        <div className="case-studies-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-70">
                  <span>Success Stories</span>
                  <h2>Our Case Studies</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="case-study-card"
                  // data-aos="fade-up"
                  // data-aos-delay="100"
                >
                  <div className="case-study-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.webp"
                      alt="Digital transformation case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="case-study-category">Finance</span>
                  </div>
                  <div className="case-study-content">
                    <h4>
                      <a href="#">Digital Transformation for Regional Bank</a>
                    </h4>
                    <p>
                      Helped modernize legacy systems and improve customer
                      experience through digital channels.
                    </p>
                    <div className="case-study-meta">
                      <span className="client-name">
                        <strong>Client:</strong> First Regional Bank
                      </span>
                      <span className="results">+45% efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="case-study-card"
                  // data-aos="fade-up"
                  // data-aos-delay="200"
                >
                  <div className="case-study-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services2.webp"
                      alt="Healthcare operations case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="case-study-category">Healthcare</span>
                  </div>
                  <div className="case-study-content">
                    <h4>
                      <a href="#">Operational Excellence in Healthcare</a>
                    </h4>
                    <p>
                      Streamlined operations and reduced patient wait times
                      through process optimization.
                    </p>
                    <div className="case-study-meta">
                      <span className="client-name">
                        <strong>Client:</strong> Metro Health System
                      </span>
                      <span className="results">-30% wait time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="case-study-card"
                  // data-aos="fade-up"
                  // data-aos-delay="300"
                >
                  <div className="case-study-img">
                    <img
                      src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services3.webp"
                      alt="Supply chain optimization case study"
                      width="555"
                      height="394"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="case-study-category">Manufacturing</span>
                  </div>
                  <div className="case-study-content">
                    <h4>
                      <a href="#">Supply Chain Optimization</a>
                    </h4>
                    <p>
                      Redesigned supply chain strategy resulting in significant
                      cost savings and faster delivery.
                    </p>
                    <div className="case-study-meta">
                      <span className="client-name">
                        <strong>Client:</strong> Industrial Corp
                      </span>
                      <span className="results">$2M saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        <div className="count-down-area pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter">8705</span>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter active text-center">
                  <span className="counter">480</span>
                  <p> Active Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter">626</span>
                  <p>Cups of Coffee</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-counter text-center">
                  <span className="counter">9774</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TeamSection></TeamSection>

        <div
          className="pricing-area section-bg"
          style={{
            backgroundImage:
              "url('https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg02.webp')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle section-tittle2 text-center mb-50">
                  <span>Our Pricing Plans</span>
                  <h2>Choose Your Plan</h2>
                </div>

                <div className="pricing-toggle text-center mb-50">
                  <span className="toggle-label monthly-label active">
                    Monthly
                  </span>
                  <label className="toggle-switch">
                    <input type="checkbox" id="pricing-toggle" />
                    <span className="toggle-slider"></span>
                  </label>
                  <span className="toggle-label yearly-label">Yearly</span>
                  <span className="save-badge">Save 20%</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="pricing-card"
                  // data-aos="fade-up"
                  // data-aos-delay="100"
                >
                  <div className="pricing-header">
                    <div className="pricing-icon">
                      <i className="fas fa-seedling"></i>
                    </div>
                    <h3>Starter</h3>
                    <p>For small businesses</p>
                  </div>
                  <div className="pricing-price">
                    <span
                      className="price"
                      // data-monthly="499"
                      // data-yearly="399"
                    >
                      <sup>$</sup>
                      <span className="amount">499</span>
                    </span>
                    <span className="period">/month</span>
                  </div>
                  <ul className="pricing-features">
                    <li>Initial Business Assessment</li>
                    <li>Monthly Strategy Session</li>
                    <li>Email Support</li>
                    <li>Basic Analytics Report</li>
                    <li className="disabled">Dedicated Consultant</li>
                    <li className="disabled">24/7 Priority Support</li>
                  </ul>
                  <div className="pricing-btn">
                    <a
                      href="https://preview.colorlib.com/theme/consultingbiz/contact.html"
                      className="btn post-btn"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="pricing-card featured"
                  // data-aos="fade-up"
                  // data-aos-delay="200"
                >
                  <span className="popular-badge">Most Popular</span>
                  <div className="pricing-header">
                    <div className="pricing-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h3>Professional</h3>
                    <p>For growing companies</p>
                  </div>
                  <div className="pricing-price">
                    <span
                      className="price"
                      data-monthly="999"
                      data-yearly="799"
                    >
                      <sup>$</sup>
                      <span className="amount">999</span>
                    </span>
                    <span className="period">/month</span>
                  </div>
                  <ul className="pricing-features">
                    <li>Comprehensive Assessment</li>
                    <li>Weekly Strategy Sessions</li>
                    <li>Phone & Email Support</li>
                    <li>Advanced Analytics Dashboard</li>
                    <li>Dedicated Consultant</li>
                    <li className="disabled">24/7 Priority Support</li>
                  </ul>
                  <div className="pricing-btn">
                    <a
                      href="https://preview.colorlib.com/theme/consultingbiz/contact.html"
                      className="btn post-btn"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="pricing-card"
                  // data-aos="fade-up"
                  // data-aos-delay="300"
                >
                  <div className="pricing-header">
                    <div className="pricing-icon">
                      <i className="fas fa-crown"></i>
                    </div>
                    <h3>Enterprise</h3>
                    <p>For large organizations</p>
                  </div>
                  <div className="pricing-price">
                    <span
                      className="price"
                      data-monthly="2499"
                      data-yearly="1999"
                    >
                      <sup>$</sup>
                      <span className="amount">2499</span>
                    </span>
                    <span className="period">/month</span>
                  </div>
                  <ul className="pricing-features">
                    <li>Full Business Transformation</li>
                    <li>Unlimited Strategy Sessions</li>
                    <li>24/7 Priority Support</li>
                    <li>Custom Analytics Platform</li>
                    <li>Dedicated Team of Consultants</li>
                    <li>On-site Workshops</li>
                  </ul>
                  <div className="pricing-btn">
                    <a
                      href="https://preview.colorlib.com/theme/consultingbiz/contact.html"
                      className="btn post-btn"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
