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

export default function SliderForm() {
  const { previewImage, handleImageChange } = useImagePreview();

  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { createData, updateData } = useApiHook("/admin/slider"); // custom hook

  // Single data (edit)
  const { data: slider, loading } = useApiHook(
    id ? `/admin/slider/${id}` : null,
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
    if (slider) {
      reset(slider);
    }
  }, [slider, reset]);

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
      navigator("/admin/slider");
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
        title={`Slider ${id ? "Edit" : "Create"}`}
        backLink={"/admin/slider"}
      ></HeaderSection>

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-wrap">
            <div className="w-full p-1">
              {previewImage.image ? (
                <img className="w-12 h-12" src={previewImage.image} alt="" />
              ) : (
                ""
              )}

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
              name="title"
              required={true}
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />
            <LabeledInput
              name="sub_title"
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />

            <LabeledTextarea
              name="content"
              register={register}
              errors={errors}
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
