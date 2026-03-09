import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import toast from "../../../utility/toast";
import api from "../../../api/axios";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import LabeledTextarea from "../../Components/LabeledTextarea";
import { useImagePreview } from "../../../hook/customHook";

export default function BlogForm() {
  const { previewImage, handleImageChange } = useImagePreview(); // image preview custom hook
  const { auth } = useContext(AuthContext);
  const id = false;
  console.log(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await api.post(`/admin/blog`, data);
      if (res?.data?.status === "success") {
        console.log(res?.data?.data);
        toast.success(res?.data?.message);
        navigator("/admin/blog");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
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
                {previewImage.image ? (
                  <img className="w-12 h-12" src={previewImage.image} alt="" />
                ) : (
                  ""
                )}

                <LabeledInput
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  required={true}
                  register={register}
                  errors={errors}
                />
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
