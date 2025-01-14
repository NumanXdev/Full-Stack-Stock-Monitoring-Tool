import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isWelcome, SetisWelcome] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        console.log("Cookie Dashboard" + cookies.token);
        if (!cookies.token) {
          // Redirect to login if no token is present
          window.location.href = "http://localhost:3001/login";
          return;
          // console.log(cookies);
          // console.log("Cookie not avaible");
        }

        const response = await axios.post(
          "http://localhost:3000/verify",
          {},
          { withCredentials: true }
        );
        // .then((res) => {
        //   console.log(res);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
        const { status, user } = response.data;
        if (status) {
          setUsername(user);
          if (!isWelcome) {
            toast(`Hello ${user}`, { position: "top-right" });
            SetisWelcome(true);
          }
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:3001/login";
        }
      } catch (error) {
        console.error("Verification failed:", error);
        removeCookie("token");
        window.location.href = "http://localhost:3001/login";
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/dashboard" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
