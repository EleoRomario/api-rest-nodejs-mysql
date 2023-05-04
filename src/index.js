import app from "./app.js";
import { config } from "dotenv";
import { dbConnect } from "./config/database.js";

config();

async function main() {
	try {
		await dbConnect();

		app.listen(process.env.PORT, () => {
			console.log(`Server running on port ${process.env.PORT}`);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

main();
