import React, { useEffect, useState } from "react";

export const Light = ({ allColors, setCor, cor }) => {
  return (
    <div>
      {allColors?.map((ele, idx) => (
        <button
          key={idx}
          onClick={() => setCor(ele)}
          className={`rounded-full w-10 h-10 bg-${ele}-500 hover:opacity-100 ${
            cor === ele ? "opacity-100 border-2 border-white" : "opacity-60"
          }`}
        ></button>
      ))}
    </div>
  );
};
