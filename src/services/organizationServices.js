import { pool } from "../config/db.js";

const getAllOrganizations = async (req, reply) => {
  let page = parseInt(req.query.page, 10) || 1;
  let limit = parseInt(req.query.limit, 10) || 10;
  if (page < 1) page = 1;
  if (limit < 1 || limit > 100) limit = 10;
  const offset = (page - 1) * limit;

  const query = `
    SELECT
    o.deleted_at,
    o.created_at,
    o.id,
    o.name
  FROM
    \`my-db\`.\`organization\` o
  Where o.is_demo = 1 and o.deleted_at = 0
  LIMIT ${limit} OFFSET ${offset};
`;

  try {
    await pool.getConnection();
    const organizations = await pool.query(query);
    reply.send({ organizations: organizations });
  } catch (err) {
    throw err;
  }
};

export default { getAllOrganizations };
