import sql from "mssql/msnodesqlv8.js";
import dotenv from "dotenv";

dotenv.config();

const config = {
  server: "localhost", // or "localhost\\SQLEXPRESS"
  database: process.env.DB_NAME,
  driver: "ODBC Driver 18 for SQL Server", // driver at top level
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

export const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("✅ MSSQL connected (Windows Auth)");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
  }
};

export default sql;
