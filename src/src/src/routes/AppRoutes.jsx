import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyEmail from "../pages/VerifyEmail";
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
        path="/dashboard" 
        element={<Dashboard />} 
      />

    </Routes>

  );

}
