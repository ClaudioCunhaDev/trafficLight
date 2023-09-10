import React, { useEffect, useState } from "react";
import { City } from "./City";
import { Pagination } from "./Pagination";

export const EveryCities = () => {
  const [towns, setTowns] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const URL = "https://course-api.com/react-tours-project";

  const getTowns = async () => {
    setLoading(true);
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    setTowns(data);
    setLoading(false);
  };

  useEffect(() => {
    getTowns();
  }, []);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;

  const newData = towns.slice(firstIndex, lastIndex);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {newData.map((ele) => (
        <City key={ele.id} data={ele} />
      ))}
      <div className="flex gap-5 font-bold">
        <button
          disabled={currentPage <= 1 ? true : false}
          onClick={() => setCurrentPage((prv) => prv - 1)}
          className={`p-3 border-2 rounded-full hover:bg-blue-500 ${
            currentPage <= 1 ? "bg-gray-300 hover:bg-gray-300" : ""
          }`}
        >
          Prev
        </button>

        <button
          disabled={currentPage >= towns.length ? true : false}
          onClick={() => setCurrentPage((prv) => prv + 1)}
          className={`p-3 border-2 rounded-full hover:bg-blue-500 ${
            currentPage >= towns.length ? "bg-gray-300 hover:bg-gray-300" : ""
          }`}
        >
          Next
        </button>
      </div>
      <Pagination
        totalPosts={towns.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
