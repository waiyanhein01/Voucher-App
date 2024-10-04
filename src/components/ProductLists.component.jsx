import React from "react";
import useSWR from "swr";
import ProductRowComponent from "./ProductRow.component";
import ProductSkeletonComponent from "./ProductSkeleton.component";
import ProductEmptyRowComponent from "./ProductEmptyRow.component";
import api from "../api/Api";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductListsComponent = () => {

  const { data, isLoading, error } = useSWR(
    api+"/products",
    fetcher
  );
 
  // if (isLoading) return <div>Loading...</div>;

  // if(isLoading) return <div>Loading...</div>
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Created At
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <ProductSkeletonComponent colSpan={5} />
          ) : data.length === 0 ? (
            <ProductEmptyRowComponent />
          ) : (
            data.map((product) => (
              <ProductRowComponent key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListsComponent;
