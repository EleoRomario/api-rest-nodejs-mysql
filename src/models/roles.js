import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Roles = sequelize.define(
	"roles",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: true,
	}
);

export default Roles;
