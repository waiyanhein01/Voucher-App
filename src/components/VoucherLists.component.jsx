import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";

const VoucherListsComponent = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Voucher No
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-6 py-4">1</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Wai Yan
            </td>
            <td className="px-6 py-4 text-end">#0078</td>
            <div className=" flex flex-col py-4 items-end justify-center text-stone-400">
            <td className="px-6 text-end">Sep 9 2024</td>
            <td className="px-6 text-end">8:54 PM</td>
            </div>
            <td className="px-6 py-4 text-end">
              <div class="inline-flex rounded-md shadow-sm">
                <button
                  aria-current="page"
                  class="px-4 py-2 text-sm font-medium text-stone-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <HiOutlinePencil className=" pointer-events-none" />
                </button>
                
                <button
                  class="px-4 py-2 text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
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
