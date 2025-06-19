import { createColumnHelper } from "@tanstack/react-table";
import TableHOC from "../admin/TableHOC";
import { memo } from "react";

const data = [
  {
    id: 1,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Spider Man",
    gender: "female",
    email: "aunty@gmail.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 2,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Doe",
    gender: "male",
    email: "john.doe@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 3,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jane Smith",
    gender: "female",
    email: "jane.smith@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 4,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Robert Brown",
    gender: "male",
    email: "robert.brown@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 5,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Emily Davis",
    gender: "female",
    email: "emily.davis@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 6,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Michael Wilson",
    gender: "male",
    email: "michael.wilson@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 7,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Olivia Johnson",
    gender: "female",
    email: "olivia.johnson@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 8,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "William Martinez",
    gender: "male",
    email: "william.martinez@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 9,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Sophia Lee",
    gender: "female",
    email: "sophia.lee@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 10,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "James Anderson",
    gender: "male",
    email: "james.anderson@example.com",
    role: "user",
    action: "Delete",
  },
  {
    id: 11,
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Chloe Walker",
    gender: "female",
    email: "chloe.walker@example.com",
    role: "user",
    action: "Delete",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("avatar", {
    header: "Avatar",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("role", {
    header: "Role",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => info.getValue(),
  }),
];

const CustomerTable = () => {
  return (
    <TableHOC
      title={{ heading: "CUSTOMERS", link: "customer" }}
      data={data}
      columns={columns}
    />
  );
};
export default memo(CustomerTable);
