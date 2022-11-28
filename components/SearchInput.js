import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function SearchInput({ handleSearch, arrFilter }) {
  const router = useRouter();
  return (
    <div className="flex items-center">
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-4 focus:ring-blue-300  block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Cari"
          required
          name="cari"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <Link
        href={`products/${arrFilter.kategori}`}
      >
        <button
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-32"
        >
          Cari
        </button>
      </Link>
    </div>
  );
}
