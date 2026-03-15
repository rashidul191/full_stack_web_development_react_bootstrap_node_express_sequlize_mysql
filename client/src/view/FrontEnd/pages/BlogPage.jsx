import React, { useState } from "react";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import Pagination from "../../Components/Pagination";
import BannerSection from "../../Components/BannerSection";
import Blog from "./BlogPageSection/Blog";

export default function BlogPage() {
  const [page, setPage] = useState(1);
  let limit = 12; // per page data view

  const { data: blogs, loading } = useApiHook(
    `/blog?page=${page}&limit=${limit}`,
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BannerSection></BannerSection>
      <div className="home-blog-area section-padding30">
        <div className="container">
          {/* BLOG LIST */}
          <div className="row">
            {blogs?.data
              ?.sort((a, b) => b?.id - a?.id)
              ?.map((blog) => (
                <Blog key={blog.id} blog={blog} />
              ))}
          </div>

          {/* PAGINATION */}
          <Pagination
            page={page}
            totalPages={blogs?.pagination?.totalPages}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
}
