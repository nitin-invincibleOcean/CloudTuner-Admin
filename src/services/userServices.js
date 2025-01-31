import { pool } from "../config/db.js";

const getAllUsers = async () => {
  const limit = 20;
  const offset = 0 * limit;
  const query = `
   SELECT
  e.deleted_at,
  e.id,
  e.created_at,
  e.name,
  e.organization_id,
  e.auth_user_id,
  u.slack_connected,
  u.jira_connected,
  u.display_name AS user_display_name,
  u.email AS user_email
FROM
  \`auth-db\`.\`user\` u
JOIN
  \`my-db\`.\`employee\` e
ON
  u.id = e.auth_user_id
LIMIT ${limit} OFFSET ${offset};
`;

  try {
    await pool.getConnection();
    const users = await pool.query(query);
    return users;
  } catch (err) {
    throw err;
  }
};

export default { getAllUsers };
