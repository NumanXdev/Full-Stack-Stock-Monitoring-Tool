import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isWelcome, SetisWelcome] = useState(false);
  const [userData, setUserData] = useState({ username: "" });

  // const FRONTEND_URL = "https://full-stack-stock-monitoring-tool.vercel.app";
  const FRONTEND_URL = "https://full-stack-stock-monitoring-tool.vercel.app";

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        console.log("All Cookies:", cookies);
        if (!cookies.token) {
          console.error("Token not found in cookies.");
          window.location.href = `${FRONTEND_URL}/login`;
          return;
        }

        try {
          const decodedToken = jwtDecode(cookies.token);
          console.log("Decoded Token:", decodedToken);
          const { username } = decodedToken;
          setUserData({ username });
        } catch (error) {
          console.error("Error decoding token:", error);
          removeCookie("token");
          window.location.href = `${FRONTEND_URL}/login`;
          return;
        }

        const response = await axios.post(
          "https://full-stack-stock-monitoring-tool.onrender.com/verify",
          {},
          { withCredentials: true }
        );

        const { status, user } = response.data;
        if (status) {
          setUsername(user);
          if (!isWelcome) {
            toast(`Hello ${user}`, { position: "top-left" });
            SetisWelcome(true);
          }
        } else {
          console.error("Verification failed");
          removeCookie("token");
          window.location.href = `${FRONTEND_URL}/login`;
        }
      } catch (error) {
        console.error("Verification error:", error);
        removeCookie("token");
        window.location.href = `${FRONTEND_URL}/login`;
      }
    };

    verifyCookie();
  }, [cookies, removeCookie, isWelcome]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={<Summary user={userData} />}
          />
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
