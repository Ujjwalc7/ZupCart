import AdminSidebar from "../../components/admin/AdminSidebar";
import Button from "@mui/material/Button";

const ManageTransaction = () => {
  const handleUpdate=()=>{}
  return (
    <div className="dashboardContainer flex h-screen bg-gray-200 gap-2">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="bg-white overflow-y-auto grow hide-scrollbar py-2 px-4">
        <section className="flex w-full h-full justify-center items-center gap-2 max-md:flex-col">
          <div className="h-[550px] w-[350px] overflow-y-auto flex flex-col shadow-md p-4 rounded-md text-sm">
            <h1 className="text-center my-4 text-xl">ORDER ITEMS</h1>
            <div className="flex items-center mt-4">
              <img
                className="w-[70px] h-[70px] rounded-md object-contain object-center"
                src="https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
              />
              <p>Puma Shoes</p>
              <p className="m-auto">$2000 x 4 = $8000</p>
            </div>
            <div className="flex items-center mt-4">
              <img
                className="w-[70px] h-[70px] rounded-md object-contain object-center"
                src="https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
              />
              <p>Puma Shoes</p>
              <p className="m-auto">$2000 x 4 = $8000</p>
            </div>
          </div>
          <div className="shadow-md p-4 rounded-md text-sm h-[550px] w-[350px]">
            <h1 className="text-center my-4 text-xl">ORDER INFO</h1>
            <div className="userInfo space-y-2 text-pretty">
              <strong>User Info</strong>
              <p>Name: Mahes Bhat</p>
              <p>Address: Chaltia, Bakultala, West Bengal, Pin- 742101</p>
            </div>
            <div className="amountInfo space-y-2 mt-4">
              <strong>Amount Info</strong>
              <p>Subtotal: 4000</p>
              <p>Shipping Charges: 0</p>
              <p>Tax: 200</p>
              <p>Discount: 1200</p>
              <p>Total: 3000</p>
            </div>
            <div className="statusInfo space-y-2 mt-4">
              <strong>Status Info</strong>
              <p>Status: <span className={`text-red-500`}>Processing</span></p>
            </div>
            <div className="w-full flex justify-center mt-6">
              <Button
                sx={{ border: "1px solid #f4e6f5" }}
                color="secondary"
                onClick={handleUpdate}
              >
                Process Status
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ManageTransaction;
