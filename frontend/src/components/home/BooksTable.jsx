import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className=" w-full  border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">ID</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md">Author</th>
          <th className="border border-slate-600 rounded-md">Publish Year</th>
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
  );
};

export default BooksTable;
