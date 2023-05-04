import { Router } from "express";
import {
	getRoles,
	createRole,
	getRole,
	deleteRole,
	updateRole,
} from "../controllers/roles.controller.js";

const router = Router();

// /api/roles/
router.get("/", getRoles);
router.post("/", createRole);

// /api/roles/:id
router.get("/:id", getRole);
router.delete("/:id", deleteRole);
router.put("/:id", updateRole);

export default router;
