import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import HeaderSection from "../../Components/HeaderSection";
import { AuthContext } from "../../../context/AuthContext";
import LabeledInput from "../../Components/LabeledInput";
import SubmitBtn from "../../Components/SubmitBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";
import LabeledTextarea from "../../Components/LabeledTextarea";

export default function FAQForm() {

  const navigator = useNavigate();
  // const { auth } = useContext(AuthContext);
  const { id } = useParams();

  // CRUD
  const { createData, updateData } = useApiHook("/admin/faq");

  // Single data (edit)
  const { data: faq, loading } = useApiHook(id ? `/admin/faq/${id}` : null);

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
    if (faq) {
      reset(faq);
    }
  }, [faq, reset]);

  // ==========================
  // Submit
  // ==========================
  const onSubmit = async (data) => {
    let res;
    if (id) {
      res = await updateData(id, data);
    } else {
      res = await createData(data);
    }

    if (res) {
      navigator("/admin/faq");
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
        title={`FAQ ${id ? "Edit" : "Create"}`}
        backLink={"/admin/faq"}
      />

      <div className="shadow-lg p-4 rounded mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-wrap">
            <LabeledInput
              name="question"
              className="w-full p-1"
              register={register}
              required={true}
              errors={errors}
            />

            <LabeledTextarea
              label={"Answer"}
              name="answer"
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
