import HeaderSection from "../../Components/HeaderSection";
import TableData from "../../../lib/TableData";
import { Eye, PenBoxIcon, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useApiHook } from "../../../hook/customHook";
import Loading from "../../layouts/Shared/Loading";

export default function ContactMessageIndex() {
  const {
    data: messages,
    loading,
    deleteData,
  } = useApiHook("/admin/contact-message");
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone ?? "--",
    },
    {
      name: "Email",
      selector: (row) => row.email ?? "--",
    },
    {
      name: "Subject",
      selector: (row) => row.subject ?? "--",
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
      <HeaderSection title={"Contact Message List"}></HeaderSection>

      <div className="shadow">
        <TableData
          columns={columns}
          data={messages?.sort((a, b) => b.id - a.id) || []}
          searchKeys={["name", "phone", "email"]}
        />
      </div>
    </>
  );
}
