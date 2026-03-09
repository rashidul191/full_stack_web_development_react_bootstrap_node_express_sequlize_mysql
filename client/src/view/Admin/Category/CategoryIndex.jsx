import React, { useEffect, useState } from "react";
import toast from "../../../utility/toast";
import api from "../../../api/axios";
import HeaderSection from "../../Components/HeaderSection";
import Loading from "../../Common/Loading";
import TableData from "../../../lib/TableData";
import { imageUrl } from "../../../utility/imageUrl";
import { Eye, PenBoxIcon, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryIndex() {
  const [loding, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const res = await api.get(`/admin/category`);

      if (res?.data?.status === "success") {
        setCategories(res?.data?.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  };

  const columns = [
    {
      name: "Image",
      cell: (row) => (
        <img className="w-10 h-10" src={imageUrl(row.image)} alt="" />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Action",
      center: true,
      cell: (row) => (
        <div className="flex gap-2">
          {/* <Link to={`show/${row.id}`}>
            <Eye className="size-5 cursor-pointer transition-all duration-200 hover:scale-110" />
          </Link> */}
          <Link to={`edit/${row.id}`}>
            <PenBoxIcon className="size-5 cursor-pointer transition-all duration-200 hover:scale-110" />
          </Link>

          <Trash2
            className="size-5 cursor-pointer transition-all duration-200 hover:scale-110"
            onClick={() => handleDelete(row.id)}
          />
        </div>
      ),
    },
  ];

  if (loding) {
    return <Loading />;
  }
  return (
    <>
      <HeaderSection
        title={"Category List"}
        createLink={"/admin/category/create"}
      ></HeaderSection>

      <div>
        <TableData
          columns={columns}
          data={categories}
          searchKeys={["name", "slug"]}
        />
      </div>
    </>
  );
}
