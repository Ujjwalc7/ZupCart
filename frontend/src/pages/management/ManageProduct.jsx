import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import Button from "@mui/material/Button";
const ManageProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, stock, photo);
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file && file.type.startsWith("image")) {
      reader.readAsDataURL(file);
      //always runs after success or even failure
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    } else {
      console.log("error: only image file allowed");
    }
  };
  return (
    <div className="dashboardContainer flex h-screen gap-2 bg-gray-200">
      {/* sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="overflow-y-auto bg-white grow hide-scrollbar py-2 px-4">
        <section className="flex w-full h-full justify-center items-center gap-2">
          <div className="lg:h-[550px] overflow-y-auto flex flex-col shadow-md p-4 rounded-md text-sm">
            <p className="text-end text-green-500 my-3">10 Available</p>
            <div>
              <p className="my-1">ID-759645tfytf</p>
              <img
                className="w-[250px] object-center object-cover"
                src="https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <p className="text-center my-2">PUMA SHOES</p>
            <h2 className="text-center my-1.5 font-semibold">$2000</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="shadow-md p-4 rounded-md text-sm lg:h-[550px]"
          >
            <h1 className="font-semibold md:text-lg text-center my-2">
              Update Product
            </h1>
            <div className="flex flex-col">
              <label className="my-2">Name</label>
              <input
                className="text-base bg-gray-200 rounded-md p-2 outline-none"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Price</label>
              <input
                className="text-base bg-gray-200 rounded-md p-2 outline-none"
                type="number"
                placeholder="Price"
                value={price}
                min={0}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Stock</label>
              <input
                className="text-base bg-gray-200 rounded-md p-2 outline-none"
                min={0}
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2">Photo (image/jpg/png/etc.)</label>
              <input
                className="bg-gray-200 rounded-md p-2 outline-none"
                type="file"
                accept="image/*"
                placeholder="Photo"
                onChange={imageHandler}
                required
              />
            </div>
            {photo && (
              <div className="my-2">
                <img
                  src={photo}
                  alt="image"
                  className="w-[100px] h-[80px] object-contain object-center rounded-md"
                />
              </div>
            )}
            <div className="flex justify-center my-4">
              <Button
                sx={{ border: "1px solid #f4e6f5" }}
                color="secondary"
                type="submit"
              >
                update
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
export default ManageProduct;
