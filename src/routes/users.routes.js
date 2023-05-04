import { Router } from "express";
import {
	getUsers,
	createUser,
	getUser,
	deleteUser,
	updateUser,
} from "../controllers/users.controller.js";

const router = Router();

// /api/users/
router.get("/", getUsers);
router.post("/", createUser);

// /api/users/:id
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
