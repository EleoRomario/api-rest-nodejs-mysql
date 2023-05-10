import User from "../models/users.js";
import Roles from "../models/roles.js";

const getUsers = async (req, res) => {
	try {
		const users = await User.findAll({
			include: {
				model: Roles,
				attributes: ["name", "description"],
			},
		});

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
		return res.status(400).json({
			message: error.message,
		});
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
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

const getUser = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findOne({
			where: { id: id },
			include: {
				model: Roles,
				attributes: ["name", "description"],
			},
		});

		if (user) {
			return res.json({
				message: "User found successfully",
				data: user,
			});
		}

		return res.json({
			message: "User not found",
			data: {},
		});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.destroy({
			where: { id: id },
		});

		if (user) {
			return res.json({
				message: "User deleted successfully",
				data: user,
			});
		}

		return res.json({
			message: "User not deleted",
			data: {},
		});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { username, email, password, roleId } = req.body;

		const user = await User.findOne({
			where: { id: id },
		});

		if (user) {
			const updatedUser = await User.update(
				{
					username,
					email,
					password,
					roleId,
				},
				{
					where: { id: id },
				}
			);

			return res.json({
				message: "User updated successfully",
				data: updatedUser,
			});
		}

		return res.json({
			message: "User not updated",
			data: {},
		});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export { getUsers, createUser, getUser, deleteUser, updateUser };
