import React, { useEffect, useState } from "react";
import Spiner from "../components/Spiner";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spiner></Spiner>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <table className=" w-full  border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">ID</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md">Author</th>
              <th className="border border-slate-600 rounded-md">
                Publish Year
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, indx) => (
              <tr key={item._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {indx + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {item.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {item.Author}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {item.publishYear}
                </td>

                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-4">
                    <Link to={`/books/edit/${item._id}`}>
                      <AiOutlineEdit className="text-2xl text-green-500" />
                    </Link>
                    <Link to={`/books/details/${item._id}`}>
                      <BsInfoCircle className="text-2xl text-yellow-500" />
                    </Link>
                    <Link to={`/books/delete/${item._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-500" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
