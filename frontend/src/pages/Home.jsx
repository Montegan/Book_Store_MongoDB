import React, { useEffect, useMemo, useState } from "react";
import Spiner from "../components/Spiner";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BooksTable from "../components/home/booksTable";
import BooksCard from "../components/home/booksCard";
import { useNotification } from "../Context/AppState";
import { IoAlertCircleOutline } from "react-icons/io5";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState("");
  const { notification, setNotification } = useNotification();
  const [showType, setShowtype] = useState(
    localStorage.getItem("view") || "table"
  );

  useEffect(() => {
    notification == "deleted" && setDeleted(" Book deleted successfully ");
    notification == "created" && setDeleted("Book created successfully");
    notification == "edited" && setDeleted("Book edited successfully");

    const savedView = localStorage.getItem("view");
    if (savedView) {
      setShowtype(savedView);
    }

    setTimeout(() => {
      setNotification("");
    }, 2000);
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:2000/books/");
        if (result) {
          setBooks(result.data.data);
          setLoading(false);
        }
        console.log(result.data);
      } catch (error) {
        console.error(error);
        setError("Error while loading data, Please reload page");
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        {
          <>
            <button
              onClick={() => {
                setShowtype("table");
                localStorage.setItem("view", "table");
              }}
              className={
                showType == "table" &&
                "border-b-4 bg-slate-100   border-b-black  focus:bg-slate-300 px-6 py-2"
              }
            >
              Table
            </button>

            <button
              onClick={() => {
                setShowtype("card");
                localStorage.setItem("view", "card");
              }}
              className={
                showType == "card" &&
                "border-b-4 bg-slate-100   border-b-black  focus:bg-slate-300 px-6 py-2"
              }
            >
              Card
            </button>
          </>
        }
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>

        <span
          className={
            notification == "deleted"
              ? "  bg-red-300 p-2  rounded-xl flex justify-center items-center gap-2 w-fit"
              : notification == "created"
              ? "  bg-green-300  p-2  rounded-xl flex justify-center items-center gap-2 w-fit"
              : notification == "edited"
              ? "  bg-yellow-300  p-2  rounded-xl flex justify-center items-center gap-2  w-fit"
              : " hidden "
          }
        >
          <IoAlertCircleOutline />
          {deleted}
        </span>

        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spiner></Spiner>
      ) : error ? (
        <h2>{error}</h2>
      ) : showType == "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
