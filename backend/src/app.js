import express from "express";
import userRouter from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import productRouter from "./routes/product.js";

const PROT = 3000;
connectDB();

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

// user routes
app.use("/api/v1/user", userRouter);

// product routes
app.use("/api/v1/product", productRouter);

app.use(errorMiddleware);

app.listen(PROT, () => {
  console.log(`Server listening on http://localhost:${PROT}`);
});
