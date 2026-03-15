import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useApiHook } from "../../../../hook/customHook";
import { imageUrl } from "../../../../utility/imageUrl";

export default function ClientBrandSection() {
  const { data: clientBrands } = useApiHook("/client-brand");
  return (
    <>
      <div className="brand-area py-5">
        <div className="container">
          <div className="brand-active brand-border pb-40">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              loop={clientBrands?.length > 5} // 🔑 main fix
              autoplay={{ delay: 2000 }}
              breakpoints={{
                320: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {clientBrands
                ?.sort((a, b) => b.id - a.id)
                ?.map((item) => (
                  <SwiperSlide>
                    <img
                      src={imageUrl(item?.image)}
                      alt={item?.name}
                      width="166"
                      height="41"
                      loading="lazy"
                      decoding="async"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
