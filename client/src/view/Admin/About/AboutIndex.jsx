import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../../api/axios";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { imageUrl } from "../../../utility/imageUrl";
import { createFormDataWithFile } from "../../../utility/formDataHelper";
import HeaderSection from "../../Components/HeaderSection";
import { useImagePreview } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useBusinessSettings } from "../../../utility/businessSetting";
import LabeledTextarea from "../../Components/LabeledTextarea";
import RichTextEditor from "../../Components/RichTextEditor";

export default function AboutIndex() {
  const { previewImage, handleImageChange } = useImagePreview(); // image preview custom hook
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset, // react-hook-form reset
  } = useForm();
  const { businessSetting, loading } = useBusinessSettings();

  useEffect(() => {
    if (businessSetting) {
      reset(businessSetting);
    }
  }, [businessSetting, reset]);

  const onSubmit = async (data) => {
    const formData = createFormDataWithFile(data); // helper function with image manage
    try {
      const res = await api.post(`/admin/business-setting`, formData);
      if (res?.data?.status === "success") {
        // setbusiness(res?.data?.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection title={"Video Section Content"}></HeaderSection>
      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={
                  previewImage.about_left_image ||
                  imageUrl(businessSetting?.about_left_image)
                }
                alt=""
              />
              <LabeledInput
                type="file"
                label="Image"
                name="about_left_image"
                onChange={handleImageChange}
                register={register}
                errors={errors}
              />
            </div>

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Title"
              name="about_title"
              value={businessSetting?.about_title}
              register={register}
              errors={errors}
            />

            <RichTextEditor
              label="Content"
              name="about_content"
              control={control}
              value={businessSetting?.about_content}
              errors={errors}
            ></RichTextEditor>
          </div>
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
