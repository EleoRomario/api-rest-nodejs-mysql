import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
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

Roles.hasOne(User, {
	foreignKey: "roleId",
	sourceKey: "id",
	onDelete: "CASCADE",
});

export default User;
