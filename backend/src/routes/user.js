import express from "express";
import {
  newUser,
  getAllUser,
  getUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/all", getAllUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);

export default router;
