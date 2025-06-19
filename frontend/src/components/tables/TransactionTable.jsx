import { createColumnHelper } from "@tanstack/react-table";
import TableHOC from "../admin/TableHOC";

 const data = [
  {
    id: 1,
    user: "Cristiano Ronaldo",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 2,
    user: "Wayne Rooney",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 3,
    user: "Kalu Vai",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 4,
    user: "Frank Ribbery",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 5,
    user: "Jude Belli",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 6,
    user: "Lionel Messi",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 7,
    user: "kyle jenner",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 8,
    user: "Dominic",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Shipped",
    action: "Manage"
  },
  {
    id: 9,
    user: "paul Walker",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 10,
    user: "Jaden Smith",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "Manage"
  },
  {
    id: 11,
    user: "Chloe Walker",
    amount: 5400,
    discount: 400,
    quantity: 3,
    status: "Delivered",
    action: "Manage"
  }
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("user", {
    header: "User",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("discount", {
    header: "Discount",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("quantity", {
    header: "Quantity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => info.getValue(),
  }),
];

const TransactionTable = () => {
  return (
    <TableHOC title={{heading: 'Transaction', link: 'transaction'}} data={data} columns={columns} />
  )
}
export default TransactionTable