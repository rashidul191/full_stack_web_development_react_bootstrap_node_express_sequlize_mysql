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
import RichTextEditor from "../../Components/RichTextEditor";

export default function AboutIndex() {
  const { previewImage, handleImageChange } = useImagePreview();

  const {
    control,
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
      toast.success("About section updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection title={"About Section"} />

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={
                  previewImage.about_left_image ||
                  imageUrl(settings?.about_left_image)
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
              register={register}
              errors={errors}
            />

            <RichTextEditor
              label="Content"
              name="about_content"
              control={control}
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
