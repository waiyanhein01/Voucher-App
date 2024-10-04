import React from "react";
import useRecordStore from "../store/useRecordStore";
import SaleTableRowComponent from "./SaleTableRow.component";

const SaleProductTableComponent = () => {
  const { records } = useRecordStore();

  const total = records.reduce((pv, cv) => {
    return pv + cv.cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  // const {product:{price,product_name,id},cost,quantity} = records
  return (
    <div className="overflow-x-auto shadow rounded-lg">
      <div data-testid="table-element" className="relative">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black" />
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="group/head text-xs uppercase text-gray-700 dark:text-gray-400">
            <tr>
              <th className="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">#</th>
              <th className="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                Product name
              </th>
              <th className="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700 text-end">
                Price
              </th>
              <th className="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700 text-end">
                Quantity
              </th>
              <th className="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700 text-end">
                Cost
              </th>
              <th className="bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="group/body divide-y">
            {records.length === 0 ? (
              <tr
                data-testid="table-row-element"
                className="group/row odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
              >
                <td
                  className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg whitespace-nowrap text-center font-medium text-gray-900 dark:text-white"
                  colSpan={6}
                >
                  There is no record.
                </td>
              </tr>
            ) : (
              records.map((record, index) => (
                <SaleTableRowComponent
                  key={record.id}
                  record={record}
                  index={index}
                />
              ))
            )}
          </tbody>
          <tfoot className="group/foot uppercase text-gray-700 dark:text-gray-400">
            <tr
              data-testid="table-row-element"
              className="group/row odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <td
                className="px-6 py-4 font-bold group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end"
                colSpan={4}
              >
                Total
              </td>
              <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end">
                {total.toFixed(2)}
              </td>
              <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg" />
            </tr>

            <tr
              data-testid="table-row-element"
              className="group/row odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <td
                className="px-6 py-4 font-bold group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end"
                colSpan={4}
              >
                Tax(5% MMK)
              </td>
              <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end">
                {tax.toFixed(2)}
              </td>
              <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg" />
            </tr>

            <tr
              data-testid="table-row-element"
              className="group/row odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
            >
              <td
                className="px-6 py-4 font-bold group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end"
                colSpan={4}
              >
                Net Total
              </td>
              <td className="px-6 py-4 font-bold group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg text-end">
                {netTotal.toFixed(2)}
              </td>
              <td className="px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg" />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SaleProductTableComponent;
