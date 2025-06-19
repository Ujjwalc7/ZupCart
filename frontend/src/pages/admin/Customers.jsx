import AdminSidebar from "../../components/admin/AdminSidebar";
import CustomerTable from "../../components/tables/CustomerTable";

const Customers = () => {
  return (
    <div className="dashboardContainer flex h-screen">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="overflow-y-auto grow hide-scrollbar pt-20 px-4">
        <CustomerTable />
      </main>
    </div>
  );
};
export default Customers;
