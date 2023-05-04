import Role from "../models/roles.js";
const getRoles = async (req, res) => {
	try {
		const roles = await Role.findAll();

		if (roles) {
			res.json({
				message: "Roles found successfully",
				data: roles,
			});
		} else {
			res.json({
				message: "Roles not found",
				data: {},
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: "Something goes wrong",
			data: {},
		});
	}
};

const createRole = async (req, res) => {
	try {
		const { name, description } = req.body;

		const newRole = await Role.create({
			name,
			description,
		});

		if (newRole) {
			res.json({
				message: "Role created successfully",
				data: newRole,
			});
		} else {
			res.json({
				message: "Role not created",
				data: {},
			});
		}
	} catch (error) {
		console.error(error);
	}
};

const getRole = async (req, res) => {
	try {
		res.send("getRole");
	} catch (error) {
		console.error(error);
	}
};

const deleteRole = async (req, res) => {
	try {
		res.send("deleteRole");
	} catch (error) {
		console.error(error);
	}
};

const updateRole = async (req, res) => {
	try {
		res.send("updateRole");
	} catch (error) {
		console.error(error);
	}
};

export { getRoles, createRole, getRole, deleteRole, updateRole };
