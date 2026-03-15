import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { useApiHook, useImagePreview } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { imageUrl } from "../../../utility/imageUrl";
import { PriceStatus } from "../../../enum/PriceStatus";
import LabeledSelected from "../../Components/LabeledSelected";
import { YesNoStatus } from "../../../enum/YesNoStatus";

export default function PriceForm() {
  const { previewImage, handleImageChange } = useImagePreview();
  const navigator = useNavigate();
  const { id } = useParams();

  // CRUD API
  const { createData, updateData } = useApiHook("/admin/price");

  // single data
  const { data: price, loading } = useApiHook(id ? `/admin/price/${id}` : null);

  const {
    control,
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      points: [{ value: "" }],
    },
  });

  // dynamic field array
  const { fields, append, remove } = useFieldArray({
    control,
    name: "points",
  });

  // ==========================
  // Edit data load
  // ==========================
  useEffect(() => {
    if (price) {
      reset({
        ...price,
        points: price.points?.map((p) => ({
          value: p,
        })) || [{ value: "" }],
      });
    }
  }, [price, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    // convert object → string array
    data.points = data.points
      ?.map((p) => p.value)
      .filter((p) => p && p.trim() !== "");

    let res;

    if (id) {
      res = await updateData(id, data, true);
    } else {
      res = await createData(data, true);
    }

    if (res) {
      navigator("/admin/price");
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
        title={`Price ${id ? "Edit" : "Create"}`}
        backLink={"/admin/price"}
      />

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* top button */}
          <div className="flex justify-end mb-3">
            <SubmitBtn value={`${id ? "Update" : "Publish"}`} />
          </div>

          <div className="w-full flex flex-wrap items-end">
            {/* Image */}
            <div className="w-full md:w-1/2 p-1">
              <img
                className="w-16 h-16 mb-2 object-cover rounded"
                src={previewImage?.image || imageUrl(price?.image)}
                alt=""
              />

              <LabeledInput
                label="Image (100x100px)"
                type="file"
                name="image"
                onChange={handleImageChange}            
                register={register}
                errors={errors}
              />
            </div>

            {/* price */}
            <LabeledInput
              type="number"
              label="Price"
              name="price"
              required
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />

            {/* title */}
            <LabeledInput
              label="Title"
              name="title"
              required
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />

            {/* sub title */}
            <LabeledInput
              label="Sub Title"
              name="sub_title"
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
            />

            {/* status */}
            <LabeledSelected
              label="Status"
              name="status"
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
              required
            >
              <option value="">Select Status</option>

              {Object.entries(PriceStatus).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </LabeledSelected>

            <LabeledSelected
              name="is_popular"
              register={register}
              errors={errors}
              className="w-full md:w-1/2 p-1"
              required
            >
              <option value="">Select Popular</option>

              {Object.entries(YesNoStatus).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </LabeledSelected>

            {/* Points */}
            <div className="w-full p-1">
              <label className="font-semibold">Points</label>

              {fields.map((item, index) => (
                <div key={item.id} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    {...register(`points.${index}.value`)}
                    placeholder="Enter feature point"
                    className="border p-2 w-full rounded"
                  />

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-500 text-white px-3 rounded"
                  >
                    X
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => append({ value: "" })}
                className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
              >
                Add Point
              </button>
            </div>
          </div>

          {/* bottom button */}
          <div className="flex justify-end mt-4">
            <SubmitBtn value={`${id ? "Update" : "Publish"}`} />
          </div>
        </form>
      </div>
    </>
  );
}
