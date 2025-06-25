import mongoose from "mongoose";
import { cache } from "../app.js";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/", {
      dbName: "ZupCart",
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};

export const invalidateCache = ({ product, order, admin }) => {
  if (product) {
    const keys = cache.keys();
    cache.del(keys);
  }
  if (product) {
  }
  if (product) {
  }
};
