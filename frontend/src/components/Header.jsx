import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState } from "react";

const user = { id: 13, role: "admin" };

const Header = () => {
  const [open, setOpen] = useState(false);

  const logOutHandler = () => {
    setOpen(false);
  };

  return (
    <nav className="header z-10 flex gap-4 justify-end p-2 py-4 absolute top-0 bg-white shadow-sm w-screen">
      <Link onClick={() => setOpen(false)} to={"/"}>
        Home
      </Link>
      <Link onClick={() => setOpen(false)} to={"/search"}>
        <SearchIcon />
      </Link>
      <Link onClick={() => setOpen(false)} to={"/cart"}>
        <ShoppingBagIcon />
      </Link>
      {user?.id ? (
        <div className="relative">
          <button
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <PersonIcon />
          </button>
          <dialog
            open={open}
            className="absolute z-20 top-[40px] left-[-100px]"
          >
            <div className="flex flex-col shadow-md rounded-md">
              {user?.role === "admin" && (
                <Link
                  className="hover:bg-gray-200 active:bg-white p-2 flex items-center gap-2"
                  to={"/admin/dashboard"}
                  onClick={() => setOpen(false)}
                >
                  <PersonIcon />
                  Admin
                </Link>
              )}
              <Link
                className="hover:bg-gray-200 active:bg-white p-2 flex items-center gap-2"
                to={"/orders"}
                onClick={() => setOpen(false)}
              >
                <ShoppingCartIcon />
                Orders
              </Link>
              <button
                className="hover:bg-gray-200 active:bg-white p-2 cursor-pointer flex items-center gap-2"
                onClick={logOutHandler}
              >
                <ExitToAppIcon />
                Sign out
              </button>
            </div>
          </dialog>
        </div>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </nav>
  );
};
export default Header;
