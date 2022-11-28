import React from 'react';
import Drops from './Drops';

export default function Dropdown({
  data, buttonName, idButton, onSelectChange,
}) {
  return (
    <>
      <button
        id={`${idButton}Default`}
        data-dropdown-toggle={`${idButton}`}
        className="text-gray-400 border border-gray-200 bg-gray-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {buttonName}
        <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div
        id={`${idButton}`}
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`${idButton}Default`}>
          {
        data.map((item) => (
          <li key={item.id}>
            <p
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => onSelectChange(item)}
            >
              {item.label}
            </p>
          </li>
        ))
      }
        </ul>
      </div>
    </>
  );
}
