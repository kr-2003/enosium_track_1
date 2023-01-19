import React, { useContext } from "react";
import { authApi } from "../pages/_app";

function FormII() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    setNoOfLoans,
    setAge,
    setSavingsAmount,
    setInstPercent,
    setOtherPlans,
    setAbroad,
    setCurrentAmount,
  } = useContext(authApi);
  return (
    <>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Number of Loans
          </label>

          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setNoOfLoans(e.target.value)}
          >
            <option selected>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Age</label>

          <input
            type="number"
            id="points"
            name="loan amount taken"
            min="18"
            max="100"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Savings Amount
          </label>

          <select
            onChange={(e) => setSavingsAmount(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="less than 100">less than 100</option>
            <option value="no savings account">no savings account</option>
            <option value="between 500 and 1000">between 500 and 1000</option>
            <option value="between 100 and 500">between 100 and 500</option>
            <option value="greater than 1000">greater than 1000</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Other loans plans
          </label>

          <select
            onChange={(e) => setOtherPlans(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="none">none</option>
            <option value="bank">bank</option>
            <option value="stores">stores</option>
          </select>
        </div>

        <div className="col-span-6 sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            Installment percent of income
          </label>

          <input
            onChange={(e) => setInstPercent(e.target.value)}
            type="number"
            id="points"
            name="loan amount taken"
            min="1"
            max="4"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Current Amount
          </label>

          <select
            onChange={(e) => setCurrentAmount(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="no current account">no current account</option>
            <option value="less than 0">less than 0</option>
            <option value="between 0 and 200">between 0 and 200</option>
            <option value="greater than 200">greater than 200</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Working Abroad
          </label>

          <select
            onChange={(e) => setAbroad(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Number of Loans
          </label>

          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">Age</label>

          <input
            type="number"
            id="points"
            name="loan amount taken"
            min="18"
            max="100"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
          />
        </div> */}
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 w-100 flex justify-center items-center">
          <button className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default FormII;
