import React, { useContext } from "react";
import { authApi } from "../pages/_app";
import { motion } from "framer-motion";

function FormIII() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    page,
    setPage,
    setPhoneAvail,
    setDuration,
    setCollateral,
    setYearsOfStay,
    setHousing,
    setJob,
  } = useContext(authApi);
  const {
    noOfMaintainers,
    history,
    loanAmount,
    GorB,
    marital,
    noOfLoans,
    age,
    currentAmount,
    savingsAmount,
    instPercent,
    otherPlans,
    abroad,
    phoneAvail,
    duration,
    collateral,
    job,
    housing,
    yearsOfStay,
    purpose,
  } = useContext(authApi);
  let attrArr = [
    noOfMaintainers,
    history,
    loanAmount,
    GorB,
    marital,
    noOfLoans,
    age,
    currentAmount,
    savingsAmount,
    instPercent,
    otherPlans,
    abroad,
    phoneAvail,
    duration,
    collateral,
    job,
    housing,
    yearsOfStay,
    purpose,
  ];
  const submitFormHandler = async () => {
    const body = {
      noOfMaintainers: Number(noOfMaintainers),
      history: history,
      purpose: purpose,
      loanAmount: Number(loanAmount),
      GorB: GorB,
      marital: marital,
      noOfLoans: Number(noOfLoans),
      age: Number(age),
      currentAmount: currentAmount,
      savingsAmount: savingsAmount,
      instPercent: Number(instPercent),
      otherPlans: otherPlans,
      abroad: abroad,
      phoneAvail: phoneAvail,
      duration: Number(duration),
      collateral: collateral,
      job: job,
      housing: housing,
      yearsOfStay: Number(yearsOfStay),
    };
    console.log(body);
    await axios
      .post("https://3jemp5.deta.dev/getPrediction", body)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        router.push(
          { pathname: "/result", query: { result: response.data } },
          "/result"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  return (
    <>
      <motion.form
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
        transition={config}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <select
            onChange={(e) => setPhoneAvail(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Duration
          </label>

          <input
            onChange={(e) => setDuration(e.target.value)}
            type="number"
            id="points"
            name="loan amount taken"
            min="4"
            max="72"
            className="p-2 h-10 mt-1 w-full rounded-md border-[1px] border-[#0d9488] bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">
            Collateral
          </label>

          <select
            onChange={(e) => setCollateral(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="Real Estate">Real Estate</option>
            <option value="car or other property">car or other property</option>
            <option value="No property">No property</option>
            <option value="building society savings agreement/life insurance">
              building society savings agreement/life insurance
            </option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-6">
          <label className="block text-sm font-medium text-gray-700">Job</label>
          <select
            onChange={(e) => setJob(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="skilled employee / official">
              skilled employee / official
            </option>
            <option value="unskilled - resident">unskilled - resident</option>
            <option value="management/ self-employed/highly qualified employee/ officer">
              management/ self-employed/highly qualified employee/ officer
            </option>
            <option value="unemployed/ unskilled - non-resident">
              unemployed/ unskilled - non-resident
            </option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Years of stay
          </label>

          <select
            onChange={(e) => setYearsOfStay(e.target.value)}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Housing
          </label>

          <select
            onChange={(e) => setHousing(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose</option>
            <option value="own">own</option>
            <option value="for free">for free</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="col-span-3 sm:flex sm:items-center sm:gap-4 flex justify-center items-center">
          <button
            onClick={() => setPage(page - 1)}
            className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500"
          >
            Previous
          </button>
        </div>
        <div className="col-span-3 sm:flex sm:items-center sm:gap-4 flex justify-center items-center">
          <button
            onClick={submitFormHandler}
            className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </>
  );
}

export default FormIII;
