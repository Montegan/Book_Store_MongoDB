import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spiner from "../components/Spiner";
import { useNotification } from "../Context/AppState";

const EditBook = () => {
  const [book, setBook] = useState({
    title: "",
    Author: "",
    publishYear: "",
  });
  const [Loading, setLoading] = useState(false);
  const { setNotification } = useNotification();
  const id = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getOldData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`http://localhost:2000/books/${id.id}`);
        console.log(result);
        setBook({
          ...book,
          title: result.data.title,
          Author: result.data.Author,
          publishYear: result.data.publishYear,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOldData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:2000/books/${id.id} `,
        book
      );
      console.log(res.data);
      setLoading(false);
      setNotification("edited");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="p-4 text-3xl">Edit Book</h1>
      {Loading ? (
        <Spiner />
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
              value={book.Author}
              onChange={(e) => {
                setBook({ ...book, Author: e.target.value });
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
              value={book.publishYear}
              onChange={(e) => {
                setBook({ ...book, publishYear: e.target.value });
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

export default EditBook;
