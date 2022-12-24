import classNames from "classnames";
import _ from "lodash";
import React from "react";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
  onNextChange,
  onPrevChange,
}) {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageSize + 1);

  const classActive = (page) =>
    classNames(
      "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
      {
        "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white":
          currentPage === page,
      }
    );

  return (
    <div className="flex bg-white rounded-lg font[Poppins">
      <button
        onClick={onPrevChange}
        className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white w-12"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      {pages.map((page, i) => {
        const classes = classActive(page);
        return (
          <button
            key={i}
            onClick={() => onPageChange(page)}
            className={`h-12 border-2 border-r-0 w-12  ${classes}`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={onNextChange}
        className="h-12 border-2 border-indigo-600 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
