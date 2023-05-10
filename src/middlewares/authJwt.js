import jwt from "jsonwebtoken";
import User from "../models/users.js";
export const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers["x-access-token"];

		if (!token) {
			return res.status(403).json({ error: "No token provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decoded.id;

		const user = await User.findOne({
			where: { id: req.userId },
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		next();
	} catch (error) {
		return res.status(401).json({ error: "Unauthorized" });
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

		return res.status(403).json({ error: "Require Admin Role!" });
	} catch (error) {
		return res.status(400).send({ error: error.message });
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

		return res.status(403).json({ error: "Require Client Role!" });
	} catch (error) {
		return res.status(400).send({ error: error.message });
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

		return res.status(403).json({ error: "Require Workers Role!" });
	} catch (error) {
		return res.status(400).send({ error: error.message });
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

		return res.status(403).json({ error: "Require Admin or Worker Role!" });
	} catch (error) {
		return res.status(400).send({ error: error.message });
	}
};
