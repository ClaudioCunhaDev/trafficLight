import React, { useState } from "react";

export const City = ({ data }) => {
  const { image, name, info } = data;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="border-2 border-black p-3 w-[25rem] flex flex-col gap-3">
      <img
        className="border-4 border-gray-400 min-h-[30vh]"
        src={image}
        alt={name}
      />
      <h2>{name}</h2>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}{" "}
        <button
          className="text-blue-500"
          onClick={() => setReadMore((prv) => !prv)}
        >
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};
