import userServices from "../services/userServices.js";

const routes = async (fastify, options) => {
  // User Routes
  fastify.register(
    async function (userRoutes) {
      userRoutes.get("/", userServices.getAllUsers);
      // userRoutes.post("/", userControllers.createUser);
    },
    { prefix: "/api/users" }
  );
};

export default routes;
