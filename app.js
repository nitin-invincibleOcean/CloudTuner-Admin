import Fastify from "fastify";
import "dotenv/config";
import { testDBConnection } from "./src/config/db.js";
import routes from "./src/routes/Routes.js";
import setupSwagger from "./plugins/swagger.js";

const fastify = Fastify({ logger: true });

// Set up Swagger and Scalar API Reference
await setupSwagger(fastify);

// Register all routes
fastify.register(routes);

// Test the database connection on startup
await testDBConnection();

// Starting the server
fastify.listen({ port: process.env.PORT || 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(
    `🚀 Server is running on http://localhost:${process.env.PORT || 3000}`
  );
});
