import React, { useContext, useEffect, useState } from "react";
import { authApi } from "./_app";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormI from "../components/FormI";
import FormII from "../components/FormII";
import FormIII from "../components/FormIII";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  width: "80%",
  pt: 1,
  pb: 4,
  px: 4,
};
function dashboard() {
  const { auth } = useContext(authApi);
  const [user, setUser] = useState();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  if (user) {
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
          <Box sx={style} className="md:w-[450px] w-[90%] grid grid-cols-3 gap-4">
            <FormI></FormI>
            <FormII></FormII>
            <FormIII></FormIII>
          </Box>
        </Modal>
      </>
    );
  } else {
    return <h1>Login First</h1>;
  }
}

export default dashboard;
