import { pool } from "../config/db.js";

const getAllUsers = async (req,reply) => {
  console.log({user: 'getAllUsers'});
  let page = parseInt(req.query.page, 10) || 1;
  let limit = parseInt(req.query.limit, 10) || 10;
  if (page < 1) page = 1;
  if (limit < 1 || limit > 100) limit = 10;
  const offset = 0 * limit;

  const query = `
   SELECT
  e.deleted_at,
  e.id,
  e.created_at,
  e.name,
  e.organization_id,
  e.auth_user_id
FROM
  \`my-db\`.\`employee\` e
LIMIT ${limit} OFFSET ${offset};
`;

  try {
    await pool.getConnection();
    const users = await pool.query(query);
    reply.send({'users':users});
  } catch (err) {
    throw err;
  }
};

export default { getAllUsers };
