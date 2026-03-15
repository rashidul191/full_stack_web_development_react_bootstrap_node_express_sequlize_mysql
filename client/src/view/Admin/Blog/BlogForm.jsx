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
import RichTextEditor from "../../Components/RichTextEditor";
import slugify from "slugify";

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
    control,
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
    data.slug = slugify(data?.title, {
      lower: true,
      strict: true,
    });

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
            <div className="w-full md:w-2/3 p-2">
              <LabeledInput
                name="title"
                required={true}
                register={register}
                errors={errors}
              />
              {/* <LabeledTextarea name="description" register={register} /> */}
              <RichTextEditor
                label="Description"
                name="description"
                control={control}
                errors={errors}
              ></RichTextEditor>
            </div>
            <div className="w-full md:w-1/3 p-2">
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

              <LabeledSelected
                label="Select Category"
                name="category_id"
                register={register}
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </LabeledSelected>

              <LabeledTextarea
                name="short_description"
                register={register}
                errors={errors}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value={`${id ? "Update" : "Publish"}`} />
          </div>
        </form>
      </div>
    </>
  );
}
