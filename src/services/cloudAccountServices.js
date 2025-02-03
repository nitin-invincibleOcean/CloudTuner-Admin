import { pool } from "../config/db.js";

const getAllCloudAccounts = async (req, reply) => {
  let page = parseInt(req.query.page, 10) || 1;
  let limit = parseInt(req.query.limit, 10) || 10;
  if (page < 1) page = 1;
  if (limit < 1 || limit > 100) limit = 10;
  const offset = (page - 1) * limit;

  const query = `
    SELECT
    ca.deleted_at,
    ca.id,
    ca.created_at,
    ca.name,
    ca.type,
    ca.organization_id
  FROM
    \`my-db\`.\`cloudaccount\` ca
  LIMIT ${limit} OFFSET ${offset};
`;

  try {
    await pool.getConnection();
    const cloudAccounts = await pool.query(query);
    reply.send({ cloudAccounts: cloudAccounts });
  } catch (err) {
    throw err;
  }
};

export default { getAllCloudAccounts };
