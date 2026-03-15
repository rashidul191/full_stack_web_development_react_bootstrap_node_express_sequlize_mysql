import React from "react";
import { Link, useParams } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import BannerSection from "../../Components/BannerSection";
import { imageUrl } from "../../../utility/imageUrl";
import HtmlContent from "../../Components/HtmlContent";
import truncate from "truncate-html";

const TopMenuContent = () => {
  const { slug } = useParams();
  const { data: menu, loading } = useApiHook(`/menu/${slug}`);

  if (loading) return <Loading></Loading>;
  return (
    <>
      <BannerSection></BannerSection>

      <div className="services-area section-padding3">
        <div className="container">
          <div className="row">
            {menu?.posts && menu.posts.length > 0 ? (
              menu?.posts
                ?.sort((a, b) => b.id - a.id)
                ?.map((item) => (
                  <div className="col-lg-6 col-md-6 col-sm-10">
                    <div className="single-services">
                      <div className="services-img">
                        <img
                          src={imageUrl(item?.image)}
                          alt={item?.title}
                          className="img-fluid w-100"
                          style={{ height: "300px", objectFit: "cover" }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="services-caption">
                        <p>
                          <Link to={`/more-details/${item?.slug}`}>
                            {item?.title}
                          </Link>
                        </p>
                        <div>
                          <HtmlContent
                            content={truncate(item?.short_description, 150)}
                          ></HtmlContent>
                        </div>
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
      </div>
    </>
  );
};

export default TopMenuContent;
