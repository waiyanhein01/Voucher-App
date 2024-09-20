import React from "react";
import ContainerComponent from "../components/Container.component";
import BreadcrumbComponent from "../components/Breadcrumb.component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateProductPage = () => {
  const { register, handleSubmit } = useForm();

  const createFormHandle = (data) => {
    console.log(data)
  };
  return (
    <ContainerComponent>
      <BreadcrumbComponent
        currentPage={"Create Product"}
        links={[{ title: "Product Module", path: "/product" }]}
      />
      <div className=" w-full md:w-1/2 border rounded-lg p-5">
        <h1 className=" text-xl font-bold">Create New Product</h1>
        <p className=" text-stone-500 text-sm">
          Building a new product is essential for the growth and sustainability
          of your business.
        </p>

        <form onSubmit={handleSubmit(createFormHandle)} className=" mt-5">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="first_name"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              placeholder="eg.apple"
              required
            />
          </div>

          <div className="mt-3">
            <label
              htmlFor="last_name"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              {...register("price")}
              type="number"
              id="last_name"
              className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
              placeholder="eg.500"
              required
            />
          </div>

          <div className="flex items-center mt-3">
            <input
              {...register("checkbox")}
              required
              id="all-correct"
              type="checkbox"
              defaultValue
              className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="all-correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure all field are correct!
            </label>
          </div>

          <div className=" mt-3">
            <Link
              to={"/product"}
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-500 focus:z-10 focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </Link>

            <button
              type="submit"
              class="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-1 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </ContainerComponent>
  );
};

export default CreateProductPage;
