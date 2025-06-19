import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useEffect, useState } from "react";

const dashboardLi = [
  {
    icon: <DashboardIcon sx={{ width: "13px" }} />,
    text: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    icon: <InventoryIcon sx={{ width: "13px" }} />,
    text: "Product",
    link: "/admin/products",
  },
  {
    icon: <GroupsIcon sx={{ width: "13px" }} />,
    text: "Customer",
    link: "/admin/customers",
  },
  {
    icon: <ReceiptLongIcon sx={{ width: "13px" }} />,
    text: "Transaction",
    link: "/admin/transactions",
  },
];
const cahtLi = [
  { icon: <BarChartIcon sx={{ width: "13px" }} />, text: "Bar" },
  { icon: <DonutSmallIcon sx={{ width: "13px" }} />, text: "Pie" },
  { icon: <TimelineIcon sx={{ width: "13px" }} />, text: "Line" },
];

const AdminSidebar = () => {
  const [open, setOpen] = useState(true)
  const location = useLocation();
  
  useEffect(()=> {
  
  }, [])

  return (
    <div className={`min-w-[200px] bg-white ${open ? '' : 'hidden'} max-md:fixed top-0 left-0 z-10 max-md:h-screen`}>
      <h2 className="p-2 mb-5">Logo</h2>
      <div className="mb-5">
        <h2 className="text-gray-400 px-2 text-[13px]">DASHBOARD</h2>
        <ul className="p-2 space-y-2">
          {dashboardLi.map((li) => (
            <li
              key={li.text}
              className={`${
                location.pathname.includes(li.text.toLowerCase())
                  ? "bg-gray-100 text-blue-500"
                  : ""
              } p-1 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-1`}
            >
              {li.icon}
              <Link to={li.link}>{li.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-5">
        <h2 className="text-gray-400 px-2 text-[13px]">CHARTS</h2>
        <ul className="p-2 space-y-2">
          {cahtLi.map((li) => (
            <li
              key={li.text}
              className="p-1 hover:bg-gray-100  rounded cursor-pointer flex items-center gap-1"
            >
              {li.icon}
              <Link to={`/admin/chart/${li.text.toLowerCase()}`}>{li.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AdminSidebar;
