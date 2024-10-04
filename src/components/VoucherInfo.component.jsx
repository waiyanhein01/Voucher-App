import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import VoucherProductFormComponent from "./SaleProductForm.component";
import VoucherProductTableComponent from "./SaleProductTable.component";
import useRecordStore from "../store/useRecordStore";
import api from "../api/Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VoucherInfoComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  tailspin.register();

  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useRecordStore();

  const generateVoucherID = (length = 10) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let voucherID = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      voucherID += characters[randomIndex];
    }

    return voucherID;
  };

  const nav = useNavigate();

  const createVoucherHandle = async (data) => {
    setIsSending(true);
    const total = records.reduce((pv, cv) => {
      return pv + cv.cost;
    }, 0);

    const tax = total * 0.05;

    const netTotal = total + tax;
    const currentData = { ...data, records, total, tax, netTotal };
    const res = await fetch(api + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentData),
    });

    const response = await res.json();

    setIsSending(false);
    toast.success("Create voucher successfully");
    resetRecord();
    reset();
    if (data.voucher_details) {
      nav("/voucher/details/" + response.id);
    }
  };
  return (
    <div>
      <h1 className=" text-xl font-bold mb-3">Voucher</h1>
      <form
        className="mb-5 shadow rounded-lg p-4 grid grid-cols-4 gap-3"
        onSubmit={handleSubmit(createVoucherHandle)}
        id="formInfo"
      >
        <div className="md:col-span-1 col-span-4">
          <label
            htmlFor="voucher_id"
            className={`block mb-1 text-sm font-medium ${
              errors.voucher_id ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Voucher ID
          </label>
          <input
            {...register("voucher_id", {
              required: true,
            })}
            defaultValue={generateVoucherID()}
            type="text"
            id="voucher_id"
            className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
              errors.voucher_id
                ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
            } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
            placeholder="eg.h123123"
          />
          {errors.voucher_id && (
            <span className=" text-red-500 text-xs">
              Voucher ID is required
            </span>
          )}
        </div>

        <div className="md:col-span-1 col-span-4">
          <label
            htmlFor="customer_name"
            className={`block mb-1 text-sm font-medium ${
              errors.customer_name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Customer Name
          </label>
          <input
            {...register("customer_name", {
              required: true,
            })}
            type="text"
            id="customer_name"
            className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
              errors.customer_name
                ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
            } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
            placeholder="eg.mgmg"
          />
          {errors.customer_name && (
            <span className=" text-red-500 text-xs">
              Customer Name is required
            </span>
          )}
        </div>

        <div className="md:col-span-1 col-span-4">
          <label
            htmlFor="customer_email"
            className={`block mb-1 text-sm font-medium ${
              errors.customer_email ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Customer Email
          </label>
          <input
            {...register("customer_email", {
              required: true,
            })}
            type="text"
            id="customer_email"
            className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
              errors.customer_email
                ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
            } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
            placeholder="eg.mg@gmail.com"
          />
          {errors.customer_email && (
            <span className=" text-red-500 text-xs">
              Customer Email is required
            </span>
          )}
        </div>

        <div className="md:col-span-1 col-span-4">
          <label
            htmlFor="sale_date"
            className={`block mb-1 text-sm font-medium ${
              errors.sale_date ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Sale Date
          </label>
          <input
            {...register("sale_date", {
              required: true,
            })}
            defaultValue={new Date().toISOString().split("T")[0]}
            type="datetime-local"
            id="sale_date"
            className={`bg-gray-50 border outline-none text-gray-900 text-sm rounded-lg ${
              errors.sale_date
                ? "focus:ring-red-500 border-red-500 focus:border-red-500"
                : "focus:ring-cyan-500 border-gray-300 focus:border-cyan-500"
            } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500`}
            placeholder="eg.h123123"
          />
          {errors.sale_date && (
            <span className=" text-red-500 text-xs">Date is required</span>
          )}
        </div>
      </form>

      <div className=" shadow rounded-lg p-4 mb-5">
        <VoucherProductFormComponent />
        <VoucherProductTableComponent />
      </div>

      <div className="flex justify-between items-center gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <label
              htmlFor="voucher_details"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              Redirect to Voucher Details.
            </label>
            <input
              {...register("voucher_details")}
              id="voucher_details"
              type="checkbox"
              form="formInfo"
              defaultValue
              className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="flex items-center">
            <label
              htmlFor="all_correct"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure all fields are correct!
            </label>
            <input
              {...register("all_correct")}
              id="all_correct"
              type="checkbox"
              form="formInfo"
              defaultValue
              required
              className="w-4 h-4 text-cyan-700 bg-gray-100 border-gray-300 rounded focus:ring-cyan-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <div className="">
          <button
            form="formInfo"
            type="submit"
            className="text-white inline-flex gap-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-1 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-5 me-2 mb-2"
          >
            <span>Confirm Voucher</span>
            {isSending && (
              <l-tailspin
                size="20"
                stroke="2"
                speed="0.9"
                color="white"
              ></l-tailspin>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherInfoComponent;
