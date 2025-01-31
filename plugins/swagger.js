import FastifySwagger from "@fastify/swagger";
import ScalarApiReference from "@scalar/fastify-api-reference";

export default async function setupSwagger(fastify) {
  await fastify.register(FastifySwagger, {
    openapi: {
      info: {
        title: "My Fastify App",
        version: "1.0.0",
      },
    },
  });

  await fastify.register(ScalarApiReference, {
    routePrefix: "/reference",
  });
}
