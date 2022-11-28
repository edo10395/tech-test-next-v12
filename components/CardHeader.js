import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import company from '../public/assets/company.png';

export default function CardHeader({ arrTab, handleTab, currentTab }) {
  const getTabsClasses = (idTab) => classNames(
    'inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-xl font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300',
    {
      active: currentTab.idTab === idTab,
    },
  );

  return (
    <div className="max-w-full bg-white rounded-md mb-10">
      <div className="flex flex-row justify-start items-center mb-5 p-5 gap-4">
        <div>
          <Image className="rounded-full" src={company} alt="" width="100" height="100" />
        </div>
        <p className="text-2xl">PARTNER 1</p>
      </div>
      <div className="ml-3">
        <ul
          className="flex flex-wrap -mb-px"
        >
          {
            arrTab.map((item) => {
              const classes = getTabsClasses(item.idTab);
              return (
                <li key={item.id} className="mr-2" role="presentation">
                  <button
                    className={classes}
                    id={`${item.idTab}-tab`}
                    data-tabs-target={`#${item.idTab}`}
                    type="button"
                    role="tab"
                    aria-controls={`${item.idTab}`}
                    aria-selected="true"
                    onClick={() => handleTab(item)}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })
        }
        </ul>
      </div>
    </div>
  );
}
