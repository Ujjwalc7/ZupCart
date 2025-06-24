import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name required"],
    },
    photo: {
      type: String,
      required: [true, "Photo required"],
    },
    price: {
      type: Number,
      required: [true, "Price required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock required"],
    },
    category: {
      type: String,
      required: [true, "Category required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", schema);
