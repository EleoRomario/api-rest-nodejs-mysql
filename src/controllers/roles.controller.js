import Role from "../models/roles.js";

const getRoles = async (req, res) => {
	try {
		const roles = await Role.findAll();

		if (roles) {
			return res.status(200).json({
				message: "Roles encontrados con éxito",
				data: roles,
			});
		} else {
			return res.status(404).json({
				message: "Roles no encontrados",
				data: {},
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: error.message,
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
			return res.status(409).json({
				message: "El Rol ya existe",
				data: {},
			});
		}

		const newRole = await Role.create({
			name,
			description,
		});

		if (newRole) {
			return res.status(201).json({
				message: "Rol creado con éxito",
				data: newRole,
			});
		} else {
			return res.status(400).json({
				message: "Rol no creado",
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
		const { id } = req.params;

		const role = await Role.findOne({
			where: { id },
		});

		if (role) {
			return res.status(200).json({
				message: "Role encontrado con éxito",
				data: role,
			});
		} else {
			return res.status(404).json({
				message: "Role no encontrado",
				data: {},
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

const deleteRole = async (req, res) => {
	try {
		const { id } = req.params;

		const role = await Role.findOne({
			where: { id },
		});

		if (!role) {
			return res.status(404).json({
				message: "Rol no encontrado",
				data: {},
			});
		}

		const deletedRole = await Role.destroy({
			where: { id },
		});

		if (deletedRole) {
			return res.status(200).json({
				message: "Rol eliminado con éxito",
				data: deletedRole,
			});
		}

		return res.status(500).json({
			message: "Rol no se elimina",
			data: {},
		});
	} catch (error) {
		return res.status(500).json({
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
			return res.status(404).json({
				message: "Rol no encontrado",
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
			return res.status(200).json({
				message: "Rol actualizado con éxito",
				data: updatedRole,
			});
		}

		return res.status(500).json({
			message: "Rol no actualizado",
			data: {},
		});
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}
};

export { getRoles, createRole, getRole, deleteRole, updateRole };
