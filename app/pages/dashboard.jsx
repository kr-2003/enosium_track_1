import React, { useContext, useEffect, useState } from "react";
import { authApi } from "./_app";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormI from "../components/FormI";
import FormII from "../components/FormII";
import FormIII from "../components/FormIII";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  width: "400px",
  pt: 1,
  pb: 4,
  px: 4,
};
function Dashboard() {
  const { auth } = useContext(authApi);
  const [user, setUser] = useState();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    page,
    setPage,
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
 
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <>
      <Header></Header>
      <div className="text-center">
        <Image width={100} height={100} src="/images/loan.jpg"></Image>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <Button></Button>
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="md:w-[450px] w-[90%] grid grid-cols-1 gap-4">
          {page == 0 && <FormI></FormI>}
          {page == 1 && <FormII></FormII>}
          {page == 2 && <FormIII></FormIII>}
          {/* <FormII></FormII>
          <FormIII></FormIII> */}
          {/* <div className="col-span-6 sm:flex sm:items-center sm:gap-4 w-100 flex justify-center items-center">
            <button
              onClick={submitFormHandler}
              className="inline-block shrink-0 rounded-md border border-[#0d9488] bg-[#0d9488] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#0d9488] focus:outline-none focus:ring active:text-blue-500"
            >
              Submit
            </button>
          </div> */}
        </Box>
      </Modal>
    </>
  );
}

export default Dashboard;
