import { Button, IconButton } from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const navigate = useNavigate()

    const handleChange = (e) => {
    setData(prev => ({...prev, [e.target.name]: e.target.name === 'pincode' ? Number(e.target.value) : e.target.value}))
    if(e.target.name === 'pincode' && data.pincode === 0){
        setData(prev => ({...prev, pincode: ""}))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[300px]">
        <h1 className="w-full text-center text-2xl mb-4">SHIPPING ADDRESS</h1>
        <input
          className="inset-shadow-sm p-4 outline-none rounded-md"
          type="text"
          placeholder="Address"
          value={data.address}
          name="address"
          onChange={handleChange}
          required
        />
        <input
          className="inset-shadow-sm p-4 outline-none rounded-md"
          type="text"
          placeholder="City"
          value={data.city}
          name="city"
          onChange={handleChange}
          required
        />
        <input
          className="inset-shadow-sm p-4 outline-none rounded-md"
          type="text"
          placeholder="State"
          value={data.state}
          name="state"
          onChange={handleChange}
          required
        />
        <select
          className="inset-shadow-sm p-4 outline-none rounded-md"
          value={data.country}
          name="country"
          onChange={handleChange}
          required
        >
          <option value="">Choose Country</option>
          <option value="India">India</option>
        </select>

        <input
          className="inset-shadow-sm p-4 outline-none rounded-md"
          type="number"
          placeholder="Pin Code"
          value={data.pincode}
          name="pincode"
          onChange={handleChange}
          required
          min={0}
        />
        <Button sx={{ border: "1px solid #f4e6f5" }} color="secondary" type="submit">
          Pay Now
        </Button>
      </form>
      <IconButton
        onClick={()=>navigate('/cart')}
        size="medium"
        sx={{ position: "absolute", top: "80px", left: "20px" }}
      >
        <KeyboardBackspaceOutlinedIcon />
      </IconButton>
    </main>
  );
};
export default Shipping;
