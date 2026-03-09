import { ArrowLeft } from "lucide-react";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HeaderSection(props) {
  const { title, createLink, backLink } = props;
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{title ?? ""}</h3>

      {createLink ? (
        <Link
          to={createLink}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-green-600 border border-green-600 rounded hover:bg-green-700 hover:text-white transition"
        >
          <FiPlus />
          Create
        </Link>
      ) : (
        ""
      )}

      {backLink ? (
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-700 hover:text-white transition"
        >
          <ArrowLeft></ArrowLeft>
          Back
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
