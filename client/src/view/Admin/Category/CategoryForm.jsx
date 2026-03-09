import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import toast from "../../../utility/toast";
import api from "../../../api/axios";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import LabeledTextarea from "../../Components/LabeledTextarea";
import useImagePreview from "../../../utility/useImagePreview";
import { createFormDataWithFile } from "../../../utility/formDataHelper";
import { useNavigate, useParams } from "react-router-dom";
import { imageUrl } from "../../../utility/imageUrl";
import Loading from "../../Common/Loading";

export default function CategoryForm() {
  const { previewImage, handleImageChange } = useImagePreview(); // image preview custom hook
  const [loding, setLoading] = useState(true);
  const navigator = useNavigate();
  const { auth } = useContext(AuthContext);
  const { id } = useParams();

  const [category, setCategory] = useState(null);

  console.log(auth, id);

  const {
    register,
    // setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    // create slug
    const slug = data.name.toLowerCase().replace(/\s+/g, "-");
    data.slug = slug;
    const formData = createFormDataWithFile(data);
    try {
      let res;
      if (id) {
        res = await api.put(`/admin/category/${id}`, formData);
      } else {
        res = await api.post(`/admin/category`, formData);
      }
      if (res?.data?.status === "success") {
        toast.success(res?.data?.message);
        navigator("/admin/category");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  // Get Single Data
  useEffect(() => {
    if (!id) return setLoading(false);
    getSingleData(id);
  }, [id]);

  const getSingleData = async (id) => {
    try {
      const res = await api.get(`/admin/category/${id}`);
      if (res?.data?.status === "success") {
        setCategory(res.data.data);
        reset(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  if (loding) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection
        title={`Category ${id ? "Edit" : "Create"}`}
        backLink={"/admin/category"}
      ></HeaderSection>

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-wrap">
            <div className="w-full p-1">
              <img
                className="w-12 h-12"
                src={previewImage.image || imageUrl(category?.image)}
                alt=""
              />

              <LabeledInput
                type="file"
                name="image"
                onChange={handleImageChange}
                register={register}
                errors={errors}
              />
            </div>
            <LabeledInput
              name="name"
              className="w-full p-1"
              required={true}
              register={register}
              errors={errors}
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
