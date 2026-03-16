import React, { useState } from "react";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import Pagination from "../../Components/Pagination";
import BannerSection from "../../Components/BannerSection";
import Blog from "./BlogPageSection/Blog";

export default function BlogPage() {
  const [page, setPage] = useState(1);
  let limit = 12;

  const { data: blogs, loading } = useApiHook(
    `/blog?page=${page}&limit=${limit}`,
  );

  if (loading) {
    return <Loading />;
  }

  const blogList = blogs?.data || [];

  return (
    <>
      <BannerSection />

      <div className="home-blog-area section-padding30">
        <div className="container">
          <div className="row">
            {blogList.length === 0 ? (
              <div className="col-12 text-center py-5">
                <h4 className="text-danger">No Data Found !</h4>
              </div>
            ) : (
              blogList
                ?.sort((a, b) => b?.id - a?.id)
                ?.map((blog) => <Blog key={blog.id} blog={blog} />)
            )}
          </div>

          {blogList.length > 0 && (
            <Pagination
              page={page}
              totalPages={blogs?.pagination?.totalPages}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
