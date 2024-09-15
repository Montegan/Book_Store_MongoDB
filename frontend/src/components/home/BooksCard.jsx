import React from "react";
import { FaReadme } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksCard = ({ books }) => {
  return (
    <div className="p-4 grid sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <div
          key={item._id}
          className=" border shadow-lg border-gray-400 rounded-xl p-6 relative  "
        >
          <h1 className=" absolute top-[23px] right-5 border bg-green-300 px-3 rounded-lg">
            {item.publishYear}
          </h1>
          <h1 className=" text-gray-500">{item._id}</h1>
          <div className="flex mt-4 justify-start items-center gap-x-2">
            <FaReadme className="text-red-400 text-xl" />
            <h1 className=" text-xl ">{item.title}</h1>
          </div>

          <div className="flex mt-4 justify-start items-center gap-2">
            <BsFillPersonFill className="text-red-400 text-xl" />
            <h1 className=" text-xl ">{item.Author}</h1>
          </div>

          <div className="flex mt-6 justify-between ">
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-xl text-green-500" />
            </Link>
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-xl text-yellow-500" />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className="text-xl text-red-500" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
