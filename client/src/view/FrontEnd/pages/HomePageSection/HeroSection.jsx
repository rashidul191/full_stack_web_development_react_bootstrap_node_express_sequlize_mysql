import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useApiHook } from "../../../../hook/customHook";
import { imageUrl } from "../../../../utility/imageUrl";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { data: heroSlides } = useApiHook("/slider");
  return (
    <>
      <div className="slider-area">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={heroSlides?.length > 1}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
        >
          {heroSlides?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div
                className="single-slider d-flex align-items-center"
                style={{
                  backgroundImage: `url(${imageUrl(item?.image)})`,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-7 col-md-8">
                      <div className="hero__caption">
                        <span>{item?.sub_title}</span>
                        <h1>{item?.title}</h1>
                        <p>{item?.content}</p>

                        <div className="hero__btn">
                          <Link
                            to={item.button_link ?? "/"}
                            className="btn hero-btn"
                          >
                            {item.button_text ?? "Contact"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="hero-prev swiper-button-prev"></div>
          <div className="hero-next swiper-button-next"></div>
        </Swiper>
      </div>
    </>
  );
}
