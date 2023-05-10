import { Router } from "express";
import {
	getRoles,
	createRole,
	getRole,
	deleteRole,
	updateRole,
} from "../controllers/roles.controller.js";
import { authJwt } from "../middlewares/index.js";

const router = Router();

// /api/roles/
router.get("/", [authJwt.verifyToken, authJwt.isAdmin], getRoles);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], createRole);

// /api/roles/:id
router.get("/:id", [authJwt.verifyToken, authJwt.isAdmin], getRole);
router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], deleteRole);
router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], updateRole);

export default router;
