import AdminSidebar from "../../components/admin/AdminSidebar";
import TransactionTable from "../../components/tables/TransactionTable";

const Transaction = () => {
  return (
    <div className="dashboardContainer flex h-screen">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="overflow-y-auto flex-1 hide-scrollbar pt-20 px-4">
        <TransactionTable />
      </main>
    </div>
  );
};
export default Transaction;
