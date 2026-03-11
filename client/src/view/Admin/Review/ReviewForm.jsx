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

export default function ReviewForm() {
  const { previewImage, handleImageChange } = useImagePreview();

  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { createData, updateData } = useApiHook("/admin/review"); // custom hook

  // Single data (edit)
  const { data: review, loading } = useApiHook(
    id ? `/admin/review/${id}` : null,
  ); // custom hook

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
    if (review) {
      reset(review);
    }
  }, [review, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    let res;
    if (id) {
      res = await updateData(id, data, true); // true for image
    } else {
      res = await createData(data, true); // true for image
    }

    if (res) {
      navigator("/admin/review");
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
        title={`Review ${id ? "Edit" : "Create"}`}
        backLink={"/admin/review"}
      ></HeaderSection>

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-wrap items-end">
            <div className="w-full p-1">
              <img
                className="w-14 h-14 mb-2 object-cover rounded"
                src={previewImage?.image || imageUrl(review?.image)}
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
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="name"
              required={true}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="designation"
              register={register}
              errors={errors}
            />

            <LabeledTextarea
              name="review_text"
              register={register}
              className="w-full p-1"
            />
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
