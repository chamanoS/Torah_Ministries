import * as bookService from "./books.service.js";

export const getAllBooks = async (req, res) => {
  const books = await bookService.getAllBooks();
  res.json(books);
};

export const createBook = async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(201).json(book);
};
