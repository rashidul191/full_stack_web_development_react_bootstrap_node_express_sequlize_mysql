import React, { useEffect, useState } from "react";
import { imageUrl } from "../../../utility/imageUrl";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Eye, PenBoxIcon, Trash2 } from "lucide-react";

export default function CategoryTable(props) {
  const data = props.categories;
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    const result = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.slug.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredData(result);
  }, [search, data]);

  const columns = [
    {
      name: "SL",
      width: "70px",
      cell: (row, index) => (currentPage - 1) * perPage + index + 1,
    },
    {
      name: "Image",
      selector: (row) => (
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
          <Link to={`edit/${row.id}`}>
            <Eye className="size-5 cursor-pointer transition-all duration-200 hover:scale-110"></Eye>
          </Link>
          <Link to={`edit/${row.id}`}>
            <PenBoxIcon className="size-5 cursor-pointer transition-all duration-200 hover:scale-110"></PenBoxIcon>
          </Link>

          <Trash2
            className="size-5 cursor-pointer transition-all duration-200 hover:scale-110"
            onClick={() => handleDelete(row.id)}
          ></Trash2>
        </div>
      ),
    },
  ];

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={perPage}
        onChangePage={(page) => setCurrentPage(page)}
        onChangeRowsPerPage={(newPerPage, page) => {
          setPerPage(newPerPage);
          setCurrentPage(page);
        }}
        fixedHeader
        fixedHeaderScrollHeight="550px"
        striped
        subHeader
        persistTableHead
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search category..."
            className="px-3 py-1 text-sm border rounded outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        customStyles={{
          headRow: {
            style: {
              minHeight: "35px",
              fontWeight: "600",
              fontSize: "14px",
              border: "1px solid #9b9b9b",
            },
          },

          headCells: {
            style: {
              borderRight: "1px solid #9b9b9b",
              "&:last-child": {
                borderRight: "none",
              },
            },
          },
        }}
        noDataComponent={
          <div className="w-full text-center py-3 bg-red-300 ">
            No matching records found
          </div>
        }
        // actions={<button>Export</button>}
      ></DataTable>
    </>
  );
}
