import Sequelize from "sequelize";
import { config } from "dotenv";
config();

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;

// This code connects to a MySQL database using Sequelize.
const sequelize = new Sequelize(database, username, password, {
	dialect: "mysql",
	host: host,
});

const dbConnect = async () => {
	try {
		await sequelize.sync({ force: true });
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

export { sequelize, dbConnect };
