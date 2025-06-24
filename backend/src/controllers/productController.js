import { Product } from "../models/products.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";

export const newProduct = async (req, res, next) => {
  try {
    const { name, stock, price, category } = req.body;
    const photo = req.file;
    if (!name || !stock || !price || !category || !photo) {
      // remove file manually if photo exist
      if (photo) {
        rm(photo.path, () => {
          console.log("Photo deleted");
        });
      }
      return next(new ErrorHandler("All fields are required", 400));
    }
    await Product.create({
      name,
      stock,
      price,
      category: category.toLowerCase(),
      photo: photo?.path,
    });
    return res
      .status(201)
      .json({ succes: true, message: "Product created successfully" });
  } catch (error) {
    return next(error);
  }
};

export const latestProduct = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    return res.status(200).json({ succes: true, products });
  } catch (error) {
    return next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Product.distinct("category");
    if (categories.length < 1)
      return next(new ErrorHandler("No categories available", 404));
    return res.status(200).json({ succes: true, categories });
  } catch (error) {
    return next(error);
  }
};

export const getAdminProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    if (products.length < 1)
      return next(new ErrorHandler("No products available", 404));
    return res.status(200).json({ succes: true, products });
  } catch (error) {
    return next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return next(new ErrorHandler("No product found", 404));
    return res.status(200).json({ succes: true, product });
  } catch (error) {
    return next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return next(new ErrorHandler("No products available", 404));
    const { name, stock, price, category } = req.body;
    const photo = req.file;
    // remove file manually if photo exist
    if (photo) {
      rm(product.photo, () => {
        console.log("Photo deleted");
      });
    }
    await Product.findByIdAndUpdate(
      { _id: id },
      {
        name,
        stock,
        price,
        category: category.toLowerCase(),
        photo: photo?.path || req.body.photo,
      }
    );
    return res
      .status(200)
      .json({ succes: true, message: "Product updated successfully" });
  } catch (error) {
    return next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return next(new ErrorHandler("No product found", 404));
    rm(product.photo, () => {
      console.log("Photo deleted");
    });
    await Product.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ succes: true, message: "Product deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

export const getAllProducts = (req, res, next) => {
  try {
    const { search, sort, category, price } = req.query;
    const page = Number(req.query.page) || 1;
  } catch (error) {
    return next(error);
  }
};
