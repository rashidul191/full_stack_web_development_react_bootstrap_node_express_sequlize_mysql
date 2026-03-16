import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useApiHook } from "../../../../hook/customHook";
import { imageUrl } from "../../../../utility/imageUrl";
import HtmlContent from "../../../Components/HtmlContent";

export default function ClientReviewSection() {
  const { data: reviews } = useApiHook("/review");
  return (
    <>
      <div
        className="testimonial-area testimonial-padding"
        style={{
          backgroundImage:
            "url('https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg04.webp')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-10 col-lg-10 col-md-9">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {reviews?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-testimonial text-center">
                      <div className="testimonial-caption ">
                        <div className="testimonial-top-cap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="67px"
                            height="49px"
                          >
                            <path
                              fillRule="evenodd"
                              fill="rgb(240, 78, 60)"
                              d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                            />
                          </svg>
                          {/* <div className="text-white">{item?.review_text}</div> */}
                          <div className="text-white">
                            <HtmlContent content={item?.review_text} />
                          </div>
                        </div>

                        <div className="testimonial-founder d-flex align-items-center justify-content-center">
                          <div className="founder-img">
                            <img
                              //   className="rounded-full"
                              src={imageUrl(item?.image)}
                              alt={item?.name}
                              width="81"
                              height="81"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                          <div className="founder-text">
                            <span>{item?.name}</span>
                            <p>{item?.designation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
