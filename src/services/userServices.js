import { pool } from "../config/db.js";

const getAllUsers = async (req, reply) => {
  console.log({ user: "getAllUsers" });
  let page = parseInt(req.query.page, 10) || 1;
  let limit = parseInt(req.query.limit, 10) || 10;
  if (page < 1) page = 1;
  if (limit < 1 || limit > 100) limit = 10;
  const offset = 0 * limit;

  const queryUsers = `
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

  const queryRolesInfo = `
  SELECT
  a.id AS assignment_id,
  r.name AS role_name,
  r.purpose,
  u.id AS user_id
FROM
  \`auth-db\`.assignment a
JOIN
  \`auth-db\`.user u
ON
  u.deleted_at = FALSE
  AND a.user_id = u.id
JOIN
  \`auth-db\`.role r
ON
  r.deleted_at = FALSE
  AND r.id = a.role_id
WHERE
  a.deleted_at = FALSE;
  `;

  try {
    await pool.getConnection();
    const users = await pool.query(queryUsers);
    const rolesInfo = await pool.query(queryRolesInfo);
    for (const user of users) {
      const roleInfo = rolesInfo.find(
        (role) => role.user_id === user.auth_user_id
      );
      if (roleInfo) {
        // Create a new object with only the desired fields
        const { user_id, ...roleWithoutUserId } = roleInfo;
        user.role = roleWithoutUserId;
      }
    }
    reply.send({ users: users });
  } catch (err) {
    throw err;
  }
};

export default { getAllUsers };
