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

/**
 * @swagger
 * /roles:
 *   get:
 *     summary: Obtiene todos los roles
 *     tags: [Roles]
 *     parameters:
 *       - $ref: '#/components/parameters/AccessToken'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Roles encontrados con éxito
 *       404:
 *         description: Roles no encontrados
 *       500:
 *         description: Error del servidor
 *   post:
 *     summary: Crea un nuevo rol
 *     tags: [Roles]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       201:
 *         description: Rol creado con éxito
 *       409:
 *         description: El rol ya existe
 *       400:
 *         description: Rol no creado
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     summary: Obtiene un rol por su id
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol encontrado con éxito
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error del servidor
 *   put:
 *     summary: Actualiza un rol por su id
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Rol actualizado con éxito
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error del servidor
 *   delete:
 *     summary: Elimina un rol por su id
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Rol eliminado con éxito
 *       500:
 *         description: Error del servidor
 *
 */

// /api/roles/
router.get("/", [authJwt.verifyToken, authJwt.isAdmin], getRoles);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], createRole);

// /api/roles/:id
router.get("/:id", [authJwt.verifyToken, authJwt.isAdmin], getRole);
router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], deleteRole);
router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], updateRole);

export default router;
