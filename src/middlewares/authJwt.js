import jwt from "jsonwebtoken";
import User from "../models/users.js";
export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];

		console.log("🚀 ~ file: authJwt.js:6 ~ verifyToken ~ token:", token);

		if (!token) {
			return res.status(403).json({ error: "No se proporciono token" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decoded.id;

		const user = await User.findOne({
			where: { id: req.userId },
		});

		if (!user) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		next();
	} catch (error) {
		return res.status(401).json({ error: "No autorizado" });
	}
};

export const isAdmin = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: { id: req.userId },
		});

		const roles = await user.getRoles(user);

		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === "admin") {
				next();
				return;
			}
		}

		return res
			.status(403)
			.json({ error: "Requiere Rol de administrador!" });
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
};

export const isClient = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: { id: req.userId },
		});

		const roles = await user.getRoles(user);

		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === "client") {
				next();
				return;
			}
		}

		return res.status(403).json({ error: "Requiere rol de cliente!" });
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
};

export const isWorker = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: { id: req.userId },
		});

		const roles = await user.getRoles(user);

		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === "worker") {
				next();
				return;
			}
		}

		return res.status(403).json({ error: "Requiere rol de trabajador!" });
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
};

export const isAdminOrWorker = async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: { id: req.userId },
		});

		const roles = await user.getRoles(user);

		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === "worker" || roles[i].name === "admin") {
				next();
				return;
			}
		}

		return res
			.status(403)
			.json({ error: "Requiere rol de administrador o trabajador!" });
	} catch (error) {
		return res.status(500).send({ error: error.message });
	}
};
