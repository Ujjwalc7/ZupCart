import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/", {
      dbName: "ZupCart",
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};
