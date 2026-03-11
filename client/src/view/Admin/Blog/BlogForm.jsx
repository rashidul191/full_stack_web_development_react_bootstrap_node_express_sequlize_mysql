import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import LabeledTextarea from "../../Components/LabeledTextarea";
import { useApiHook, useImagePreview } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { imageUrl } from "../../../utility/imageUrl";

export default function BlogForm() {
  const { previewImage, handleImageChange } = useImagePreview();

  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { data: categories } = useApiHook("/admin/category");
  const { createData, updateData } = useApiHook("/admin/blog"); // custom hook

  // Single data (edit)
  const { data: blog, loading } = useApiHook(id ? `/admin/blog/${id}` : null); // custom hook

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // ==========================
  // Load single data in form
  // ==========================
  useEffect(() => {
    if (blog) {
      reset(blog);
    }
  }, [blog, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    // console.log(data);
    const slug = data?.title.toLowerCase().replace(/\s+/g, "-");
    data.slug = slug;

    let res;
    if (id) {
      res = await updateData(id, data, true); // true for image
    } else {
      res = await createData(data, true); // true for image
    }

    if (res) {
      navigator("/admin/blog");
    }
  };

  // ==========================
  // Loading
  // ==========================
  if (id && loading) {
    return <Loading />;
  }
  return (
    <>
      <HeaderSection
        title={`Blog ${id ? "Edit" : "Create"}`}
        backLink={"/admin/blog"}
      ></HeaderSection>

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-3/5 p-2">
              <LabeledInput
                name="title"
                required={true}
                register={register}
                errors={errors}
              />

              <LabeledTextarea name="description" register={register} />
            </div>
            <div className="w-full md:w-2/5 p-2">
              <div>
                <img
                  className="w-14 h-14 mb-2 object-cover rounded"
                  src={previewImage?.image || imageUrl(blog?.image)}
                  alt=""
                />

                <LabeledInput
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  required={!id}
                  register={register}
                  errors={errors}
                />
              </div>

              <div>
                <label htmlFor="category_id">Select Category</label>
                <select
                  {...register("category_id")}
                  className="select select-bordered w-full"
                  defaultValue=""
                  id="category_id"
                >
                  <option value="" disabled>
                    Select Category
                  </option>

                  {categories?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <LabeledTextarea name="short_description" register={register} />
            </div>
          </div>

          {/* Forgot + Button */}
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value={`${id ? "Update" : "Publish"}`} />
          </div>
        </form>
      </div>
    </>
  );
}
