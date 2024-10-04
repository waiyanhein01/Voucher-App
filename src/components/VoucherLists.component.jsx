import React from "react";
import useSWR from "swr";
import api from "../api/Api";
import VoucherListRowComponent from "./VoucherListRow.component";
import ProductEmptyRowComponent from "./ProductEmptyRow.component";
import VoucherSkeletonComponent from "./VoucherSkeleton.component";

const fetcher = (url) => fetch(url).then((r) => r.json());

const VoucherListsComponent = () => {
  const { data, isLoading, error } = useSWR(api + "/vouchers", fetcher);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              Customer Email
            </th>
            <th scope="col" className="px-6 py-3 text-right text-nowrap">
              Slip Number
            </th>
            <th scope="col" className="px-6 py-3 text-right text-nowrap">
              Sale date
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
          {isLoading ? (
            <VoucherSkeletonComponent />
          ) : data.length === 0 ? (
            <ProductEmptyRowComponent colSpan={7} />
          ) : (
            data?.map((voucher, index) => (
              <VoucherListRowComponent
                key={voucher.id}
                voucher={voucher}
                index={index}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VoucherListsComponent;
