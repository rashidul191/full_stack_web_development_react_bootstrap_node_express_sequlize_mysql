import React from "react";
import { useApiHook } from "../../../../hook/customHook";
import { imageUrl } from "../../../../utility/imageUrl";

export default function ServiceSection() {
  const { data: services } = useApiHook("/service");
  return (
    <>
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
            {services
              ?.sort((a, b) => b.id - a.id)
              ?.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={item?.id}>
                  <div className="single-cat text-center mb-50">
                    <div className="mx-auto text-center">
                      <img
                        src={imageUrl(item?.image)}
                        alt={item?.name}
                        className="d-block mx-auto"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="cat-cap mt-3">
                      <h3>{item?.name}</h3>

                      <p>
                        {item?.content?.length > 100
                          ? item?.content?.slice(0, 100) + "..."
                          : item?.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
