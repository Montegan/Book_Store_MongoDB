import React from "react";

const Spiner = () => {
  return (
    <div className="h-[80vh] w-[95vw]  flex flex-col items-center justify-center">
      <div className="animate-spin border-4 border-black rounded-full border-l-[#0000005c]  w-8 h-8 "></div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Spiner;
