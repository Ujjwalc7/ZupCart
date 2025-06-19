import AdminSidebar from "../../components/admin/AdminSidebar";
import DoughnutChart from "../../components/charts/DoughnutChart";
import PieChart from "../../components/charts/PieChart";
import VerticalBarchart from "../../components/charts/VerticalBarchart";

const Pie = () => {
  return (
    <div className="dashboardContainer flex h-screen bg-gray-200 gap-2">
      {/* sidebar */}
      <AdminSidebar />

      {/* main */}
      <main className="bg-white overflow-y-auto grow hide-scrollbar py-2 px-4">
        <h1 className="text-center text-2xl font-semibold">Pie & Doughnut Charts</h1>
        <section className="w-[400px] m-auto flex flex-col">
          <div className="mt-10">
            <PieChart
              data1={[12, 10, 34]}
              labels={["Processing", "Shipped", "Delivered"]}
              backgroundColor={[
                "hsl(110, 80%, 80%)",
                "hsl(110, 80%, 50%)",
                "hsl(110, 40%, 50%)",
                "hsl(296, 54%, 43%)",
              ]}
              offset={[0, 0, 50]}
            />
            <h2 className="text-center my-3 text-xl lg:text-2xl">
              ORDER FULLFILLMENT RATIO
            </h2>
          </div>
          <div className="mt-10">
            <DoughnutChart
              data={[12, 10, 34, 40]}
              labels={["Laptop", "Shoes", "Cameras", "jeans"]}
              backgroundColor={[
                "hsl(110, 80%, 80%)",
                "hsl(110, 80%, 50%)",
                "hsl(296, 54%, 43%)",
                "hsl(321, 81%, 58%)",
              ]}
              legends={false}
              cutout={90}
              offset={[10, 10, 60, 10]}
            />
            <h2 className="text-center my-3 text-xl lg:text-2xl">
              PRODUCT CATEGORY RATIO
            </h2>
          </div>
          <div className="mt-10">
            <DoughnutChart
              data={[12, 10]}
              labels={["In-Stock", "Out-of-Stock"]}
              backgroundColor={[
                "hsl(296, 54%, 43%)",
                "hsl(321, 81%, 58%)",
              ]}
              legends={false}
              cutout={90}
              offset={[0, 60]}
            />
            <h2 className="text-center my-3 text-xl lg:text-2xl">
              STOCK AVILABILITY
            </h2>
          </div>\<div className="mt-10">
            <DoughnutChart
              data={[12, 10, 20, 25, 30]}
              labels={["Marketing Cost", "Discount", "Burnt", "Production Cost", "Net Margin"]}
              backgroundColor={[
                "hsl(296, 54%, 43%)",
                "hsl(19, 81%, 58%)",
                "hsl(69, 81%, 40%)",
                "hsl(300, 80%, 40%)",
                "HSL(1, 81%, 58%)"
              ]}
              legends={false}
              cutout={110}
              offset={[30, 0, 0, 0, 30]}
            />
            <h2 className="text-center my-3 text-xl lg:text-2xl">
              REVENUE DISTRIBUTION
            </h2>
          </div>
          <div className="mt-10">
            <PieChart
              data1={[10, 50, 24]}
              labels={["Teenager below(20)", "Adult (28-40)", "Older (above 40)"]}
              backgroundColor={[
                "hsl(110, 80%, 80%)",
                "hsl(110, 80%, 50%)",
                "hsl(296, 54%, 43%)",
              ]}
              offset={[50, 0, 0]}
            />
            <h2 className="text-center my-3 text-xl lg:text-2xl">
              USER AGE GROUP
            </h2>
          </div>
          <div className="mt-10">
            <DoughnutChart
              data={[1, 63]}
              labels={["Admin", "Customer"]}
              backgroundColor={[
                "hsl(296, 54%, 43%)",
                "hsl(321, 81%, 58%)",
              ]}
              legends={true}
              cutout={90}
              offset={[10, 50]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
export default Pie;
