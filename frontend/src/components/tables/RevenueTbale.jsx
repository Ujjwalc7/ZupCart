import { createColumnHelper } from "@tanstack/react-table";
import TableHOC from "../admin/TableHOC";
import { memo } from "react";

  const employees = [
    { id: 1, quantity: 12, discount: 400, amount: 4000, status: 'Processing'},
    { id: 2, quantity:2, discount: 200, amount: 5100, status: 'Processing'},
    { id: 3, quantity: 5, discount: 300, amount: 10000, status: 'Shipped'},
    { id: 4, quantity: 7, discount: 280, amount: 3200, status: 'Shipped'},
    { id: 5, quantity: 10, discount: 250, amount: 4500, status: 'Shipped'},
    { id: 6, quantity: 8, discount: 390, amount: 5000, status: 'Processing'},
    { id: 7, quantity: 6, discount: 400, amount: 6000, status: 'Processing'},
    { id: 8, quantity: 11, discount: 200, amount: 7600, status: 'Processing'},
    { id: 9, quantity: 16, discount: 350, amount: 6000, status: 'Shipped'},
    { id: 10, quantity: 14, discount: 500, amount: 8000, status: 'Processing'},
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "Id",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: "Quantity",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("discount", {
      header: "Discount",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
      header: "Discount",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
  ];

const RevenueTbale = () => {


  return <TableHOC title={{heading: 'Top Transaction', link: ''}} data={employees} columns={columns} />;
};
export default memo(RevenueTbale);
