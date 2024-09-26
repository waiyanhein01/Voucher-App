import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import api from "../api/Api";
import { useSWRConfig } from "swr";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

lineSpinner.register();

const ProductRowComponent = ({
  product: { id, product_name, price, created_at },
}) => {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const { mutate } = useSWRConfig();
  const date = new Date(created_at);
  const currentDay = date.toLocaleDateString("en-US", {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const deleteApi = async (id) => {
    setDeleteLoading(true);
    await fetch(`${api}/products/${id}`, {
      method: "DELETE",
    });
    mutate(api + "/products");
    setDeleteLoading(false);
    toast.success("Product delete successfully")
  };

  const deleteRowBtn = () => {
    deleteApi(id);
  };
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{id}</td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product_name}
        </td>
        <td className="px-6 py-4 text-end">{price}</td>
        <td className=" flex flex-col py-2 items-end justify-center text-stone-400">
          <span className="px-6 text-end">{currentTime}</span>
          <span className="px-6 text-end">{currentDay}</span>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm">
            <Link
            to={`edit/${id}`}
              aria-current="page"
              className="w-10 h-8 flex justify-center items-center text-sm font-medium text-stone-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil className=" pointer-events-none" />
            </Link>

            <button
              onClick={deleteRowBtn}
              className="w-10 h-8 flex justify-center items-center text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {deleteLoading ? (
                <l-line-spinner
                  size="20"
                  stroke="3"
                  speed="1"
                  color="red"
                ></l-line-spinner>
              ) : (
                <HiOutlineTrash className="pointer-events-none" />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRowComponent;
