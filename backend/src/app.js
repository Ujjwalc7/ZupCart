import express from "express";
import userRouter from "./routes/user.js";
const PROT = 3000;

const app = express();

// using routes
app.use("/api/v1/user", userRouter);

app.listen(PROT, () => {
  console.log(`Server listening on http://localhost:${PROT}`);
});
