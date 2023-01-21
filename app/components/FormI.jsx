import React, { useContext } from "react";
import { authApi } from "../pages/_app";

function FormI() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    setNoOfMaintainers,
    setHistory,
    setLoanAmount,
    setGorB,
    setMarital,
    setPurpose,
  } = useContext(authApi);
  return (
    <>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Number of Maintainers
          </label>

          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setNoOfMaintainers(e.target.value)}
          >
            <option selected>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Guarantor or Debtor
          </label>

          <select
            onChange={(e) => setGorB(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="gaurantor">Gaurantor</option>
            <option value="co-applicant">Co-applicant</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            History
          </label>

          <select
            onChange={(e) => setHistory(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="critical account/other loans existing (not at this bank)">
              Critical account/other loans existing (not at this bank)
            </option>
            <option value="existing loans paid back duly till now">
              Existing loans paid back duly till now
            </option>
            <option value="all loans at this bank paid back duly">
              All loans at this bank paid back duly
            </option>
            <option value="delay in paying off loans in the past">
              Delay in paying off loans in the past
            </option>
            <option value="no loans taken/all loans paid back duly">
              No loans taken/all loans paid back duly
            </option>
          </select>
        </div>
        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            Purpose
          </label>

          <select
            onChange={(e) => setPurpose(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="New Car Purchase">New Car Purchase</option>
            <option value="Purchase of radio/television">
              Purchase of radio/television
            </option>
            <option value="Old Car Repair">Old Car Repair</option>
            <option value="Purchase of furniture/equipment">
              Purchase of furniture/equipment
            </option>
            <option value="Other repairs">Other repairs</option>

            <option value="Education Loan">Education Loan</option>
            <option value="Loan for business establishment">
              Loan for business establishment
            </option>
            <option value="Loan for retraining">Loan for retraining</option>
            <option value="Purchase of domestic appliances">
              Purchase of domestic appliances
            </option>
            <option value="nan">None</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Loan Amount
          </label>

          <input
            type="number"
            id="points"
            name="loan amount taken"
            min="200"
            max="16000"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Marital Status
          </label>

          <select
            onChange={(e) => setMarital(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="female and divorced/seperated/married">
              Female and divorced/seperated/married
            </option>
            <option value="male and single">Male and single</option>
            <option value="Old Car Repair">Old Car Repair</option>
            <option value="Male and married/widowed">
              male and married/widowed
            </option>
            <option value="male and divorced/seperated">
              Male and divorced/seperated
            </option>
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
      </form>
    </>
  );
}

export default FormI;
