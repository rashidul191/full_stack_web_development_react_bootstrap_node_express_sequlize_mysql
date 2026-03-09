import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../../api/axios";
import toast from "../../../utility/toast";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { getBusinessSettings } from "../../../utility/businessSetting";
import { imageUrl } from "../../../utility/imageUrl";
import Loading from "../../Common/Loading";
import { createFormDataWithFile } from "../../../utility/formDataHelper";
import HeaderSection from "../../Components/HeaderSection";
import { useImagePreview } from "../../../hook/customHook";

export default function GeneralSetting() {
  const [loading, setLoading] = useState(true);
  const { previewImage, handleImageChange } = useImagePreview(); // image preview custom hook
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
    const formData = createFormDataWithFile(data); // helper function with image manage
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
      <HeaderSection title={"General Setting"}></HeaderSection>
      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="w-full md:flex flex-wrap items-end">
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={
                  previewImage.meta_icon || imageUrl(businessSetting?.meta_icon)
                }
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
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-12 h-12"
                src={previewImage.logo || imageUrl(businessSetting?.logo)}
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
              value={businessSetting?.company_name}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="phone"
              value={businessSetting?.phone}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="whatsapp"
              value={businessSetting?.whatsapp}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              type="email"
              name="email"
              value={businessSetting?.email}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="address"
              value={businessSetting?.address}
              register={register}
              errors={errors}
            />

            <LabeledInput
              className="w-full md:w-1/2 p-1"
              name="copyright_text"
              value={businessSetting?.copyright_text}
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
