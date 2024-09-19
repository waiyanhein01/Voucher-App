import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

const VoucherListsComponent = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Slip Number
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Create At
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">Wai Yan Hein</td>
            <td className="px-6 py-4 text-right">04556</td>
            <td className=" flex flex-col items-end px-6 py-2 text-neutral-400">
              <span className="">8 Set 2024</span>
              <span className="">5:00 PM</span>
            </td>
            <td className="px-6 py-4 text-right">1999</td>
            <td className="px-6 py-4 text-end">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  aria-current="page"
                  className="px-4 py-2 text-sm font-medium text-stone-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white"
                >
                  <HiOutlinePencil className=" pointer-events-none" />
                </button>

                <button className="px-4 py-2 text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:text-white">
                  <HiOutlineTrash className=" pointer-events-none" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherListsComponent;
