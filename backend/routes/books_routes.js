import { Router } from "express";
import { book } from "../models/book_model.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(404).send({ message: "Send all the requied fields" });
    }
    const newBook = {
      title: req.body.title,
      Author: req.body.author,
      publishYear: req.body.publishyear,
    };
    const result = await book.create(newBook);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await book.find({});

    res.status(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const books = await book.findById(bookId);

    res.status(200).send(books);
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bookid = req.params.id;
    const result = await book.findByIdAndUpdate(bookid, req.body);
    let message;
    let code;
    if (result) {
      message = "updated data successfully";
      code = 200;
    } else {
      message = `update failed ${result}`;
      code = 500;
    }
    console.log(message);
    res.status(code).send(message);
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bookid = req.params.id;
    const result = await book.findByIdAndDelete(bookid);
    let message;
    let code;
    if (result) {
      message = "Deleted data successfully";
      code = 200;
    } else {
      message = `delete failed`;
      code = 500;
    }
    console.log(message);
    res.status(code).send(message);
  } catch (error) {
    console.log(error.message);
    res.status(501).send({ message: error.message });
  }
});

export default router;
