import { Router } from "express";
import {
	getUsers,
	createUser,
	getUser,
	deleteUser,
	updateUser,
} from "../controllers/users.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

// /api/users/
router.get("/", [authJwt.verifyToken, authJwt.isAdminOrWorker], getUsers);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], createUser);

// /api/users/:id
router.get("/:id", [authJwt.verifyToken, authJwt.isAdmin], getUser);
router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], deleteUser);
router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], updateUser);

export default router;
