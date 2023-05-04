import User from "../models/users.js";

const getUsers = async (req, res) => {
	try {
		const users = await User.findAll();

		if (users) {
			res.json({
				message: "Users found successfully",
				data: users,
			});
		} else {
			res.json({
				message: "Users not found",
				data: {},
			});
		}
	} catch (error) {
		console.error(error);
	}
};

const createUser = async (req, res) => {
	try {
		const { username, email, password, roleId } = req.body;

		const newUser = await User.create({
			username,
			email,
			password,
			roleId,
		});

		if (newUser) {
			res.json({
				message: "User created successfully",
				data: newUser,
			});
		} else {
			res.json({
				message: "User not created",
				data: {},
			});
		}
		// res.send("createUser");
	} catch (error) {
		console.error(error);
	}
};

const getUser = async (req, res) => {
	try {
		res.send("getUser");
	} catch (error) {
		console.error(error);
	}
};

const deleteUser = async (req, res) => {
	try {
		res.send("deleteUser");
	} catch (error) {
		console.error(error);
	}
};

const updateUser = async (req, res) => {
	try {
		res.send("updateUser");
	} catch (error) {
		console.error(error);
	}
};

export { getUsers, createUser, getUser, deleteUser, updateUser };
