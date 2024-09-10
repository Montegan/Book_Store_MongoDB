import express from "express";
import { PORT, mongodURL } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routes/books_routes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.use("/books", bookRouter);
mongoose
  .connect(mongodURL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("server running on port 2000");
});
