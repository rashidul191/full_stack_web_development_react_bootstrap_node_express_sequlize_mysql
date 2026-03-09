import React, { useState } from "react";
import DataTable from "react-data-table-component";

export default function TableData({
  columns,
  data,
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
    <>
      {/* Custom dropdown pagiantion and search input */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <label className="font-semibold" htmlFor="paginationDropdown">
            Show
          </label>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setCurrentPage(1); // important
            }}
            className="border px-2 py-1 text-sm rounded mx-2"
            id="paginationDropdown"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>

          <span className="font-semibold">entries</span>
        </div>

        <div>
          <label className="font-semibold" htmlFor="search">
            Search:{" "}
          </label>
          <input
            type="text"
            placeholder="Search here..."
            className="px-3 py-1 text-sm border rounded"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        key={perPage} // force rerender
        columns={tableColumns}
        data={filteredData}
        pagination
        paginationPerPage={perPage}
        onChangePage={(page) => setCurrentPage(page)}
        fixedHeader
        fixedHeaderScrollHeight={fixedHeight}
        striped
        persistTableHead
        paginationRowsPerPageOptions={[perPage]}
        customStyles={customStyles}
        noDataComponent={
          <div className="w-full text-center py-3 bg-red-300">
            No matching records found
          </div>
        }
      />
    </>
  );
}
