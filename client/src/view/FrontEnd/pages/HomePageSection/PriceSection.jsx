import React, { useState } from "react";
import { useApiHook } from "../../../../hook/customHook";
import { PriceStatus, getPriceStatusName } from "../../../../enum/PriceStatus";
import { YesNoStatus } from "../../../../enum/YesNoStatus";
import { imageUrl } from "../../../../utility/imageUrl";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function PriceSection() {
  const { data: prices } = useApiHook("/price");

  const [status, setStatus] = useState(PriceStatus.Monthly);

  // Filter Monthly / Yearly
  const filteredPrices = prices?.filter((item) => item.status === status) || [];

  return (
    <div
      className="pricing-area section-bg"
      style={{
        backgroundImage:
          "url('https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg02.webp')",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle section-tittle2 text-center mb-50">
              <span>Our Pricing Plans</span>
              <h2>Choose Your Plan</h2>
            </div>

            {/* Toggle */}
            <div className="pricing-toggle text-center mb-50">
              <span
                className={`toggle-label ${
                  status === PriceStatus.Monthly ? "active" : ""
                }`}
              >
                Monthly
              </span>

              <label className="toggle-switch mx-2">
                <input
                  type="checkbox"
                  checked={status === PriceStatus.Yearly}
                  onChange={(e) =>
                    setStatus(
                      e.target.checked
                        ? PriceStatus.Yearly
                        : PriceStatus.Monthly,
                    )
                  }
                />

                <span className="toggle-slider"></span>
              </label>

              <span
                className={`toggle-label ${
                  status === PriceStatus.Yearly ? "active" : ""
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row justify-content-center">
          {filteredPrices?.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className={`pricing-card h-100 ${
                  item?.is_popular === YesNoStatus.Yes ? "featured" : ""
                }`}
              >
                {/* Popular Badge */}
                {item?.is_popular === YesNoStatus.Yes && (
                  <span className="popular-badge">Most Popular</span>
                )}

                {/* Header */}
                <div className="pricing-header text-center">
                  {item?.image ? (
                    <div className="pricing-icon mb-3">
                      <img
                        src={imageUrl(item?.image)}
                        alt={item?.title}
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "2px solid #eee",
                          padding: "6px",
                          background: "#fff",
                        }}
                      />
                    </div>
                  ) : null}

                  <h3>{item?.title}</h3>

                  <p>{item?.sub_title}</p>
                </div>

                {/* Price */}
                <div className="pricing-price text-center mb-4">
                  <span className="price">
                    <sup>TK</sup>
                    <span className="amount">{item?.price}</span>
                  </span>

                  <span className="period">
                    /{getPriceStatusName[item?.status].toLowerCase()}
                  </span>
                </div>

                {/* Features */}
                <ul className="list-unstyled px-4 mb-4">
                  {item?.points?.map((point, i) => (
                    <li key={i} className="d-flex align-items-start mb-2">
                      <CheckCircle size={18} color="#28a745" className="mt-1" />

                      <span className="ms-2 text-muted">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="pricing-btn text-center mt-auto">
                  <Link to="/contact-us" className="btn post-btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
