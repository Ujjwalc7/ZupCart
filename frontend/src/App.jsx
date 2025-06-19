import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Header from "./components/Header.jsx";
// component loading optimization through lazy and suspense
const Dashboard = lazy(() => import("./pages/admin/Dashboard.jsx"));
const Products = lazy(() => import("./pages/admin/Products.jsx"));
const Customers = lazy(() => import("./pages/admin/Customers.jsx"));
const Transaction = lazy(() => import("./pages/admin/Transaction.jsx"));
const NewProduct = lazy(() => import("./pages/management/NewProduct.jsx"));
const ManageProduct = lazy(() =>
  import("./pages/management/ManageProduct.jsx")
);
const ManageTransaction = lazy(() =>
  import("./pages/management/ManageTransaction.jsx")
);
const Bar = lazy(() => import("./pages/charts/Bar.jsx"));
const Line = lazy(() => import("./pages/charts/Line.jsx"));
const Pie = lazy(() => import("./pages/charts/Pie.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Search = lazy(() => import("./pages/Search.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Shipping = lazy(() => import("./pages/Shipping.jsx"));
const Login = lazy(()=>import('./pages/Login.jsx'))

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* header */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* routes */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* not logged-in route */}
          <Route path="/login" element={<Login />} />

          {/* logged in user routes */}
          <Route>
            <Route path="/shipping" element={<Shipping />} />
          </Route>

          {/* admin routes */}
          <Route>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/Products" element={<Products />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/transactions" element={<Transaction />} />

            {/* charts */}
            <Route path="/admin/chart/bar" element={<Bar />} />
            <Route path="/admin/chart/pie" element={<Pie />} />
            <Route path="/admin/chart/line" element={<Line />} />

            {/* management */}
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ManageProduct />} />
            <Route
              path="/admin/transaction/:id"
              element={<ManageTransaction />}
            />
          </Route>
        </Routes>
      </Suspense>
      {/* footer */}
    </Router>
  );
}

export default App;
