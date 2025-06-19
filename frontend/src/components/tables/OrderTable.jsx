import { createColumnHelper } from "@tanstack/react-table";
import TableHOC from "../../components/admin/TableHOC";

const data = [
  {
    id: 216754628,
    quantity: 1,
    discount: 0,
    amount: 1500,
    status: "Processing",
    action: "View",
  },
  {
    id: 986934767,
    quantity: 1,
    discount: 0,
    amount: 1500,
    status: "Processing",
    action: "View",
  },
  {
    id: 53776578,
    quantity: 3,
    discount: 0,
    amount: 500,
    status: "Processing",
    action: "View",
  },
  {
    id: 69785,
    quantity: 11,
    discount: 100,
    amount: 2500,
    status: "Processing",
    action: "View",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("quantity", {
    header: "Quantity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
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
const OrderTable = () => {
  return (
    <TableHOC
      title={{ heading: "MY ORDERS", link: "order" }}
      data={data}
      columns={columns}
    />
  );
};
export default OrderTable;
