import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useNotification } from "../Context/AppState";
const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    Author: "",
    publishYear: "",
  });
  const { setNotification } = useNotification();
  useEffect(() => {
    const getOldData = async () => {
      try {
        const result = await axios.get(`http://localhost:2000/books/${id}`);
        console.log(result);
        setBook({
          ...book,
          title: result.data.title,
          Author: result.data.Author,
          publishYear: result.data.publishYear,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getOldData();
  }, []);

  const delteBook = async () => {
    try {
      const res = await axios.delete(`http://localhost:2000/books/${id}`);
      console.log(res);
      console.log(`book id: ${id} delted`);
      setNotification("deleted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" p-4">
      <h1 className="p-4 text-3xl">Delete Book</h1>
      <div className=" shadow-[0px_0px_30px] shadow-slate-300 bg-[#ffffff] min-w-[500px] h-[250px] w-fit p-6 flex flex-col gap-8 justify-center rounded-lg items-center mt-[100px] mx-auto ">
        <p className="text-xl p-2">
          Are you sure you want to delete Book
          <span className=" ml-1 text-2xl font-bold">{book.title} </span> ?
        </p>
        <div className="flex w-full justify-around">
          <button
            className=" bg-[tomato] rounded-md w-[150px] h-11"
            onClick={delteBook}
          >
            Yes
          </button>
          <button
            className="bg-green-400 rounded-md w-[150px] h-11"
            onClick={() => {
              navigate("/");
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
