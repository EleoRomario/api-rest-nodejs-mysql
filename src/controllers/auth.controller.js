import User from "../models/users.js";

const signup = async (req, res) => {
	try {
		const { username, email, password, roleId } = req.body;

		const newUser = await User.create({
			username,
			email,
			password,
			roleId,
		});

		if (!newUser)
			return res.status(400).json({ error: "User not created" });

		return res.status(201).json({
			message: "Signup success! Please signin.",
		});
	} catch (error) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(error),
		});
	}
};

const signout = (req, res) => {
	res.clearCookie("t");
	return res.status(200).json({
		message: "signed out",
	});
};

const signin = async (req, res) => {
	try {
	} catch (error) {}
};

const refreshTokens = async (req, res) => {
	try {
	} catch (error) {}
};

export { signup, signin, signout, refreshTokens };
