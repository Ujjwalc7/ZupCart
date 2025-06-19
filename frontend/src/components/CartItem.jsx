import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({product}) => {
  return (
    <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
        <img className="w-[100px]" src={product.photo} alt={product.name} />
        <article className="flex flex-col">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <span>&#8377;{product.price}</span>
        </article>
        </div>
        <div className="flex gap-4">
        <div className="flex gap-2">
            <button className="border active:scale-95 rounded-md w-[15px] cursor-pointer">-</button>
            <p>{product.quantity}</p>
            <button className="border active:scale-95 rounded-md w-[15px] cursor-pointer">+</button>
        </div>
        <button><DeleteIcon className="hover:text-red-500 cursor-pointer"/></button>
        </div>
    </div>
  )
}
export default CartItem