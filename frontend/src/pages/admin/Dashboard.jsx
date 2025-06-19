import AdminSidebar from "../../components/admin/AdminSidebar";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import Widget from "../../components/admin/Widget";
import InventoryCategory from "../../components/admin/InventoryCategory";
import VerticalBarchart from "../../components/charts/VerticalBarchart";
import WcIcon from "@mui/icons-material/Wc";
import DoughnutChart from "../../components/charts/DoughnutChart";
import RevenueTbale from "../../components/tables/RevenueTbale";
import { useState } from "react";

const url = "https://cdn-icons-png.flaticon.com/512/219/219983.png";



const Dashboard = () => {
  const widgetInfo = [
    {
      heading: "Revenue",
      amount: "340000",
      percentage: 40,
      color: "rgb(250, 197, 62)",
    },
    {
      heading: "Users",
      count: "400",
      percentage: -14,
      color: "rgb(62, 159, 250)",
    },
    {
      heading: "Transactions",
      count: "23000",
      percentage: 80,
      color: "rgb(62, 250, 225)",
    },
    {
      heading: "Products",
      count: "1000",
      percentage: 30,
      color: "rgb(241, 62, 247)",
    },
  ];
  const inventory = [
    { category: "Laptops", percentage: 40 },
    { category: "Shoes", percentage: 10 },
    { category: "cameras", percentage: 30 },
    { category: "Mobiles", percentage: 70 },
  ];




  return (
    <div className="dashboardContainer flex h-screen">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="overflow-y-auto bg-gray-100 flex-1 hide-scrollbar pl-4 pr-2">
        <section className="searchBar mb-4 border-b border-gray-300">
          <div className="w-full h-[50px] flex items-center ">
            <form className="flex-1 flex items-center gap-2">
              <button type="submit">
              <SearchIcon sx={{ width: "18px", cursor: "pointer" }} />
              </button>
              <input
                type="text"
                name=""
                id=""
                className="w-full h-full  outline-none"
                placeholder="Search for data, users, docs"
              />
            </form>

            <div className="flex items-center gap-2">
              <NotificationsIcon sx={{ width: "18px", cursor: "pointer" }} />
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img
                  className="cursor-pointer object-center object-cover w-full h-full"
                  src={url}
                  alt="userImage"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="widgetSection mb-4">
          <div className="grid lg:grid-cols-4 grid-cols-2">
            {widgetInfo.map((info) => (
              <Widget key={info.heading} info={info} />
            ))}
          </div>
        </section>
        <section className="chartSection flex gap-2 mb-4">
          <div className="revenueChart flex-1 flex-col justify-center items-center bg-white rounded-md p-2">
            <h2 className="text-center mb-3 text-gray-400">
              Revenue & Transaction
            </h2>
            <VerticalBarchart
              title1={"Revenue"}
              title2={"Transaction"}
              data1={[1, 2, 6, 7, 8, 9, 13]}
              data2={[23, 6, 67, 2, 7, 78, 18]}
              bgColor1="rgb(66, 206, 245)"
              bgcolor2="rgb(66, 102, 245)"
            />
          </div>
          <div className="dashboardCategories bg-white flex flex-col gap-4 justify-center items-center p-2 rounded-md">
            <h2 className="text-center text-gray-400">Inventory</h2>
            {inventory.map((item) => (
              <InventoryCategory key={item.category} info={item} />
            ))}
          </div>
        </section>
        <section className="chartSection flex gap-2">
          <div className="dashboardCategories bg-white flex flex-col gap-4 justify-center items-center p-2 rounded-md">
            <h2 className="text-center text-gray-400">Gender ratio</h2>
            <div className="w-[200px] relative h-[200px]">
              <DoughnutChart
                labels={["Male", "Female"]}
                data={[12, 19]}
                backgroundColor={[
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                ]}
                cutout={65}
              />
              <WcIcon sx={{ position: "absolute", top: "35%", right: "45%" }} />
            </div>
          </div>
          <div className="revenueChart flex-1 flex-col justify-center items-center bg-white rounded-md p-2">
            <RevenueTbale/>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Dashboard;
