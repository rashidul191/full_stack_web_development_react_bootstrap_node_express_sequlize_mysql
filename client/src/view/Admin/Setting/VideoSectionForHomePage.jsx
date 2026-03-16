import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { imageUrl } from "../../../utility/imageUrl";
import { createFormDataWithFile } from "../../../utility/formDataHelper";
import HeaderSection from "../../Components/HeaderSection";
import { useImagePreview } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useAdminBusinessSettings } from "../../../utility/businessSetting";
import LabeledTextarea from "../../Components/LabeledTextarea";

export default function VideoSectionForHomePage() {
  const { previewImage, handleImageChange } = useImagePreview();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { settings, loading, updateSettings } = useAdminBusinessSettings();

  useEffect(() => {
    if (settings && Object.keys(settings).length > 0) {
      reset(settings);
    }
  }, [settings, reset]);

  const onSubmit = async (data) => {
    const formData = createFormDataWithFile(data);

    try {
      await updateSettings(formData);
      toast.success("Video section updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection title={"Video Section Content"} />

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">

            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={
                  previewImage.video_thumbnal ||
                  imageUrl(settings?.video_thumbnal)
                }
                alt=""
              />

              <LabeledInput
                type="file"
                name="video_thumbnal"
                onChange={handleImageChange}
                register={register}
                errors={errors}
              />
            </div>

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="video_youtube_link"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full p-1"
              label="Title"
              name="video_title"
              register={register}
              errors={errors}
            />

            <LabeledTextarea
              className="w-full p-1"
              label={"Content"}
              name="video_content"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 1"
              name="video_point_1"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 2"
              name="video_point_2"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 3"
              name="video_point_3"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 4"
              name="video_point_4"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Point 5"
              name="video_point_5"
              register={register}
              errors={errors}
            />

          </div>

          <div className="flex items-center justify-end text-sm">
            <SubmitBtn value="Submit" />
          </div>

        </form>
      </div>
    </>
  );
}