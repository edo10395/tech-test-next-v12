import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { arrKategori } from "../utils/DefaultArr";

export default function Drops({ items, buttonName, onSelectChange }) {
  return (
    <Menu>
      <Menu.Button className="text-gray-400 border border-gray-200 bg-gray-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {buttonName}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" z-10 absolute  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {items.map((item) => (
              <Menu.Item key={item.id} onClick={() => onSelectChange(item)}>
                {({ active }) => (
                  <p
                    key={item.id}
                    className={`${
                      active && "bg-skin-default"
                    } w-full rounded-md p-2`}
                    href="/account-settings"
                  >
                    {item.label}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
