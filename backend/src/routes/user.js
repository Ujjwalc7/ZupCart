import express from "express";
import {
  newUser,
  getAllUser,
  getUserById,
  deleteUserById,
} from "../controllers/userController.js";
import { adminOnly } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/all", adminOnly, getAllUser);
router.get("/:id", adminOnly, getUserById);
router.delete("/:id", adminOnly, deleteUserById);

export default router;
