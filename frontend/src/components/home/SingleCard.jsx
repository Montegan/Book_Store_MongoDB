import React, { useState } from "react";
import { FaReadme } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";

import { Link } from "react-router-dom";
import BookModal from "../Modal/BookModal";

const SingleCard = ({ item }) => {
  const [close, setClose] = useState(false);

  return (
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

      <div className="flex mt-10 p-3 justify-between bg-white rounded-2xl shadow-inner shadow-slate-400 ">
        <BiShow
          className="text-2xl text-purple-500 cursor-pointer  hover:text-purple-700 "
          onClick={() => setClose(true)}
        />

        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-green-500  hover:text-green-700" />
        </Link>
        <Link className="" to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-yellow-400 hover:text-yellow-600 " />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-400  hover:text-red-600 " />
        </Link>
      </div>

      {close && <BookModal item={item} onClick={() => setClose(false)} />}
    </div>
  );
};

export default SingleCard;
