import express from "express";
import { register, login, getMe } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Register
router.post("/register", register);

//Login
router.post("/login", login);

//Get details
router.get("/me", protect, getMe);

export default router;