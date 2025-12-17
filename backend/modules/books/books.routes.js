import express from "express";
import {
  getAllBooks,
  createBook,
} from "./books.controller.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);

export default router;
