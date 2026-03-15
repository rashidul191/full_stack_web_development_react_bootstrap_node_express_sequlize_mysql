import React from "react";
import { useParams } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { imageUrl } from "../../../utility/imageUrl";
import HtmlContent from "../../Components/HtmlContent";
import BannerSection from "../../Components/BannerSection";

const BlogDetails = () => {
  const { slug } = useParams();
  const { data: categories } = useApiHook("/category");
  const { data: blog, loading } = useApiHook(`/blog/${slug}`);

  if (loading) return <Loading />;

  return (
    <>
      <BannerSection></BannerSection>

      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            {/* ================= BLOG CONTENT ================= */}
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img
                    className="img-fluid"
                    src={imageUrl(blog?.image)}
                    alt={blog?.title}
                  />
                </div>

                <div className="blog_details">
                  <h2>{blog?.title}</h2>

                  <ul className="blog-info-link mt-3 mb-4">
                    <li>
                      {/* <i className="fa fa-user"></i> */}
                      By Admin
                    </li>

                    <li>
                      {/* <i className="fa fa-calendar"></i>{" "} */}
                      {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                  </ul>

                  {/* BLOG DESCRIPTION */}
                  <div>
                    <HtmlContent content={blog?.description}> </HtmlContent>
                  </div>
                </div>
              </div>

              {/* ================= NAVIGATION ================= */}
              {/* <div className="navigation-top">
              <div className="d-sm-flex justify-content-between text-center">
                <p className="like-info">
                  <span className="align-middle">
                    <i className="fa fa-heart"></i>
                  </span>{" "}
                  Lily and 4 people like this
                </p>

                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* ================= AUTHOR ================= */}
              {/* <div className="blog-author">
              <div className="media align-items-center">
                <img src="/assets/img/blog/author.png" alt="" />
                <div className="media-body">
                  <a href="#">
                    <h4>Admin</h4>
                  </a>
                  <p>Author of this blog post.</p>
                </div>
              </div>
            </div> */}

              {/* ================= COMMENTS ================= */}
              {/* <div className="comments-area">
              <h4>Comments</h4>

              <div className="comment-list">
                <div className="single-comment justify-content-between d-flex">
                  <div className="user justify-content-between d-flex">
                    <div className="thumb">
                      <img src="/assets/img/comment/comment_1.png" alt="" />
                    </div>

                    <div className="desc">
                      <p className="comment">Example comment content here.</p>

                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <h5>
                            <a href="#">User Name</a>
                          </h5>

                          <p className="date">December 4, 2032 at 3:12 pm</p>
                        </div>

                        <div className="reply-btn">
                          <a href="#" className="btn-reply text-uppercase">
                            reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              {/* ================= COMMENT FORM ================= */}
              {/* <div className="comment-form">
              <h4>Leave a Reply</h4>

              <form className="form-contact comment_form">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="comment"
                        cols="30"
                        rows="9"
                        placeholder="Write Comment"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="button button-contactForm btn_1 boxed-btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div> */}
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                {/* SEARCH */}
                <aside className="single_sidebar_widget search_widget">
                  <form>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                        />

                        <div className="input-group-append">
                          <button className="btns" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </aside>

                {/* CATEGORY */}
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>

                  <ul className="list cat-list">
                    {categories?.map((item) => {
                      return (
                        <li>
                          <a href="javascript:void(0)" className="d-flex">
                            <p>{item?.name}</p>
                            <p>({item?.blogs?.length ?? 0})</p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
