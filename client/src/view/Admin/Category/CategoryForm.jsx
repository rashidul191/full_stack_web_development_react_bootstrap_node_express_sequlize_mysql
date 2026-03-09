import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { useNavigate, useParams } from "react-router-dom";
import { imageUrl } from "../../../utility/imageUrl";
import Loading from "../../Common/Loading";
import { useApiHook, useImagePreview } from "../../../hook/customHook";

export default function CategoryForm() {
  const { previewImage, handleImageChange } = useImagePreview();

  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { createData, updateData } = useApiHook("/admin/category");

  // Single data (edit)
  const { data: category, loading } = useApiHook(
    id ? `/admin/category/${id}` : null,
  );

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
    if (category) {
      reset(category);
    }
  }, [category, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    const slug = data.name.toLowerCase().replace(/\s+/g, "-");
    data.slug = slug;
    let res;
    if (id) {
      res = await updateData(id, data, true);
    } else {
      res = await createData(data, true);
    }

    if (res) {
      navigator("/admin/category");
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
        title={`Category ${id ? "Edit" : "Create"}`}
        backLink={"/admin/category"}
      />

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-wrap">
            {/* IMAGE */}
            <div className="w-full p-1">
              <img
                className="w-14 h-14 mb-2 object-cover rounded"
                src={previewImage?.image || imageUrl(category?.image)}
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

            {/* NAME */}
            <LabeledInput
              name="name"
              className="w-full p-1"
              required={true}
              register={register}
              errors={errors}
            />
          </div>

          <div className="flex justify-end mt-4">
            <SubmitBtn value={id ? "Update" : "Publish"} />
          </div>
        </form>
      </div>
    </>
  );
}
