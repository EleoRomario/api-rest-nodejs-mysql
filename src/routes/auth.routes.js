import { Router } from "express";
import { config } from "dotenv";
import {
	signup,
	signin,
	signout,
	refreshTokens,
} from "../controllers/auth.controller.js";

config();

const router = Router();

// Routes auth /api/auth
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/refresh-tokens", refreshTokens);

export default router;
