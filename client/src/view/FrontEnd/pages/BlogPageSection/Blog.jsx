import React from "react";
import { imageUrl } from "../../../../utility/imageUrl";
import { Link } from "react-router-dom";
import { CalendarClock } from "lucide-react";

export default function Blog({ blog }) {
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="home-blog-single mb-30">
          <div className="blog-img-cap">
            <div className="blog-img">
              <img
                src={imageUrl(blog?.image)}
                alt="Blog post image"
                loading="lazy"
                decoding="async"
                className="img-fluid w-100"
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <ul>
                <li className="d-flex align-items-center">
                  <CalendarClock></CalendarClock>
                  <span className="ms-2">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </li>
              </ul>
            </div>

            <div className="blog-cap">
              <h3>
                <Link to={`/blog/${blog?.slug}`}>{blog?.title}</Link>
              </h3>

              <p>
                {blog?.short_description?.length > 150
                  ? blog?.short_description?.slice(0, 150) + "..."
                  : blog?.short_description}
              </p>

              <Link to={`/blog/${blog?.slug}`} className="more-btn">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
