import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const img = 'https://m.media-amazon.com/images/I/51+SoS8bWbL._SL1000_.jpg' 

const Home = () => {
  return (
    <main className="home px-4 h-screen overflow-y-auto hide-scrollbar">
        <section className="banner_section px-4 ">
            <div className="banner"></div>
        </section>
        <section className="latest_products mt-8">
            <div className="flex justify-between">
            <h1 className="text-2xl">LATEST PRODUCTS</h1>
            <Link className="" to={'/search'}>More</Link>
            </div>
            <div className="flex">
                <ProductCard img={img} name='computer' price={400} id={'lasmd12'}/>
            </div>
        </section>
    </main>
  )
}
export default Home