import jwt from "jsonwebtoken";
import User from "../models/users.js";

const signup = async (req, res) => {
	try {
		const { username, email, password, roleId } = req.body;

		if (!username || !email || !password || !roleId) {
			return res
				.status(400)
				.json({ error: "Todos los campos son obligatorios" });
		}

		if (email) {
			const emailExist = await User.findOne({
				where: { email: email },
			});
			if (emailExist) {
				return res.status(409).json({
					error: "El correo electrónico ya está registrado",
				});
			}
		}

		const newUser = await User.create({
			username,
			email,
			password,
			roleId,
		});

		if (!newUser)
			return res.status(500).json({ error: "Usuario no creado" });

		return res.status(201).json({
			message: "!Registro exitoso! Por favor inicie sesión.",
		});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

const signout = (req, res) => {
	try {
		res.clearCookie("t");
		return res.status(200).json({
			message: "signed out",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const signin = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ error: "Todos los campos son obligatorios" });
		}

		const user = await User.findOne({
			where: { email: email },
		});

		if (!user) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		const isMatch = await user.comparePassword(password, user.password);

		if (!isMatch) {
			return res.status(401).json({ error: "Contraseña incorrecta" });
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "1d",
		});

		res.cookie("t", token, { expire: new Date() + 9999 });

		const { id, username, email: userEmail, roleId } = user;

		return res.status(200).json({
			token,
			user: { id, username, email: userEmail, roleId },
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const refreshTokens = async (req, res) => {
	try {
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export { signup, signin, signout, refreshTokens };
