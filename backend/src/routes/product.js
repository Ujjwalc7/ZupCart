import express from "express";
import {
  latestProduct,
  newProduct,
  getAllCategories,
  getAdminProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { adminOnly } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const Router = express.Router();

Router.post("/new", adminOnly, singleUpload, newProduct);
Router.get("/all", getAllProducts);
Router.get("/latest", latestProduct);
Router.get("/admin", getAdminProducts);
Router.get("/categories", getAllCategories);
Router.put("/update/:id", adminOnly, singleUpload, updateProduct);
Router.delete("/delete/:id", adminOnly, deleteProduct);
Router.get("/:id", getProductById);

export default Router;
