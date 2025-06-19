import { useEffect, useState } from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Button } from "@mui/material";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "12",
    photo: "https://m.media-amazon.com/images/I/51+SoS8bWbL._SL1000_.jpg",
    name: "Mackbook",
    price: 2000,
    quantity: 2,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (coupon > Math.floor(Math.random() * 100)) setIsValid(true);
      else setIsValid(false);
    }, [1000]);
    return () => {
      clearTimeout(timeoutId);
      setIsValid(false);
    };
  }, [coupon]);

  return (
    <div className="flex px-4 pt-20 justify-center h-screen gap-4">
      <main className="w-[700px] overflow-y-scroll customScrollbar ">
        {cartItems.length > 0 ? (
          cartItems.map((i) => <CartItem key={i.productId} product={i} />)
        ) : (
          <h1 className="text-2xl">No items in cart</h1>
        )}
      </main>
      <aside className="flex flex-col gap-4 w-[250px] items-center justify-center">
        <p className="flex justify-between w-full">
          <span>Subtotal:</span> <span>&#8377;{subtotal}</span>
        </p>
        <p className="flex justify-between w-full">
          <span>Shipping charges:</span> <span>&#8377;{shippingCharges}</span>
        </p>
        <p className="flex justify-between w-full">
          <span>Tax:</span> <span>&#8377;{tax}</span>
        </p>
        <p className="flex justify-between w-full">
          <span>Discount:</span>{" "}
          <span>
            &#8377;<em>{discount}</em>
          </span>
        </p>
        <p className="flex justify-between w-full">
          <span>Total:</span> <span>&#8377;{total}</span>
        </p>

        <input
          className="inset-shadow-sm rounded-md p-2 outline-none"
          placeholder="Enter valid coupon"
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {coupon && isValid ? (
          <span>
            &#8377;{discount}{" "}
            <span className="text-green-500">Discount applied</span>
          </span>
        ) : coupon && !isValid ? (
          <span className="text-red-500">
            Invalid coupon <ErrorOutlineOutlinedIcon sx={{ color: "red" }} />
          </span>
        ) : (
          ""
        )}
        {cartItems.length > 0 && (
          <Button sx={{ border: "1px solid #f4e6f5" }} color="secondary">
            <Link to={"/shipping"}>Checkout</Link>
          </Button>
        )}
      </aside>
    </div>
  );
};
export default Cart;
