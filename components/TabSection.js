import Image from 'next/image';
import React from 'react';
import company from '../public/assets/company.png';

export default function TabSection() {
  return (
    <div className="max-w-2xl">
      <div className="flex flex-row justify-start items-center mb-5 p-5 gap-4">
        <div>
          <Image className="rounded-full" src={company} alt="" width="100" height="100" />
        </div>
        <p className="text-2xl">PARTNER 1</p>
      </div>
      <div className=" mb-4">
        <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2" role="presentation">
            <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Semua Produk</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Update Produk</button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the
            {' '}
            <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the
            {' '}
            <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
