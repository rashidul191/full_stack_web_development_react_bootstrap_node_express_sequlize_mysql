import React from "react";
import ApplicationLogo from "../../Components/ApplicationLogo";
import { useBusinessSettings } from "../../../utility/businessSetting";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { ArrowUpFromLine } from "lucide-react";

const Footer = () => {
  const { businessSetting } = useBusinessSettings();

  const socialLinks = [
    { key: "fb_link", icon: <FaFacebookF />, label: "Facebook" },
    { key: "twitter_link", icon: <FaTwitter />, label: "Twitter" },
    { key: "linkedin_link", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { key: "youtube_link", icon: <BsYoutube />, label: "Youtube" },
    { key: "instagram_link", icon: <BsInstagram />, label: "Instagram" },
  ];
  return (
    <>
      <footer>
        <div
          className="footer-area section-bg"
          data-background="assets/img/gallery/footer_bg.webp"
        >
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-logo">
                      <Link to="/">
                        <ApplicationLogo className="h-24"></ApplicationLogo>
                      </Link>
                    </div>
                    {/* <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">
                          Receive updates and latest news direct from Simply
                          enter.
                        </p>
                      </div>
                    </div> */}
                    <div className="footer-number">
                      <h4>
                        {/* <span>+564 </span>7885 3222 */}
                        {businessSetting?.phone}
                      </h4>
                      <p> {businessSetting?.email}</p>
                    </div>
                  </div>
                </div>

                {/* <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Location </h4>
                      <ul>
                        <li>
                          <a href="#">Advanced</a>
                        </li>
                        <li>
                          <a href="#"> Management</a>
                        </li>
                        <li>
                          <a href="#">Corporate</a>
                        </li>
                        <li>
                          <a href="#">Customer</a>
                        </li>
                        <li>
                          <a href="#">Information</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}

                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Explore</h4>
                      <ul>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/about-us">About</Link>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Location</h4>
                      <div className="footer-pera">
                        <p className="info1">
                          Subscribe now to get daily updates
                        </p>
                      </div>
                    </div>
                    {/* <!-- Form --> */}
                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="#"
                          method="get"
                          className="subscribe_form relative mail_part"
                          noValidate={true}
                        >
                          <input
                            type="email"
                            name="EMAIL"
                            id="newsletter-form-email"
                            placeholder=" Email Address "
                            className="placeholder hide-on-focus"
                            onFocus="this.placeholder = ''"
                            onBlur="this.placeholder = 'Your email address'"
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              SIGN UP
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright &copy; {new Date().getFullYear()}{" "}
                      {businessSetting?.copyright_text} All rights reserved |
                      Developed by{" "}
                      <a href="https://www.sawebsoft.com/" target="_blank">
                        SA Websoft
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* <!-- Footer Social --> */}
                  <ul className="footer-social float-end">
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
      </footer>

      <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          {/* <i className="fas fa-level-up-alt"></i> */}
          <ArrowUpFromLine></ArrowUpFromLine>
        </a>
      </div>
    </>
  );
};

export default Footer;
