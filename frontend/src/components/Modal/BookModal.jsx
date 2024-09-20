import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ item, onClick }) => {
  return (
    <div
      className="z-50 bg-black bg-opacity-50 fixed right-0 left-0 top-0 cursor-pointer bottom-0 flex items-center justify-center"
      onClick={onClick}
    >
      <div
        className=" w-fit max-w-[600px] p-4 rounded-xl bg-white cursor-default "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h1 className=" border w-fit bg-green-300 px-3 rounded-lg">
            {item.publishYear}
          </h1>
          <AiOutlineClose
            className="text-2xl text-slate-100 bg-red-400 cursor-pointer  rounded-full p-1 "
            onClick={onClick}
          />
        </div>

        <h1 className=" mt-3 text-gray-500">{item._id}</h1>
        <div className="flex mt-4 justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-400 text-xl" />
          <h1 className=" text-xl ">{item.title}</h1>
        </div>

        <div className="flex mt-4 justify-start items-center gap-2">
          <BiUserCircle className="text-red-400 text-xl" />
          <h1 className=" text-xl ">{item.Author}</h1>
        </div>

        <p className="mt-4">Any text goes here</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, qui
          officia sit laudantium rerum blanditiis fugit error. Quasi illo sequi
          reiciendis quas est, odit adipisci suscipit deleniti temporibus!
          Tempora, nostrum. Blanditiis reprehenderit et perferendis adipisci
          porro. Cupiditate nam officia eaque! Consectetur ipsa eos voluptatem
          quisquam nisi repellendus quas facere, minima consequuntur sapiente,
          odio accusamus assumenda, officia iure recusandae dolores aliquam!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
