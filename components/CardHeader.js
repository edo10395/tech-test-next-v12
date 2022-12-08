import classNames from "classnames";
import Image from "next/image";
import React from "react";
import company from "../public/assets/company.png";

export default function CardHeader({ arrTab, handleTab, currentTab }) {
  const getTabsClasses = (idTab) =>
    classNames(
      "inline-flex p-4 rounded-t-lg border-b-2 border-transparent  group",
      {
        "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group":
          currentTab.idTab === idTab,
      }
    );
  const getIconClasses = (idTab) =>
    classNames("mr-2 w-5 h-5 text-gray-600 dark:text-gray-500", {
      "mr-2 w-5 h-5 text-blue-600 dark:text-blue-500":
        currentTab.idTab === idTab,
    });
  return (
    <div className="max-w-full bg-white rounded-md mb-10">
      <div className="flex flex-row justify-start items-center mb-5 p-5 gap-4">
        <div>
          <Image
            className="rounded-full"
            src={company}
            alt=""
            width="100"
            height="100"
          />
        </div>
        <p className="text-2xl">PARTNER 1</p>
      </div>

      <div class="border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {arrTab.map((item) => {
            const classes = getTabsClasses(item.idTab);
            const classesIcon = getIconClasses(item.idTab);
            return (
              <li className="mr-2" key={item.idTab}>
                <button
                  className={classes}
                  aria-current="page"
                  onClick={() => handleTab(item)}
                >
                  <svg
                    aria-hidden="true"
                    className={classesIcon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
