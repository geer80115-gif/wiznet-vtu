import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyEmail from "../pages/VerifyEmail";
import Wallet from "../pages/Wallet";
import BuyAirtime from "../pages/BuyAirtime";
import BuyData from "../pages/BuyData";
import Transactions from "../pages/Transactions";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
export default function AppRoutes(){

  return (

    <Routes>

      <Route 
        path="/" 
        element={<Landing />} 
      />
<Route
  path="/register"
  element={<Register />}
/>
      <Route
  path="/login"
  element={<Login />}
/>
      <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
      <Route
  path="/verify-email"
  element={<VerifyEmail />}
/>
      <Route
  path="/wallet"
  element={<Wallet />}
/>
      <Route
  path="/buy-airtime"
  element={<BuyAirtime />}
/>
      <Route
  path="/buy-data"
  element={<BuyData />}
/>
      <Route
  path="/transactions"
  element={<Transactions />}
/>
      <Route
  path="/profile"
  element={<Profile />}
/>

<Route
  path="/change-password"
  element={<ChangePassword />}
/>
      <Route 
        path="/dashboard" 
        element={<Dashboard />} 
      />

    </Routes>

  );

}
