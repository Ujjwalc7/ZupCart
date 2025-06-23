import express from "express";
import userRouter from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const PROT = 3000;
connectDB();

const app = express();

// middleware
app.use(express.json());

// using routes
app.use("/api/v1/user", userRouter);

app.use(errorMiddleware);

app.listen(PROT, () => {
  console.log(`Server listening on http://localhost:${PROT}`);
});
