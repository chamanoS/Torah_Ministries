import express from "express";
import cors from "cors";

import bookRoutes from "./modules/books/books.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("BookWise API is running");
});

export default app;
