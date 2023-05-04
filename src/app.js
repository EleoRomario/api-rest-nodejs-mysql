import express from "express";
import cors from "cors";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };
import usersRoutes from "./routes/users.routes.js";
import rolesRoutes from "./routes/roles.routes.js";

const app = express();
// Middlewares
app.use(express.json());

app.set("pkg", pkg);
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
	res.json({
		name: app.get("pkg").name,
		author: app.get("pkg").author,
		description: app.get("pkg").description,
		version: app.get("pkg").version,
	});
});

//Routes
app.use("/api/users", usersRoutes);
app.use("/api/roles", rolesRoutes);

export default app;
