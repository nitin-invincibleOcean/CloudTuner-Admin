import userServices from "../services/userServices.js";
import organizationServices from "../services/organizationServices.js";

const routes = async (fastify, options) => {
  // User Routes
  fastify.register(
    async function (userRoutes) {
      userRoutes.get("/", userServices.getAllUsers);
      // userRoutes.post("/", userControllers.createUser);
    },
    { prefix: "/api/users" }
  );

  // Organization Routes
  fastify.register(
    async function (organizationRoutes) {
      organizationRoutes.get("/", organizationServices.getAllOrganizations);
    },
    { prefix: "/api/organizations" }
  );
};

export default routes;
