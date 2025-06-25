import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Slider } from "@mui/material";

const img = "https://m.media-amazon.com/images/I/51+SoS8bWbL._SL1000_.jpg";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([100, 5000]);

  // sending price array into url
  // const params = new URLSearchParams()
  // price.forEach(p => params.append("price", p))
  // const url = `http://localhost:3000/api/v1/product/all?${params.toString()}`

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  // search effect
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(search);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [search]);

  console.log(price);

  return (
    <div className="flex max-md:flex-col gap-4 h-screen overflow-y-auto hide-scrollbar">
      <aside className="mt-20 shadow-md md:h-screen p-6 max-md:py-0 space-y-4 space-x-10 md:w-[250px] max-md:grid max-md:grid-flow-col overflow-x-auto">
        <h2 className="text-xl max-md:hidden">Filters</h2>
        <div>
          <h4>Sort:</h4>
          <select
            className="outline-none border rounded-md border-gray-200"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div className="max-md:w-[250px]">
          <h4>
            Price Range: {price[0]} to{" "}
            {price[1] > 29999 ? price[1] + "+" : price[1]}
          </h4>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={30000}
            step={100}
            getAriaValueText={(value) => `₹${value}`}
            sx={{
              color: "gray",
            }}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            className="outline-none border rounded-md border-gray-200"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">None</option>
            <option value="sample1">sample1</option>
            <option value="sample2">sample2</option>
          </select>
        </div>
      </aside>
      <main className="overflow-y-auto h-screen grow p-2 md:mt-20 hide-scrollbar">
        <h1 className="text-2xl">PRODUCTS</h1>
        <input
          className="p-2 outline-none"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list hide-scrollbar grid md:grid-cols-4 xl:grid-cols-5 max-md:grid-cols-2">
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />

          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
          <ProductCard img={img} name="computer" price={400} id={"lasmd12"} />
        </div>
        {/* pagination control */}
        <div className="my-4 flex items-center gap-2 justify-center">
          <button
            onClick={() => {
              if (page > 1) setPage((prev) => prev - 1);
            }}
          >
            <ArrowCircleLeftIcon
              sx={{ cursor: "pointer", width: "30px", height: "30px" }}
              className="hover:scale-110 transition-all duration-100"
            />
          </button>
          <span className="mx-2">
            <select
              className="border border-gray-300 ml-2 rounded outline-none"
              value={page}
              onChange={(e) => setPage(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
            {" of "}
            <strong>{page}</strong>
          </span>
          <button
            onClick={() => {
              if (page < 7) setPage((prev) => prev + 1);
            }}
          >
            <ArrowCircleRightIcon
              sx={{ cursor: "pointer", width: "30px", height: "30px" }}
              className="hover:scale-110 transition-all duration-100"
            />
          </button>
        </div>
      </main>
    </div>
  );
};
export default Search;
