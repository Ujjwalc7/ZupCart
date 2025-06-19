import { createColumnHelper } from "@tanstack/react-table";
import TableHOC from "../admin/TableHOC";
import { memo, useState } from "react";

const data = [
  {
    id: 1,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "Out-of-Stock",
    action: "Manage",
  },
  {
    id: 2,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 10,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 3,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 4,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 5,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 6,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 7,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 8,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 9,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 10,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
  {
    id: 11,
    photo:
      "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Laptop",
    price: 12,
    stock: "In-Stock",
    action: "Manage",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("photo", {
    header: "Photo",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: (info) => info.getValue(),
  }),
];

const ProductTable = () => {
  return (
    <TableHOC
      title={{ heading: "PRODUCTS", link: "product" }}
      data={data}
      columns={columns}
    />
  );
};
export default memo(ProductTable);
