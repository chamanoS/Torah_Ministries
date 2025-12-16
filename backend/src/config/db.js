import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: true,
  },
};

export const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("✅ MSSQL connected");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
  }
};

export default sql;
