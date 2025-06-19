import AdminSidebar from "../../components/admin/AdminSidebar";
import LineChart from "../../components/charts/LineChart";


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Line = () => {
  return (
    <div className="dashboardContainer flex h-screen bg-gray-200 gap-2">
      {/* sidebar */}
      <AdminSidebar />

      {/* main */}
      <main className="bg-white overflow-y-auto grow hide-scrollbar py-2 px-4">
        <h1 className="text-center text-2xl font-semibold">Line Charts</h1>
        <section className="mt-10">
          <LineChart
            chartData={[
              124, 135, 623, 35, 352, 125, 456, 523, 476, 21, 235, 235,
            ]}
            title={"Users"}
            labels={months}
            bgColor={"hsl(201, 66%, 75%)"}
            borderColor={"hsl(207, 81%, 58%)"}
          />
          <h2 className="text-center my-3 text-xl lg:text-2xl">ACTIVE USERS</h2>
        </section>
        <section className="mt-10">
          <LineChart
            chartData={[
              124, 135, 623, 35, 352, 125, 456, 523, 476, 21, 235, 235,
            ]}
            title={"Products"}
            labels={months}
            bgColor={"hsl(294, 66%, 75%)"}
            borderColor={"hsl(294, 81%, 58%)"}
          />
          <h2 className="text-center my-3 text-xl lg:text-2xl">TOTAL PRODUCTS (SKU)</h2>
        </section>
        <section className="mt-10">
          <LineChart
            chartData={[
              124, 135, 623, 35, 352, 125, 456, 523, 476, 21, 235, 235,
            ]}
            title={"Revenue"}
            labels={months}
            bgColor={"hsl(119, 66%, 75%)"}
            borderColor={"hsl(119, 81%, 58%)"}
          />
          <h2 className="text-center my-3 text-xl lg:text-2xl">TOTAL REVENUE</h2>
        </section>
        <section className="mt-10">
          <LineChart
            chartData={[
              124, 135, 623, 35, 352, 125, 456, 523, 476, 21, 235, 235,
            ]}
            title={"Discount"}
            labels={months}
            bgColor={"hsl(48, 67%, 75%)"}
            borderColor={"hsl(48, 81%, 58%)"}
          />
          <h2 className="text-center my-3 text-xl lg:text-2xl">DISCOUNT ALLOTED</h2>
        </section>
      </main>
    </div>
  );
};
export default Line;
