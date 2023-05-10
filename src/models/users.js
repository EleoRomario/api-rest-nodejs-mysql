import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import bcrypt from "bcryptjs";
import Roles from "./roles.js";

const User = sequelize.define(
	"users",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: true,
	}
);

/*
 * El modelo de usuario representa a un usuario en el sistema.
 * Un usuario puede tener múltiples roles.
 * Los roles se definen en el modelo de roles.
 */

User.belongsTo(Roles, {
	foreignKey: "roleId",
	sourceKey: "id",
	onDelete: "CASCADE",
});

const encryptPassword = async (user) => {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(user.password, salt);
	return (user.password = hash);
};

const comparePassword = async (password, recivedPassword) => {
	return await bcrypt.compare(password, recivedPassword);
};

User.beforeCreate(encryptPassword);
User.beforeUpdate(encryptPassword);

const getRoles = async (user) => {
	const roles = await Roles.findAll({ where: { id: user.roleId } });
	return roles;
};

User.prototype.getRoles = getRoles;
User.prototype.comparePassword = comparePassword;

export default User;
