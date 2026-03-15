import React from "react";
import { Link, useParams } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import BannerSection from "../../Components/BannerSection";
import { imageUrl } from "../../../utility/imageUrl";
import truncate from "truncate-html";
import HtmlContent from "../../Components/HtmlContent";

const SubMenuContent = () => {
  const { slug } = useParams();
  const { data: menu, loading } = useApiHook(`/menu/${slug}`);

  if (loading) return <Loading></Loading>;
  return (
    <>
      <BannerSection></BannerSection>

      <div className="services-area section-padding3">
        <div className="container">
          {menu?.posts && menu.posts.length > 0 ? (
            menu.posts
              ?.sort((a, b) => b.id - a.id)
              ?.map((item, index) => (
                <div
                  className={`row align-items-center mb-5 ${
                    index % 2 !== 0 ? "flex-row-reverse" : ""
                  }`}
                  key={item?.id}
                >
                  {/* Image */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="services-img">
                      <img
                        src={imageUrl(item?.image)}
                        alt={item?.title}
                        className="img-fluid w-100 service-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="services-content p-3">
                      <h3>{item?.title}</h3>

                      <div className="mb-3">
                        <HtmlContent
                          content={truncate(item?.short_description, 150)}
                        />
                      </div>

                      <Link
                        to={`/more-details/${item?.slug}`}
                        className="bg-blue-400 px-3 py-2"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-5">
              <h4 className="text-danger">No Data Found !</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubMenuContent;
