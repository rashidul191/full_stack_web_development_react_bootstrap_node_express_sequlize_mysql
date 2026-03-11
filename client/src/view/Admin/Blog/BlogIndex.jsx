import HeaderSection from "../../Components/HeaderSection";
import TableData from "../../../lib/TableData";
import { imageUrl } from "../../../utility/imageUrl";
import { Eye, PenBoxIcon, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";

export default function BlogIndex() {
  const { data: blogs, loading, deleteData } = useApiHook("/admin/blog");
  const columns = [
    {
      name: "Image",
      cell: (row) => (
        <img className="w-10 h-10" src={imageUrl(row.image)} alt="" />
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Category",
      selector: (row) => row.category?.name,
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
            onClick={() => deleteData(row.id)}
          />
        </div>
      ),
    },
  ];

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HeaderSection
        title={"Blog List"}
        createLink={"/admin/blog/create"}
      ></HeaderSection>

      <div className="shadow">
        <TableData
          columns={columns}
          data={blogs || []}
          searchKeys={["name", "slug"]}
        />
      </div>
    </>
  );
}
