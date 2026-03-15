import React from "react";
import { useParams } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { imageUrl } from "../../../utility/imageUrl";
import HtmlContent from "../../Components/HtmlContent";
import BannerSection from "../../Components/BannerSection";
import { CalendarClock } from "lucide-react";

const ContentDetails = () => {
  const { slug } = useParams();
  const { data: contentDetail, loading } = useApiHook(
    `/content-manage/${slug}`,
  );

  console.log(contentDetail);

  if (loading) return <Loading />;

  return (
    <>
      <BannerSection></BannerSection>

      <section className="single-post-area py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="card shadow-sm border-0">
                {/* Image */}
                <img
                  src={imageUrl(contentDetail?.image)}
                  alt={contentDetail?.title}
                  className="card-img-top img-fluid"
                  style={{
                    width: "100%",
                    height: "380px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  {/* Title */}
                  <h2 className="card-title fw-bold mb-3">
                    {contentDetail?.title}
                  </h2>

                  {/* Date */}
                  <div className="text-muted small mb-4 d-flex align-items-center">
                    <CalendarClock></CalendarClock>
                    <span className="ms-2">
                      {new Date(contentDetail?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lh-lg">
                    <HtmlContent content={contentDetail?.description} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentDetails;
