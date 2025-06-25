import { cache } from "../app.js";
import { Product } from "../models/products.js";
import { invalidateCache } from "../utils/features.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";

export const latestProduct = async (req, res, next) => {
  try {
    let products;
    // Revalidate cache on new, update, order or delete product
    if (cache.has("latest-products")) {
      products = JSON.parse(cache.get("latest-products"));
    } else {
      products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
      cache.set("latest-products", JSON.stringify(products));
    }

    return res.status(200).json({ succes: true, products });
  } catch (error) {
    return next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    let categories;
    if (cache.has("categories")) {
      categories = JSON.parse(cache.get("categories"));
    } else {
      categories = await Product.distinct("category");
      cache.set("categories", JSON.stringify(categories));
    }
    if (categories.length < 1)
      return next(new ErrorHandler("No categories available", 404));
    return res.status(200).json({ succes: true, categories });
  } catch (error) {
    return next(error);
  }
};

export const getAdminProducts = async (req, res, next) => {
  try {
    let products;
    if (cache.has("admin-products")) {
      products = JSON.parse(cache.get("admin-products"));
    } else {
      products = await Product.find({});
      cache.set("admin-products", JSON.stringify(products));
    }
    if (products.length < 1)
      return next(new ErrorHandler("No products available", 404));
    return res.status(200).json({ succes: true, products });
  } catch (error) {
    return next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    let product;
    const { id } = req.params;
    if (cache.has(`product-${id}`)) {
      product = JSON.parse(cache.get(`product-${id}`));
    } else {
      product = await Product.findById(id);
      cache.set(`product-${id}`, JSON.stringify(product));
    }
    if (!product) return next(new ErrorHandler("No product found", 404));
    return res.status(200).json({ succes: true, product });
  } catch (error) {
    return next(error);
  }
};

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
    invalidateCache({ product: true });
    return res
      .status(201)
      .json({ succes: true, message: "Product created successfully" });
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
    invalidateCache({ product: true });

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
    invalidateCache({ product: true });

    return res
      .status(200)
      .json({ succes: true, message: "Product deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    let { search, sort, category, price } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(process.env.PRODUCT_PER_PAGE) || 10;
    const skip = limit * (page - 1);
    const baseQuery = {};
    // regex makes a string pattern and 'i' makes case insensitive
    if (search) {
      search = search.trim().split(" ").filter(Boolean);
      baseQuery.$or = search.map((keyword) => ({
        name: { $regex: keyword, $options: "i" },
      }));
    }

    if (price) {
      if (Number(price[1]) < 30000) {
        baseQuery.price = { $gte: Number(price[0]), $lte: Number(price[1]) };
      } else {
        baseQuery.price = { $gte: Number(price[0]) };
      }
    }

    if (category) baseQuery.category = category;
    const productsPromise = await Product.find(baseQuery)
      .sort(sort ? { price: sort === "asc" ? 1 : -1 } : undefined)
      .limit(limit)
      .skip(skip);

    const allProductsPromise = await Product.find(baseQuery);
    const [products, allProducts] = await Promise.all([
      productsPromise,
      allProductsPromise,
    ]);

    const totalPage = Math.ceil(allProducts.length / limit);

    return res.status(200).json({
      success: true,
      products,
      totalPage,
    });
  } catch (error) {
    return next(error);
  }
};

// func to create multiple docs
// async function createMulti() {
//   const products = [];

//   for (let i = 0; i < products.length; i++) {
//     await Product.create(products[i]);
//   }
//   console.log("done creaete");
// }
