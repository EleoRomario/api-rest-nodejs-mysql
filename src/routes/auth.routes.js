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

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     description: Registra un nuevo usuario en la base de datos
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       400:
 *         description: Todos los campos son requeridos
 *       409:
 *         description: El correo electrónico ya está registrado
 *       500:
 *         description: Usuario no creado
 *       201:
 *         description: Registro exitoso! Por favor inicie sesión
 */

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Inicia sesión
 *     tags: [Auth]
 *     description: Inicia sesión en la aplicación
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       400:
 *         description: Todos los campos son requeridos
 *       404:
 *         description: Usuario no encontrado
 *       401:
 *         description: Contraseña incorrecta
 *       500:
 *         description: Usuario no creado
 *       200:
 *         description: Inicio de sesión exitoso
 */

/**
 * @swagger
 * /auth/signout:
 *   post:
 *     summary: Cierra sesión
 *     tags: [Auth]
 *     description: Cierra sesión en la aplicación
 *     responses:
 *       500:
 *         description: Error al cerrar sesión
 *       200:
 *         description: Cierre de sesión exitoso
 */

// Routes auth /api/auth
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/refresh-tokens", refreshTokens);

export default router;
