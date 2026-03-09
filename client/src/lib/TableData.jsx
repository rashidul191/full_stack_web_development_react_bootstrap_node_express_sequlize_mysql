import React, { useState } from "react";
import DataTable from "react-data-table-component";

export default function TableData({
  columns,
  data,
  search = true,
  searchKeys = [],
  fixedHeight = "550px",
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  const filteredData = data.filter((item) => {
    if (!searchText) return true;

    return searchKeys.some((key) =>
      item[key]?.toLowerCase().includes(searchText.toLowerCase()),
    );
  });

  // Inject Serial Number Column
  const tableColumns = [
    {
      name: "SL",
      width: "70px",
      cell: (row, index) => (currentPage - 1) * perPage + index + 1,
    },
    ...columns,
  ];

  const customStyles = {
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
  };

  return (
    <DataTable
      columns={tableColumns}
      data={filteredData}
      pagination
      paginationPerPage={perPage}
      onChangePage={(page) => setCurrentPage(page)}
      onChangeRowsPerPage={(newPerPage, page) => {
        setPerPage(newPerPage);
        setCurrentPage(page);
      }}
      fixedHeader
      fixedHeaderScrollHeight={fixedHeight}
      striped
      persistTableHead
      subHeader={search}
      subHeaderComponent={
        search && (
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 text-sm border rounded outline-none focus:ring-2 focus:ring-blue-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        )
      }
      customStyles={customStyles}
      noDataComponent={
        <div className="w-full text-center py-3 bg-red-300">
          No matching records found
        </div>
      }
    />
  );
}
