import userServices from "../services/userServices.js";

const getUsers = async (req, reply) => {
  //get single user
  //get all users
};

const createUser = async (req, reply) => {
  const name = req.body.name || "unknown";
  reply.send({ message: `User ${name || "unknown"} created successfully` });
};

export default { getUsers, createUser };
