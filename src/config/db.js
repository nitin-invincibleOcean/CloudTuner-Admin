import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: process.env.DB_HOST, //e.g., localhost
  port: process.env.DB_PORT, //e.g., 3306
  user: process.env.DB_USER, //e.g., root
  password: process.env.DB_PASSWORD, //e.g., root
  connectionLimit: 5,
});

const testDBConnection = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log("✅ Connected to MariaDB");
  } catch (err) {
    console.error("❌ Failed to connect to MariaDB: ", err);
    process.exit(1);
  } finally {
    if (connection) connection.release();
  }
};

export { testDBConnection, pool };
