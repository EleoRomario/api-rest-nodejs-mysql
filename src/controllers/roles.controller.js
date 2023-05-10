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

		const role = await Role.findOne({
			where: { name },
		});

		if (role) {
			return res.status(400).json({
				message: "Role already exists",
				data: {},
			});
		}

		const newRole = await Role.create({
			name,
			description,
		});

		if (newRole) {
			return res.json({
				message: "Role created successfully",
				data: newRole,
			});
		} else {
			return res.json({
				message: "Role not created",
				data: {},
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
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
		const { id } = req.params;

		const role = await Role.findOne({
			where: { id },
		});

		if (!role) {
			return res.status(400).json({
				message: "Role not found",
				data: {},
			});
		}

		const deletedRole = await Role.destroy({
			where: { id },
		});

		if (deletedRole) {
			return res.json({
				message: "Role deleted successfully",
				data: deletedRole,
			});
		}

		return res.json({
			message: "Role not deleted",
			data: {},
		});
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}
};

const updateRole = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, description } = req.body;

		const role = await Role.findOne({
			where: { id },
		});

		if (!role) {
			return res.status(400).json({
				message: "Role not found",
				data: {},
			});
		}

		const updatedRole = await Role.update(
			{
				name,
				description,
			},
			{
				where: { id },
			}
		);

		if (updatedRole) {
			return res.json({
				message: "Role updated successfully",
				data: updatedRole,
			});
		}

		return res.json({
			message: "Role not updated",
			data: {},
		});
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}
};

export { getRoles, createRole, getRole, deleteRole, updateRole };
