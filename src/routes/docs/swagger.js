import swaggerJsdoc from "swagger-jsdoc";
import pkg from "../../../package.json" assert { type: "json" };

const options = {
	definition: {
		openapi: "3.0.3",
		info: {
			title: pkg.name,
			description: pkg.description,
			version: pkg.version,
			contact: {
				name: pkg.author,
				url: pkg.homepage,
				email: pkg.email,
			},
		},
		servers: [
			{
				url: "http://localhost:3000/api",
				description: "Development server",
			},
			{
				url: "https://myapp.herokuapp.com/api",
				description: "Production server",
			},
		],
		tags: [
			{
				name: "Users",
				description: "Users endpoints",
			},
			{
				name: "Roles",
				description: "Roles endpoints",
			},
			{
				name: "Auth",
				description: "Auth endpoints",
			},
		],
		// paths: {
		// 	"/users": {
		// 		get: {
		// 		  tags: ["Users"],
		// 			summary: "Get all users",
		// 			description: "Get all users from database",
		// 			operationId: "getUsers",
		// 			responses: {
		// 				200: {
		// 					description: "Get all users",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/User",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 		post: {
		// 			tags: ["Users"],
		// 			summary: "Create user",
		// 			requestBody: {
		// 				content: {
		// 					"application/json": {
		// 						schema: {
		// 							$ref: "#/components/schemas/User",
		// 						},
		// 					},
		// 				},
		// 			},
		// 			responses: {
		// 				200: {
		// 					description: "Create user",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/User",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 	},
		// 	"/users/{id}": {
		// 		get: {
		// 			tags: ["Users"],
		// 			summary: "Get user by id",
		// 			parameters: [
		// 				{
		// 					name: "id",
		// 					in: "path",
		// 					description: "User id",
		// 					required: true,
		// 					schema: {
		// 						type: "string",
		// 					},
		// 				},
		// 			],
		// 			responses: {
		// 				200: {
		// 					description: "Get user by id",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/User",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 		put: {
		// 			tags: ["Users"],
		// 			summary: "Update user by id",
		// 			parameters: [
		// 				{
		// 					name: "id",
		// 					in: "path",
		// 					description: "User id",
		// 					required: true,
		// 					schema: {
		// 						type: "string",
		// 					},
		// 				},
		// 			],
		// 			requestBody: {
		// 				content: {
		// 					"application/json": {
		// 						schema: {
		// 							$ref: "#/components/schemas/User",
		// 						},
		// 					},
		// 				},
		// 			},
		// 			responses: {
		// 				200: {
		// 					description: "Update user by id",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/User",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 		delete: {
		// 			tags: ["Users"],
		// 			summary: "Delete user by id",
		// 			parameters: [
		// 				{
		// 					name: "id",
		// 					in: "path",
		// 					description: "User id",
		// 					required: true,
		// 					schema: {
		// 						type: "string",
		// 					},
		// 				},
		// 			],
		// 			responses: {
		// 				200: {
		// 					description: "Delete user by id",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/User",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 	},
		// 	"/roles": {
		// 		get: {
		// 			tags: ["Roles"],
		// 			summary: "Get all roles",
		// 			responses: {
		// 				200: {
		// 					description: "Get all roles",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/Role",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 		post: {
		// 			tags: ["Roles"],
		// 			summary: "Create role",
		// 			requestBody: {
		// 				content: {
		// 					"application/json": {
		// 						schema: {
		// 							$ref: "#/components/schemas/Role",
		// 						},
		// 					},
		// 				},
		// 			},
		// 			responses: {
		// 				200: {
		// 					description: "Create role",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/Role",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 	},
		// 	"/roles/{id}": {
		// 		get: {
		// 			tags: ["Roles"],
		// 			summary: "Get role by id",
		// 			parameters: [
		// 				{
		// 					name: "id",
		// 					in: "path",
		// 					description: "Role id",
		// 					required: true,
		// 					schema: {
		// 						type: "string",
		// 					},
		// 				},
		// 			],
		// 			responses: {
		// 				200: {
		// 					description: "Get role by id",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/Role",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 		put: {
		// 			tags: ["Roles"],
		// 			summary: "Update role by id",
		// 			parameters: [
		// 				{
		// 					name: "id",
		// 					in: "path",
		// 					description: "Role id",
		// 					required: true,
		// 					schema: {
		// 						type: "string",
		// 					},
		// 				},
		// 			],
		// 			requestBody: {
		// 				content: {
		// 					"application/json": {
		// 						schema: {
		// 							$ref: "#/components/schemas/Role",
		// 						},
		// 					},
		// 				},
		// 			},
		// 			responses: {
		// 				200: {
		// 					description: "Update role by id",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/Role",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 		delete: {
		// 			tags: ["Roles"],
		// 			summary: "Delete role by id",
		// 			parameters: [
		// 				{
		// 					name: "id",
		// 					in: "path",
		// 					description: "Role id",
		// 					required: true,
		// 					schema: {
		// 						type: "string",
		// 					},
		// 				},
		// 			],
		// 			responses: {
		// 				200: {
		// 					description: "Delete role by id",
		// 					content: {
		// 						"application/json": {
		// 							schema: {
		// 								$ref: "#/components/schemas/Role",
		// 							},
		// 						},
		// 					},
		// 				},
		// 			},
		// 		},
		// 	},
		// },
		components: {
			schemas: {
				User: {
					type: "object",
					required: ["username", "email", "password"],
					properties: {
						id: {
							type: "string",
							description: "User id",
							readOnly: true,
						},
						username: {
							type: "string",
							description: "User username",
							example: "admin",
						},
						email: {
							type: "string",
							description: "User email",
							example: "admin@gmail.com",
						},
						password: {
							type: "string",
							description: "User password",
							example: "admin",
						},
						roleId: {
							type: "string",
							description: "User role id",
							example: "022c1c85-1ec8-4b53-b772-f339506f8131",
						},
						createdAt: {
							type: "string",
							description: "User creation date",
							readOnly: true,
						},
						updatedAt: {
							type: "string",
							description: "User update date",
							readOnly: true,
						},
					},
				},
				Role: {
					type: "object",
					required: ["id", "name", "createdAt", "updatedAt"],
					properties: {
						id: {
							type: "string",
							description: "Role id",
							readOnly: true,
						},
						name: {
							type: "string",
							description: "Role name",
							example: "admin",
						},
						description: {
							type: "string",
							description: "Role description",
							example: "Rol de administrador",
						},
						createdAt: {
							type: "string",
							description: "Role creation date",
							readOnly: true,
						},
						updatedAt: {
							type: "string",
							description: "Role update date",
							readOnly: true,
						},
					},
				},
				Login: {
					type: "object",
					required: ["email", "password"],
					properties: {
						email: {
							type: "string",
							description: "User email",
							example: "admin@gmail.com",
						},
						password: {
							type: "string",
							description: "User password",
							example: "admin",
						},
					},
				},
			},
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
				// api_key: {
				// 	type: "apiKey",
				// 	scheme: "bearer",
				// 	in: "header",
				// 	name: "Authorization",
				// },
			},
			parameters: {
				AccessToken: {
					name: "x-access-token",
					in: "header",
					description: "Access Token",
					required: true,
					schema: {
						type: "string",
					},
				},
			},
		},
	},
	apis: ["./src/routes/*.js"],
};

const openApiConfiguration = swaggerJsdoc(options);

export default openApiConfiguration;
