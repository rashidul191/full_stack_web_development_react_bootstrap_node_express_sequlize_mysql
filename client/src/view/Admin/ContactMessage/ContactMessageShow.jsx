import HeaderSection from "../../Components/HeaderSection";
import { useParams } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";

export default function ContactMessageShow() {
  const { id } = useParams();
  const { data: message, loading } = useApiHook(`/admin/contact-message/${id}`);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection
        title={"Contact Message Details"}
        backLink={"/admin/contact-message"}
      />

      <div className="bg-white shadow rounded-lg p-6 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Name</h4>
            <p className="text-lg text-gray-800">{message?.name}</p>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Phone</h4>
            <p className="text-lg text-gray-800">{message?.phone || "-"}</p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Email</h4>
            <p className="text-lg text-gray-800">{message?.email || "-"}</p>
          </div>

          {/* Subject */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Subject</h4>
            <p className="text-lg text-gray-800">{message?.subject || "-"}</p>
          </div>

          {/* Date */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500">Date</h4>
            <p className="text-lg text-gray-800">
              {new Date(message?.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Message</h4>
          <div className="bg-gray-50 p-4 rounded border text-gray-700 leading-relaxed">
            {message?.message}
          </div>
        </div>
      </div>
    </>
  );
}
