import mongoose, { model } from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Author: { type: String, required: true },
    publishYear: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const book = mongoose.model("booksters", bookSchema);
