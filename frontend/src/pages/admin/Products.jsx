import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import ProductTable from "../../components/tables/ProductTable";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Products = () => {
  return (
    <div className="dashboardContainer flex h-screen">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="overflow-y-auto grow hide-scrollbar pt-20 px-4">
        <Link
          to={"/admin/product/new"}
          className="absolute right-10 top-20 bg-red-300 rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] flex justify-center items-center hover:bg-red-400 active:bg-red-300 transition-all duration-100"
        >
          <AddIcon sx={{ color: "white" }} />
        </Link>
        <ProductTable />
      </main>
    </div>
  );
};
export default Products;
