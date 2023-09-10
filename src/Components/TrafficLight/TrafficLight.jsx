import React, { useState } from "react";
import { Light } from "./Light";

export const TrafficLight = () => {
  const allColors = ["red", "yellow", "green"];
  const [cor, setCor] = useState("");

  return (
    <div className="border-2 border-black w-[30rem] h-[50vh] flex justify-center items-center">
      <div className="border-2 border-black flex flex-col gap-1 p-3 items-center w-16 bg-black">
        <Light allColors={allColors} cor={cor} setCor={setCor} />
      </div>
    </div>
  );
};

{
  /* <div
          onClick={() => setCor("red")}
          className={`rounded-full w-10 h-10 bg-red-500 ${
            cor === "red" ? "opacity-100 border-2 border-white" : "opacity-50"
          } hover:opacity-100`}
        ></div>
        <div
          onClick={() => setCor("yellow")}
          className={`rounded-full w-10 h-10 bg-yellow-500 ${
            cor === "yellow"
              ? "opacity-100 border-2 border-white"
              : "opacity-50"
          } hover:opacity-100`}
        ></div>
        <div
          onClick={() => setCor("green")}
          className={`rounded-full w-10 h-10 bg-green-500 ${
            cor === "green" ? "opacity-100 border-2 border-white" : "opacity-50"
          } hover:opacity-100`}
        ></div> */
}
