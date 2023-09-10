import React from "react";

export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-1">
      {pages.map((ele, idx) => (
        <button
          className={`${
            currentPage === ele ? "bg-blue-500" : ""
          } border-2 border-black p-3 hover:bg-blue-500`}
          key={idx}
          onClick={() => setCurrentPage(ele)}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};
