import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { memo, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const TableHOC = ({ title, data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 7 });

  const table = useReactTable({
    columns,
    data,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), //enables pagination
    getSortedRowModel: getSortedRowModel(), //enables sorting
  });

  const arr = [];

  for (let i = 0; i < table.getPageCount(); i++) {
    arr.push(i);
  }

  return (
    <div className="flex w-full flex-col items-center gap-6 pt-6">
      <h1 className="w-full font-semibold md:text-lg">{title.heading}</h1>
      <div className="w-full max-md:w-screen max-md:overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  if (header.id === "action") {
                    return (
                      <th key={header.id} className="">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  } else if (header.id === "photo" || header.id === "avatar") {
                    return (
                      <th key={header.id} className="">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  } else {
                    return (
                      <th
                        key={header.id}
                        className="cursor-pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}{" "}
                        {{
                          asc: <ArrowDropUpIcon />,
                          desc: <ArrowDropDownIcon />,
                        }[header.column.getIsSorted()] ?? null}
                      </th>
                    );
                  }
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.id === "action") {
                    return (
                      <td key={cell.id}>
                        {cell.getValue() === "Manage" ? (
                          <Link
                            to={`/admin/${title.link}/${cell.id}`}
                            className="text-violet-600 p-1 bg-violet-200 rounded cursor-pointer hover:bg-violet-300 text-sm active:bg-violet-200"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </Link>
                        ) : (
                          <button className="">
                            <DeleteIcon
                              sx={{ color: "red" }}
                              className="hover:scale-90 transition-all duration-100 cursor-pointer active:scale-100"
                            />
                          </button>
                        )}
                      </td>
                    );
                  }
                  if (cell.column.id === "photo") {
                    return (
                      <td key={cell.id} className="p-2 flex justify-center">
                        <img
                          className="w-[70px] h-[50px]"
                          src={cell.getValue()}
                          alt="photo"
                        />
                      </td>
                    );
                  }
                  if (cell.column.id === "avatar") {
                    return (
                      <td key={cell.id} className="p-2 flex justify-center">
                        <img
                          className="w-[50px] h-[50px] rounded-full object-cover object-center"
                          src={cell.getValue()}
                          alt="avatar"
                        />
                      </td>
                    );
                  }
                  if (cell.column.id === "status") {
                    return (
                      <td
                        key={cell.id}
                        className={`p-2 ${
                          cell.getValue() === "Processing"
                            ? "text-red-500"
                            : cell.getValue() === "Shipped"
                            ? "text-green-500"
                            : "text-violet-500"
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  }

                  return (
                    <td key={cell.id} className="p-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination control */}
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowCircleLeftIcon
            sx={{ cursor: "pointer", width: "30px", height: "30px" }}
            className="hover:scale-110 transition-all duration-100"
          />
        </button>
        <span className="mx-2">
          <select
            className="border ml-2 rounded"
            value={table.getState().pagination.pageIndex}
            onChange={(e) => table.setPageIndex(e.target.value)}
          >
            {arr.map((opt) => (
              <option value={opt} key={opt}>
                {opt + 1}
              </option>
            ))}
          </select>
          {" of "}
          <strong>{table.getPageCount()}</strong>
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowCircleRightIcon
            sx={{ cursor: "pointer", width: "30px", height: "30px" }}
            className="hover:scale-110 transition-all duration-100"
          />
        </button>
      </div>
    </div>
  );
};
export default memo(TableHOC);
