import React from "react";
import api from "../api/Api";
import useSWR from "swr";
import { useParams } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VoucherDetailsCardComponent = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(api + "/vouchers/" + id, fetcher);
  console.log(data);
  return (
    <div className="max-w-2xl mx-auto bg-white p-3 shadow">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="">
          <div className="flex justify-between items-start mb-8">
            <div className=" ">
              <h1 className="text-black text-2xl font-bold">INVOICE</h1>
              <h2 className="">{data.voucher_id}</h2>
            </div>
            <div className="text-right">
              <p className="font-semibold">Invoice to</p>
              <p className="">{data.customer_name}</p>
              <p className="">{data.sale_date.slice(0, 10)}</p>
            </div>
          </div>

          <table className="w-full mb-8">
            <thead className="">
              <tr>
                <th className="text-left py-2 px-4">No</th>
                <th className="text-left py-2 px-4">PRODUCT</th>
                <th className="text-right py-2 px-4">PRICE</th>
                <th className="text-right py-2 px-4">QTY</th>
                <th className="text-right py-2 px-4">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((item, index) => (
                  <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{index+1}</td>
                  <td className="py-2 px-4">name</td>
                  <td className="text-right py-2 px-4">0.00</td>
                  <td className="text-right py-2 px-4">0</td>
                  <td className="text-right py-2 px-4">0.00</td>
                </tr>
              ))} */}
            </tbody>
          </table>

          <div className="flex justify-end mb-8">
            <div className="text-right">
              <p className="mb-2">
                <span className="font-semibold">SUB TOTAL</span> 0.00
              </p>
              <p className="mb-2">
                <span className="font-semibold">TAX</span> 0.00%
              </p>
              <p className="font-semibold">TOTAL 0.00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherDetailsCardComponent;
