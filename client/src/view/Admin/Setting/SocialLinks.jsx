import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { createFormDataWithFile } from "../../../utility/formDataHelper";
import HeaderSection from "../../Components/HeaderSection";
import Loading from "../../layouts/Shared/Loading";
import { useAdminBusinessSettings } from "../../../utility/businessSetting";

export default function SocialLinks() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { settings, loading, updateSettings } = useAdminBusinessSettings();

  // settings load হলে form reset
  useEffect(() => {
    if (settings && Object.keys(settings).length > 0) {
      reset(settings);
    }
  }, [settings, reset]);

  const onSubmit = async (data) => {
    const formData = createFormDataWithFile(data);

    try {
      await updateSettings(formData);
      toast.success("Social links updated successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection title={"Social Links"} />

      <div className="shadow-md p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="fb_link"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="youtube_link"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="instagram_link"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="twitter_link"
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="linkedin_link"
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
