import React from "react";

import SingleCard from "./SingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="p-4 grid sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <SingleCard item={item} />
      ))}
    </div>
  );
};

export default BooksCard;
