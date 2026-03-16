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

export default function GeneralSetting() {
  const { previewImage, handleImageChange } = useImagePreview();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { settings, loading, updateSettings } = useAdminBusinessSettings();

  // set form default values
  useEffect(() => {
    if (settings && Object.keys(settings).length > 0) {
      reset(settings);
    }
  }, [settings, reset]);

  const onSubmit = async (data) => {
    const formData = createFormDataWithFile(data);
    try {
      await updateSettings(formData);
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection title={"General Setting"} />

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            {/* meta icon */}
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={previewImage.meta_icon || imageUrl(settings?.meta_icon)}
                alt=""
              />

              <LabeledInput
                type="file"
                name="meta_icon"
                onChange={handleImageChange}
                register={register}
                errors={errors}
              />
            </div>

            {/* logo */}
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={previewImage.logo || imageUrl(settings?.logo)}
                alt=""
              />

              <LabeledInput
                type="file"
                name="logo"
                onChange={handleImageChange}
                register={register}
                errors={errors}
              />
            </div>

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="company_name"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="phone"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="whatsapp"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              type="email"
              name="email"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="address"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              label="Office Time Date"
              name="time_date"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="copyright_text"
              register={register}
              errors={errors}
            />

            <LabeledTextarea
              className="w-full p-1"
              label={"Google Map Code"}
              name="google_map"
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
