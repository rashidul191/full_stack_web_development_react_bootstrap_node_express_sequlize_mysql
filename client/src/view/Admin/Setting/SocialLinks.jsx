import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../api/axios";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { getBusinessSettings } from "../../../utility/businessSetting";
import Loading from "../../Common/Loading";
import { createFormData } from "../../../utility/formDataHelper";

export default function SocialLinks() {
  const [loading, setLoading] = useState(true);
  const [businessSetting, setBusinessSetting] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset, // react-hook-form reset
  } = useForm();

  useEffect(() => {
    const fetchSettings = async () => {
      setLoading(true);
      const settings = await getBusinessSettings();
      setBusinessSetting(settings);
      reset(settings); // form field এ value সেট করা
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const onSubmit = async (data) => {
    const formData = createFormData(data); // helper function with image manage
    try {
      const res = await api.post(`/admin/business-setting`, formData);
      if (res?.data?.status === "success") {
        // setBusinessSetting(res?.data?.data);
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
      <h3 className="text-lg font-semibold">Social Links</h3>
      <div className="shadow-md p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="fb_link"
              value={businessSetting?.fb_link}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="youtube_link"
              value={businessSetting?.youtube_link}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="instagram_link"
              value={businessSetting?.instagram_link}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="twiter_link"
              value={businessSetting?.twiter_link}
              register={register}
              errors={errors}
            />
            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="linkedin_link"
              value={businessSetting?.linkedin_link}
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex items-center justify-end text-sm">
            <SubmitBtn className="" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
