import React, { useEffect, useState } from "react";
import axios from "axios";
import Spiner from "../components/Spiner";
import { useNavigate } from "react-router-dom";

const CreateBook = ({ setNotification }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishyear: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:2000/books/", book);
      console.log("Book created successfully", res.data); // Log success
      setLoading(false);
      navigate("/");
      setNotification("created");
    } catch (error) {
      console.log(error);
    }
    console.log(book);
  };

  return (
    <div className="p-4 flex flex-col">
      <h1 className="p-4 text-3xl">Create Book</h1>
      {loading ? (
        <Spiner></Spiner>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-4 w-[600px] h-[60vh] rounded-lg flex flex-col gap-6 items-center justify-center mt-5 mx-auto bg-neutral-200"
        >
          <div className="w-[70%]  flex flex-col ">
            <label className=" text-lg w-fit " htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              className=" w-full min-w-[100px] focus:outline-none bg-slate-100 p-2 rounded-md"
              value={book.title}
              onChange={(e) => {
                setBook({ ...book, title: e.target.value });
              }}
            />
          </div>

          <div className="w-[70%] flex flex-col ">
            <label className="text-lg w-fit " htmlFor="author">
              author
            </label>
            <input
              className="  w-full min-w-[100px] focus:outline-none bg-slate-100 p-2 rounded-md"
              id="author"
              type="text"
              value={book.author}
              onChange={(e) => {
                setBook({ ...book, author: e.target.value });
              }}
            />
          </div>

          <div className="w-[70%] flex flex-col ">
            <label className=" text-lg w-fit " htmlFor="publish">
              Publish date
            </label>
            <input
              className="  w-full min-w-[100px] focus:outline-none bg-slate-100 p-2 rounded-md"
              id="publish"
              type="number"
              value={book.publishyear}
              onChange={(e) => {
                setBook({ ...book, publishyear: e.target.value });
              }}
            />
          </div>

          <button
            className="w-[100px] h-[40px] mt-3  bg-green-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateBook;
