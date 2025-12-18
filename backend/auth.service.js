// auth.service.js
import sql from "../../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (name, email, password) => {
  const hashed = await bcrypt.hash(password, 10);
  await sql.query`INSERT INTO Users (name, email, password) VALUES (${name}, ${email}, ${hashed})`;
};

export const loginUser = async (email, password) => {
  const result = await sql.query`SELECT * FROM Users WHERE email = ${email}`;
  const user = result.recordset[0];
  if (!user) throw new Error("User not found");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
