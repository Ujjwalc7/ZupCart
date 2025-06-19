import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useRef } from "react";

const ProductCard = ({ img, price, name, id, stock }) => {
  return (
    <div className="relative p-6 flex flex-col justify-center items-center gap-2"
    >
      {/* <img src={`${server}/${phot}`} alt={name} /> */}
      <img
        className="w-[180px] h-[160px] object-center object-cover"
        src={img}
        alt={name}
      />
      <div className="flex flex-col items-center">
      <p>{name}</p>
      <span>&#8377;{price}</span>
      </div>
      <div
        className="addBtn opacity-0 hover:opacity-100 flex absolute top-0 left-0 w-full h-full justify-center items-center"
      >
        <button 
        className="relative rounded-full bg-blue-500 flex items-center justify-center cursor-pointer w-[40px] h-[40px]"
        onClick={()=>alert('hello')}
        >
          <AddOutlinedIcon />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
