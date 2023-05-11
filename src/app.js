import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import pkg from "../package.json" assert { type: "json" };
import usersRoutes from "./routes/users.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import authRoutes from "./routes/auth.routes.js";
import openApiConfiguration from "./routes/docs/swagger.js";

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

// Swagger Docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiConfiguration));

//Routes
app.use("/api/users", usersRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/auth", authRoutes);
app.use("*", (req, res) => {
	res.status(404).json({
		error: "Not found",
	});
});

export default app;
