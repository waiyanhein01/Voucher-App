import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import ShowDateComponent from "./ShowDate.component";

const VoucherListRowComponent = ({voucher:{customer_name,customer_email,voucher_id,sale_date,netTotal},index}) => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index+1}
        </th>
        <td className="px-6 py-4">{customer_name}</td>
        <td className="px-6 py-4">{customer_email}</td>
        <td className="px-6 py-4 text-right">{voucher_id}</td>
        <td className="px-6 py-4 text-right text-nowrap text-xs">
            <ShowDateComponent timestamp={sale_date}/>
        </td>
        <td className="px-6 py-4 text-right">{netTotal}</td>
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
    </>
  );
};

export default VoucherListRowComponent;
