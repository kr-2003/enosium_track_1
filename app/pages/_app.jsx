import "../styles/globals.css";
import { createContext, useEffect, useState } from "react";
export const authApi = createContext(null);

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState();
  const [noOfMaintainers, setNoOfMaintainers] = useState();
  const [history, setHistory] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [GorB, setGorB] = useState();
  const [marital, setMarital] = useState();
  const [purpose, setPurpose] = useState();
  const [noOfLoans, setNoOfLoans] = useState();
  const [age, setAge] = useState();
  const [currentAmount, setCurrentAmount] = useState();
  const [savingsAmount, setSavingsAmount] = useState();
  const [instPercent, setInstPercent] = useState();
  const [otherPlans, setOtherPlans] = useState();
  const [abroad, setAbroad] = useState();
  const [phoneAvail, setPhoneAvail] = useState();
  const [duration, setDuration] = useState();
  const [collateral, setCollateral] = useState();
  const [job, setJob] = useState();
  const [housing, setHousing] = useState();
  const [yearsOfStay, setYearsOfStay] = useState();
  useEffect(() => {
    if (auth) {
      // console.log(auth)
      localStorage.setItem("user", JSON.stringify(auth));
    }
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    // console.log(noOfMaintainers);
  }, []);
  return (
    <authApi.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        noOfMaintainers,
        setNoOfMaintainers,
        history,
        setHistory,
        loanAmount,
        setLoanAmount,
        GorB,
        setGorB,
        marital,
        setMarital,
        noOfLoans,
        setNoOfLoans,
        age,
        setAge,
        currentAmount,
        setCurrentAmount,
        savingsAmount,
        setSavingsAmount,
        instPercent,
        setInstPercent,
        otherPlans,
        setOtherPlans,
        abroad,
        setAbroad,
        phoneAvail,
        setPhoneAvail,
        duration,
        setDuration,
        collateral,
        setCollateral,
        job,
        setJob,
        housing,
        setHousing,
        yearsOfStay,
        setYearsOfStay,
        purpose,
        setPurpose,
      }}
    >
      <Component {...pageProps} />
    </authApi.Provider>
  );
}
