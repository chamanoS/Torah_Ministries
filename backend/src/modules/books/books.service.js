import sql from "../../config/db.js";

export const getAllBooks = async () => {
  const result = await sql.query("SELECT * FROM Books");
  return result.recordset;
};

export const createBook = async (book) => {
  const { title, author, description } = book;

  await sql.query`
    INSERT INTO Books (title, author, description)
    VALUES (${title}, ${author}, ${description})
  `;

  return { message: "Book created" };
};
