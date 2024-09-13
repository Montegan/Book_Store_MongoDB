import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";

const ShowBook = () => {
  const [books, setBooks] = useState();
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      try {
        const bookDetails = await axios.get(
          `http://localhost:2000/books/${id}`
        );
        if (bookDetails) {
          setBooks(bookDetails.data);
          console.log(bookDetails.data);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);

  return (
    <div className=" p-4 w-fit ">
      <h1 className="p-4 text-3xl">Book Details</h1>
      {Loading ? (
        <Spiner />
      ) : (
        <div className="flex flex-col gap-8 bg-slate-300 p-4 border-2 border-blue-300 rounded-lg ">
          <div>
            <span className="  text-black text-lg">Title: </span>
            <span>{books.title}</span>
          </div>
          <div>
            <span className=" text-black text-lg">Author: </span>
            <span>{books.Author}</span>
          </div>
          <div>
            <span className=" text-black text-lg">Publish Year: </span>
            <span>{books.publishYear}</span>
          </div>
          <div>
            <span className=" text-black text-lg">Created at: </span>
            <span>{new Date(books.createdAt).toString()}</span>
          </div>
          <div>
            <span className=" text-black text-lg">Updated at: </span>
            <span>{new Date(books.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
