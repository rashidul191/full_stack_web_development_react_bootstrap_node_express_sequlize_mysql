import HeaderSection from "../../Components/HeaderSection";
import TableData from "../../../lib/TableData";
import { Eye, PenBoxIcon, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";

export default function FAQIndex() {
  const { data: faqs, loading, deleteData } = useApiHook("/admin/faq");

  const columns = [
    {
      name: "Question",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "Answer",
      selector: (row) =>
        row.answer?.length > 50 ? row.answer.slice(0, 50) + "..." : row.answer,
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
        title={"FAQ List"}
        createLink={"/admin/faq/create"}
      ></HeaderSection>

      <div className="shadow">
        <TableData
          columns={columns}
          data={faqs?.sort((a, b) => b.id - a.id) || []}
          searchKeys={["question"]}
        />
      </div>
    </>
  );
}
